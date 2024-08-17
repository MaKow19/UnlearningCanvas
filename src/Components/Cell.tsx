import { Grid, Divider, TextField, Typography, Stack, Box } from "@mui/material";
import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import CellItem from './CellItem';
import InfoCanvasButton from "./InfoCanvasButton";
import { fetchSessionData, updateSessionData, deleteSessionDataItem } from './dataService';

type CellProps = {
    title: string;
    index: number;
    numberIcon?: React.ReactNode;
    titleIcon?: React.ReactNode;
}

const Cell = ({ title, numberIcon, titleIcon, index }: CellProps) => {
    const [value, setValue] = useState('');
    const [itemList, setItemList] = useState<string[]>([]);
    const [editableIndex, setEditableIndex] = useState<number | null>(null);

    useEffect(() => {
        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) {
            fetchSessionData(sessionId).then((data) => {
                const fields = [
                    data.feld1, data.feld2, data.feld3, data.feld4, data.feld5, data.feld6, data.feld7
                ];
                
                const fieldValue = fields[index];
                if (Array.isArray(fieldValue)) {
                    setItemList(fieldValue);
                } else {
                    setItemList([]);
                }
            }).catch(error => {
                console.error('Failed to fetch session data:', error);
                setItemList([]);
            });
        }
    }, [index]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            const newList = [...itemList, value];
            setItemList(newList);
            setValue('');

            const sessionId = sessionStorage.getItem('sessionId');
            if (sessionId) {
                try {
                    await updateSessionData(sessionId, `feld${index + 1}`, newList);
                } catch (error) {
                    console.error('Failed to update session data:', error);
                }
            }
        }
    }

    const handleDelete = async (itemIndex: number) => {
        const newList = itemList.filter((_, i) => i !== itemIndex);
        setItemList(newList);

        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) {
            try {
                await deleteSessionDataItem(sessionId, `feld${index + 1}`, itemIndex);
            } catch (error) {
                console.error('Failed to delete session data item:', error);
            }
        }
    }

    const handleEditItem = async (itemIndex: number, newText: string) => {
        const updatedList = [...itemList];
        updatedList[itemIndex] = newText;
        setItemList(updatedList);

        const sessionId = sessionStorage.getItem('sessionId');
        if (sessionId) {
            try {
                await updateSessionData(sessionId, `feld${index + 1}`, updatedList);
            } catch (error) {
                console.error('Failed to update session data:', error);
            }
        }
    }

    const handleBlur = () => {
        setEditableIndex(null);
    }

    const handleItemClick = (itemIndex: number) => {
        setEditableIndex(itemIndex);
    }

    return (
        <Grid justifyContent={'center'} width={'100%'} height={'79%'}>
            <Stack height={'auto'} sx={{ pb: 1 }}>
                <Typography variant={'h5'}>
                    {title}
                    
                </Typography>
            </Stack>
            <Box>
                <InfoCanvasButton title={title} index={index} />
            </Box>
            <Box>
                {numberIcon}
                {titleIcon}
            </Box>
            <Divider sx={{ bgcolor: 'black', mt: '5px' }} />
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
    );
}

export default Cell;
