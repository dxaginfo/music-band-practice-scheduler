const mongoose = require('mongoose');

const RehearsalSchema = new mongoose.Schema(
  {
    band: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Band',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    startTime: {
      type: Date,
      required: [true, 'Please add a start time'],
    },
    endTime: {
      type: Date,
      required: [true, 'Please add an end time'],
      validate: {
        validator: function (value) {
          return value > this.startTime;
        },
        message: 'End time must be after start time',
      },
    },
    location: {
      name: String,
      address: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    recurrence: {
      frequency: {
        type: String,
        enum: ['none', 'daily', 'weekly', 'monthly'],
        default: 'none',
      },
      interval: {
        type: Number,
        default: 1,
      },
      endDate: Date,
    },
    equipment: [{
      type: String,
      trim: true,
    }],
    setlist: [{
      type: String,
      trim: true,
    }],
    notes: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    attendance: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        status: {
          type: String,
          enum: ['confirmed', 'declined', 'tentative'],
          default: 'tentative',
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Populate all band members as tentative attendees
RehearsalSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const Band = mongoose.model('Band');
      const band = await Band.findById(this.band);

      if (band) {
        this.attendance = band.members.map((member) => ({
          user: member.user,
          status: 'tentative',
        }));
      }
    } catch (err) {
      console.error('Error populating attendees:', err);
    }
  }

  next();
});

module.exports = mongoose.model('Rehearsal', RehearsalSchema);
