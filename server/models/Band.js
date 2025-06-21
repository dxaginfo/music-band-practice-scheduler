const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    logo: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        role: {
          type: String,
          enum: ['admin', 'member'],
          default: 'member',
        },
        instruments: [{
          type: String,
          trim: true,
        }],
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    defaultLocation: {
      name: String,
      address: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Add createdBy user as a member with admin role
BandSchema.pre('save', async function (next) {
  if (this.isNew) {
    const creator = {
      user: this.createdBy,
      role: 'admin',
    };

    // Check if creator is already in members array
    const creatorExists = this.members.some(
      (member) => member.user.toString() === this.createdBy.toString()
    );

    if (!creatorExists) {
      this.members.push(creator);
    }
  }

  next();
});

module.exports = mongoose.model('Band', BandSchema);
