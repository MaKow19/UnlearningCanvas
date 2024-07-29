import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, Typography, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

type InfoCanvasButtonProps = {
  title: string;
}

const InfoCanvasButton: React.FC<InfoCanvasButtonProps> = ({ title }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getContent = (title: string) => {
    switch (title) {
      case 'Hinweise erfassen':
        return 'Hier können Sie Hinweise erfassen.';
      case 'Festlegung des Hinweises':
        return 'Hier legen Sie den Hinweis fest.';
      case 'Teamreflektion':
        return 'Hier erfolgt die Teamreflektion.';
      case 'Proaktiv Hindernisse erkennen':
        return 'Hier erkennen Sie proaktiv Hindernisse.';
      case 'Gemeinsames Verständnis der Beteiligten':
        return 'Hier schaffen Sie ein gemeinsames Verständnis der Beteiligten.';
      case 'Sensing Datenbank':
        return 'Hier befindet sich die Sensing Datenbank.';
      default:
        return '';
    }
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <InfoIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Stack justifyContent={'center'}>
            <Stack alignItems={'flex-end'}>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Stack>
            <Stack>
                <DialogTitle>
                    {title}
                </DialogTitle>
            </Stack>
            
        </Stack>
        
        
        
        
        <DialogContent>
          <Typography>
            {getContent(title)}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoCanvasButton;
