import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, Typography, Stack } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import { Anleitung } from './Anleitung';

type InfoCanvasButtonProps = {
  title: string;
  index: number;
}

const InfoCanvasButton: React.FC<InfoCanvasButtonProps> = ({ title, index }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  const handleClickOpen = () => {
    setOpen(true);
    setSelectedIndex(index); // Setze den ausgewählten Index, wenn der Button geöffnet wird
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(undefined); // Reset the selected index when the dialog is closed
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <InfoIcon />
      </IconButton>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth
        maxWidth="md"
        sx={{ 
          '& .MuiDialog-paper': { 
            width: '100%', 
            height: '100%', 
            maxHeight: '800px', 
            overflow: 'hidden'
          } 
        }}
      >
        <Stack height="100%" width="100%" direction="column" spacing={2}>
          <Stack direction="row" justifyContent="flex-end" sx={{ padding: 1 }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <DialogContent sx={{ overflowY: 'auto' }}>
            <Anleitung index={selectedIndex} />
          </DialogContent>
        </Stack>
      </Dialog>
    </>
  );
};

export default InfoCanvasButton;
