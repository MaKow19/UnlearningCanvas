import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

// Typdefinitionen für die Session
interface Session {
    sessionId: string;
    feld: string;
    feld2: string;
    feld3: string;
    feld4: string;
    feld5: string;
    feld6: string;
}

const CreateSession: React.FC = () => {
  const [sessionId, setSessionId] = useState('');
  const [sessionData, setSessionData] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
          const response = await axios.get<Session>(`http://unlearningcanvasbackend-production.up.railway.app/${sessionId}`);
          setSessionData(response.data);
          setSuccess('Session found successfully.');
          setError(null);
      } catch (error: any) {
          if (error.response?.status === 404) {
              const newSession: Session = { sessionId, feld: '', feld2: '', feld3: '', feld4: '', feld5: '', feld6: '' };
              await axios.post('http://unlearningcanvasbackend-production.up.railway.app/about', newSession);
              setSessionData(newSession);
              setSuccess('New session created successfully.');
              setError(null);
          } else {
              setError('An error occurred while fetching the session.');
              setSuccess(null);
          }
      }
  };

  return (
      <Box>
          <Typography variant="h4">Create or Fetch Session</Typography>
          <form onSubmit={handleSubmit}>
              <TextField
                  label="Session ID"
                  value={sessionId}
                  onChange={(e) => setSessionId(e.target.value)}
                  fullWidth
                  margin="normal"
              />
              <Button variant="contained" color="primary" type="submit">
                  Submit
              </Button>
          </form>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
          {sessionData && (
              <Box mt={2}>
                  <Typography variant="h6">Session Data</Typography>
                  <pre>{JSON.stringify(sessionData, null, 2)}</pre>
              </Box>
          )}
      </Box>
  );
};

export default CreateSession;