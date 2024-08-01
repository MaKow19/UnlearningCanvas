import { Stack, Typography, Card, Button, CardContent, CardMedia, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import UnlearningCanvasLogo from '../Images/UnlearningCanvasLogo.jpg';
import { Anleitung } from "../Components/Anleitung";
import { useState } from "react";
import axios from "axios";

const About = () => {
    const [sessionId, setSessionId] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (sessionId) {
            sessionStorage.setItem('sessionId', sessionId);
            navigate('/canvas');
        }
    }
    
    const handleRegister = async () => {
        if (!sessionId) {
            console.error('Session ID is required');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/api/about', { sessionId }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                sessionStorage.setItem('sessionId', sessionId);
                alert(`Session ID erfolgreich registriert, du kannst dich jetzt einloggen!`)
                navigate('/about');
            }
        } catch (err) {
            console.error('Failed to create session');
        }
    };
    
    return (
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} width={1490} height={'auto'}>
            <Stack direction={'row'} width={1200} sx={{ pb: 7, justifyContent: 'center' }}>
                <Card sx={{ mr: 10, maxWidth: 400, bgcolor: '#fafcff'}}>
                    <Typography variant='h4'>
                        Was ist Unlearning?
                    </Typography>
                    <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ textAlign: 'justify', p: 1}}
                    >
                        Organisationales Verlernen beschäftigt sich mit dem Verlernen von alten Praktiken und dem Ablegen von nicht relevantem oder
                        irrführendem Wissen innerhalb einer Organisation. Dazu gehören unter anderem Normen, Werte, Routinen und Verhaltensweisen.
                        Diese zu hinterfragen und ggf. auszutauschen kann einen strategischen Vorteil für die Organisation bieten. 
                    </Typography>
                </Card>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} sx={{ pb: 7 }}>
                    <TextField 
                        label="Session ID" 
                        value={sessionId} 
                        onChange={(e) => setSessionId(e.target.value)} 
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleRegister} sx={{ mt: 2 }}>
                        Register
                    </Button>

                </Stack>
                <Card sx={{ maxWidth: 400, ml: 10, bgcolor: '#fafcff'}}>
                    <Typography variant='h4'>
                        Was sind Visual Inquiry Tools?
                    </Typography>
                    <Typography 
                        variant="body1" 
                        paragraph 
                        sx={{ textAlign: 'justify', p: 1}}
                    >
                    Visual Inquiry Tools sind innovative, kollaborative Werkzeuge, die Ihnen helfen, komplexe und schwer zu definierende Probleme zu lösen.
                    Durch die Verwendung von zweidimensionalen grafischen Darstellungen, sogenannten Canvas, wird das Problem strukturiert und übersichtlich aufbereitet.
                    Diese Canvas zerlegen die Probleme in verständliche Teile, was zu einem besseren gemeinsamen Verständnis führt.
                    So wird die Zusammenarbeit und das Verständnis zwischen verschiedenen Personen oder Teams erleichtert, um Herausforderungen effektiver zu bewältigen.
                    </Typography>
                </Card>
            </Stack>
            <Stack alignContent={'center'} width={320} height={390} sx={{ mb: 7, bgcolor: 'lightgrey' }}>
                <Card>
                    <CardMedia
                        component='img'
                        height='auto'
                        image={UnlearningCanvasLogo}
                        alt='Unlearning Canvas'
                    />
                    <CardContent sx={{bgcolor: '#f2f4ff'}}>
                        <Button>
                            <Link to='/canvas' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ color: 'black', padding: '0.5rem', borderRadius: '4px' }}>
                                    Zum Canvas
                                </Typography>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </Stack>
            <Stack>
                <Anleitung />
            </Stack>
        </Stack>
    );
}
export default About;