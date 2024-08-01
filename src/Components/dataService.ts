import axios from 'axios';

export const fetchSessionData = async (sessionId: string) => {
    const response = await axios.get(`http://localhost:8080/api/about/${sessionId}`);
    return response.data;
};

export const updateSessionData = async (sessionId: string, fieldName: string, data: string[]) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/canvas/${sessionId}/${fieldName}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating session data:', error);
        throw error; 
    }
};

export const deleteSessionDataItem = async (sessionId: string, fieldName: string, index: number) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/canvas/${sessionId}/${fieldName}/${index}`);
        return response.data;
    } catch (error) {
        console.error('Error delteing session data item:', error);
        throw error; 
    }
};

