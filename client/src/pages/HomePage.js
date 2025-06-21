import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import {
  EventNote as EventNoteIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  CalendarToday as CalendarTodayIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const features = [
    {
      title: 'Simplified Scheduling',
      description: 'Poll your band members for availability and automatically find the best rehearsal times.',
      icon: <CalendarTodayIcon sx={{ fontSize: 50 }} color="primary" />,
    },
    {
      title: 'Band Management',
      description: 'Create and manage multiple bands, invite members, and assign roles.',
      icon: <GroupIcon sx={{ fontSize: 50 }} color="primary" />,
    },
    {
      title: 'Rehearsal Planning',
      description: 'Plan setlists, track equipment needs, and keep notes for each rehearsal.',
      icon: <EventNoteIcon sx={{ fontSize: 50 }} color="primary" />,
    },
    {
      title: 'Smart Notifications',
      description: 'Automated reminders and notifications to ensure everyone shows up prepared.',
      icon: <NotificationsIcon sx={{ fontSize: 50 }} color="primary" />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          mb: 4,
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            Music Band Practice Scheduler
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Simplify your band's rehearsal scheduling and make the most of your practice time.
            Coordinate with band members, plan your setlists, and never miss a rehearsal again.
          </Typography>
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {isAuthenticated ? (
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/register')}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/login')}
                >
                  Log In
                </Button>
              </>
            )}
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                }}
                elevation={3}
              >
                <Box sx={{ m: 2 }}>{feature.icon}</Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* How It Works Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>
                  1. Create Your Band
                </Typography>
                <Typography paragraph>
                  Start by setting up your band profile and inviting your band members.
                </Typography>

                <Typography variant="h5" gutterBottom>
                  2. Set Availability
                </Typography>
                <Typography paragraph>
                  Each member sets their weekly availability or responds to scheduling polls.
                </Typography>

                <Typography variant="h5" gutterBottom>
                  3. Schedule Rehearsals
                </Typography>
                <Typography paragraph>
                  Find the best time that works for everyone and schedule your rehearsal.
                </Typography>

                <Typography variant="h5" gutterBottom>
                  4. Prepare & Practice
                </Typography>
                <Typography paragraph>
                  Add setlists, equipment needs, and receive automatic reminders.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random/600x400/?band,music,rehearsal"
                alt="Band rehearsal"
                sx={{ borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Paper
          sx={{
            bgcolor: 'secondary.light',
            p: 6,
            my: 6,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ready to Streamline Your Band Rehearsals?
          </Typography>
          <Typography variant="h6" paragraph>
            Join thousands of musicians who are making the most of their practice time.
          </Typography>
          {!isAuthenticated && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ mt: 2 }}
            >
              Get Started for Free
            </Button>
          )}
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Music Band Practice Scheduler. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
