import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, pb: 5 }}>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2} />
            <Grid item xs={8} container justifyContent="center">
              <Typography variant="h4" component="div" sx={{ color: 'black', textAlign: 'center' }}>
                Unlearning Canvas
              </Typography>
            </Grid>
            <Grid item xs={2} container justifyContent="flex-end" sx={{borderLeft: 'solod'}}>
              <Button fullWidth color='primary'>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'black', padding: '0.5rem', borderRadius: '4px' }}>
                    Informationen
                  </Typography>
                </Link>
              </Button>
              <Button fullWidth color='primary'>
                <Link to='/canvas' style={{ textDecoration: 'none' }}>
                  <Typography sx={{ color: 'black', padding: '0.5rem', borderRadius: '4px' }}>
                    Canvas
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
