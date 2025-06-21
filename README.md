# Music Band Practice Scheduler

A comprehensive web application to help musicians and bands efficiently schedule and manage their rehearsal sessions.

## Features

- **User Management**
  - User registration and authentication
  - User profile creation with instrument/role specification
  - Band/group creation and member invitation system
  - Role-based permissions (admin, member)

- **Scheduling**
  - Calendar view of scheduled rehearsals
  - Availability polling system
  - Automatic suggestion of optimal rehearsal times
  - Recurring rehearsal scheduling
  - Integration with external calendars (Google, Apple, Microsoft)

- **Rehearsal Management**
  - Rehearsal location management
  - Equipment checklist for each rehearsal
  - Rehearsal agenda/setlist planning
  - Attendance tracking
  - Rehearsal notes and feedback system

- **Communication**
  - In-app messaging system
  - Email and SMS notifications
  - Rehearsal reminders (24h, 1h before)
  - File sharing for sheet music, recordings, etc.

## Technology Stack

### Frontend
- React.js
- Redux or Context API for state management
- Material-UI or Chakra UI for UI components
- FullCalendar.js or React Big Calendar for scheduling
- Formik with Yup for form validation
- Axios for HTTP requests

### Backend
- Node.js
- Express.js
- JWT with Passport.js for authentication
- Nodemailer with SendGrid or Mailgun for email service
- Twilio API for SMS
- AWS S3 or Google Cloud Storage for file storage

### Database
- MongoDB with Mongoose ODM
- Redis for caching and session management

### DevOps
- Git/GitHub for version control
- GitHub Actions for CI/CD
- Heroku, AWS, or DigitalOcean for hosting
- Docker (optional)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Redis (optional)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/dxaginfo/music-band-practice-scheduler.git
   cd music-band-practice-scheduler
   ```

2. Install dependencies
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   ```
   # Create .env file in server directory
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. Start development servers
   ```
   # Start backend server
   cd server
   npm run dev

   # Start frontend development server
   cd ../client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
music-band-practice-scheduler/
├── client/                # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API service functions
│   │   ├── utils/         # Utility functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
│
├── server/                # Node.js backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── app.js             # Express app setup
│   ├── server.js          # Server entry point
│   └── package.json       # Backend dependencies
│
├── .gitignore             # Git ignore file
├── docker-compose.yml     # Docker compose configuration
└── README.md              # Project documentation
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user
- `POST /api/auth/logout` - Log out a user
- `GET /api/auth/me` - Get current user information

### User Endpoints
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Band Endpoints
- `POST /api/bands` - Create a new band
- `GET /api/bands` - Get all bands
- `GET /api/bands/:id` - Get a specific band
- `PUT /api/bands/:id` - Update a band
- `DELETE /api/bands/:id` - Delete a band
- `POST /api/bands/:id/members` - Add a member to a band
- `DELETE /api/bands/:id/members/:userId` - Remove a member from a band

### Rehearsal Endpoints
- `POST /api/rehearsals` - Create a new rehearsal
- `GET /api/rehearsals` - Get all rehearsals
- `GET /api/rehearsals/:id` - Get a specific rehearsal
- `PUT /api/rehearsals/:id` - Update a rehearsal
- `DELETE /api/rehearsals/:id` - Delete a rehearsal
- `POST /api/rehearsals/:id/attendance` - Update attendance for a rehearsal

### Poll Endpoints
- `POST /api/polls` - Create a new availability poll
- `GET /api/polls` - Get all polls
- `GET /api/polls/:id` - Get a specific poll
- `PUT /api/polls/:id` - Update a poll
- `DELETE /api/polls/:id` - Delete a poll
- `POST /api/polls/:id/responses` - Respond to a poll

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all the musicians and bands who provided feedback on their rehearsal scheduling challenges
- Inspired by tools like Doodle, BandHelper, and Konzertmeister