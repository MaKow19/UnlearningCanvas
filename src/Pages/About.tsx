import { Stack, Typography, Card } from "@mui/material";



const About = () => {
    return(
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} width={1490} height={'auto'}>
            <Stack width={1200} sx={{pb: 10}}>
                <Card>
                    <Typography variant='h4'>
                        Was ist Unlearning?
                    </Typography>
                    <Typography color={'black'}>
                    Organisationales Verlernen beschäftigt sich mit dem Verlernen von alten Praktiken und dem Ablegen von nicht relevantem oder
                    irrführendem Wissen innerhalb einer Organisation. Dazu gehören unter anderem Normen, Werte, Routinen und Verhaltensweisen.
                    Diese zu hinterfragen und ggf. auszutauschen kann einen strategischen Vorteil für die Organisation bieten. 
                    </Typography>
                </Card>
            </Stack>
            
            <Stack width={1200} sx={{pb: 10}}>
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