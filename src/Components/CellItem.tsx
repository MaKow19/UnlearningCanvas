import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';


type CellItemProps = {
    texts: string[];
    onEditItem: (index: number, newText: string) => void;
    editableIndex: number | null;
    setEditableIndex: (index: number | null) => void;
    handleBlur: () => void;
    handleItemClick: (index: number) => void;
    handleDelete: (index: number) => void;
}

const CellItem: React.FC<CellItemProps> = ({ texts, onEditItem, editableIndex, setEditableIndex, handleBlur, handleDelete }) => {
    const handleButtonClick = (index: number) => {
        setEditableIndex(index);
    }

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        onEditItem(index, e.target.value);
    }

    const handleItemKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleBlur();
        }
    }

    const handleTextClick = (e: MouseEvent) => {
        e.stopPropagation();
    }
    //types passen schon
    return (
        <Grid item>
            <List >
                {texts.map((text, index) => (
                    <ListItem key={index} sx={{hyphens: 'manual', overflow: 'hidden', width: 'auto'}}>
                        {editableIndex === index ? (
                            <TextField
                                value={text}
                                /*
                                // @ts-ignore */
                                onChange={(e) => handleItemChange(e, index)}
                                onBlur={handleBlur}
                                onClick={handleTextClick}
                                /*
                                // @ts-ignore */
                                onKeyUp={(e) => handleItemKeyUp(e, index)}
                                fullWidth
                                autoFocus
                        
                            />
                        ) : (
                            <>
                                <ListItemButton onClick={() => handleButtonClick(index)} sx={{width: '70%'}}>
                                    <ListItemIcon sx={{ml: '-20px'}}>
                                        <EditIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                                <ListItemButton sx={{mr: '-28px', width: '5%'}}>
                                    <Delete onClick={() => handleDelete(index)}/>
                                </ListItemButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}

export default CellItem;