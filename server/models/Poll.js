const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema(
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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    timeOptions: [
      {
        startTime: {
          type: Date,
          required: true,
        },
        endTime: {
          type: Date,
          required: true,
        },
        location: {
          name: String,
          address: String,
        },
        responses: [
          {
            user: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User',
              required: true,
            },
            availability: {
              type: String,
              enum: ['available', 'unavailable', 'tentative'],
              required: true,
            },
            comment: String,
            respondedAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
    deadline: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['open', 'closed', 'scheduled'],
      default: 'open',
    },
    selectedOption: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Poll', PollSchema);
