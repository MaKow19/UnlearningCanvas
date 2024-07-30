import { Stack, Typography, Card, Button, CardContent, CardMedia } from "@mui/material";
import { Link } from 'react-router-dom';
import UnlearningCanvasLogo from '../Images/UnlearningCanvasLogo.jpg';

const About = () => {
    return(
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} width={1490} height={'auto'}>
            <Stack direction={'row'} width={1200} sx={{pb: 7}}>
                <Card sx={{mr: 10}}>
                    <Typography variant='h4'>
                        Was ist Unlearning?
                    </Typography>
                    <Typography color={'black'}>
                    Organisationales Verlernen beschäftigt sich mit dem Verlernen von alten Praktiken und dem Ablegen von nicht relevantem oder
                    irrführendem Wissen innerhalb einer Organisation. Dazu gehören unter anderem Normen, Werte, Routinen und Verhaltensweisen.
                    Diese zu hinterfragen und ggf. auszutauschen kann einen strategischen Vorteil für die Organisation bieten. 
                    </Typography>
                </Card>
                <Card>
                    <Typography variant='h4'>
                        Was ist ein Canvas?
                    </Typography>
                    <Typography color={'black'}>
                    Organisationales Verlernen beschäftigt sich mit dem Verlernen von alten Praktiken und dem Ablegen von nicht relevantem oder
                    irrführendem Wissen innerhalb einer Organisation. Dazu gehören unter anderem Normen, Werte, Routinen und Verhaltensweisen.
                    Diese zu hinterfragen und ggf. auszutauschen kann einen strategischen Vorteil für die Organisation bieten. 
                    </Typography>
                </Card>
            </Stack>
            
            <Stack alignContent={'center'} width={320} height={390} sx={{mb: 7, bgcolor: 'lightgrey'}}>
                <Card>
                    <CardMedia
                        component='img'
                        height='auto'
                        image={UnlearningCanvasLogo}
                        alt='Unlearning Canvas'
                    />
                    <CardContent>
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
            
            <Stack width={1200}>
                <Card>
                    <Typography variant='h4'>
                        Nutzungshinweise
                    </Typography>
                    <Typography color={'black'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque quae provident nostrum quis! Id itaque reiciendis nulla soluta earum architecto non! Veritatis nobis delectus adipisci excepturi distinctio, sed voluptates!
                    </Typography>
                </Card>
            </Stack>
        </Stack>
    )
}

export default About;