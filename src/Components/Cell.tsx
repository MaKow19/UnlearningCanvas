import { Grid, Divider, TextField, Typography, Stack } from "@mui/material";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import CellItem from './CellItem';
import InfoCanvasButton from "./InfoCanvasButton";

type CellProps = {
    title: string;
    numberIcon?: React.ReactNode
    titleIcon?: React.ReactNode
}

const Cell = ({ title, numberIcon, titleIcon }: CellProps) => {

    const [value, setValue] = useState('');
    const [itemList, setItemList] = useState<string[]>([]);
    const [editableIndex, setEditableIndex] = useState<number | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setItemList([...itemList, value]);
            setValue('');
        }
    }

    const handleEditItem = (index: number, newText: string) => {
        const updatedList = [...itemList];
        updatedList[index] = newText;
        setItemList(updatedList);
    }

    const handleBlur = () => {
        setEditableIndex(null);
    }

    const handleItemClick = (index: number) => {
        setEditableIndex(index);
    }

    const handleDelete = (index: number) => {
        const updatedList = itemList.filter((_, i) => i !== index);
        setItemList(updatedList);
    }

    return (
        <>
            <Grid justifyContent={'center'} width={'100%'} height={'79%'}>
                <Stack height={'auto'} sx={{pb: 1}}>
                    <Typography variant={'h5'}>
                        {title}
                        <InfoCanvasButton title={title}/>
                    </Typography>
                    
                </Stack>
                {numberIcon}
                {titleIcon}
                <Divider sx={{bgcolor: 'black', mt: '5px'}}/>
                <CellItem
                    texts={itemList}
                    onEditItem={handleEditItem}
                    editableIndex={editableIndex}
                    setEditableIndex={setEditableIndex}
                    handleBlur={handleBlur}
                    handleItemClick={handleItemClick}
                    handleDelete={handleDelete}
                />
                <TextField value={value} onChange={handleChange} onKeyUp={handleEnter} fullWidth />
            </Grid>
        </>
        
    );
}


export default Cell;
