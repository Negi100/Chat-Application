import { httpClient } from "../config/AxiosHelper";

export const createRoomAPI= async (roomDetail) => {

    const response=  await httpClient.post(`/api/rooms`, roomDetail, {
        headers:{
            "Content-Type": "text/plain",
        }
    });
    return response.data;
}


export const joinChatAPI = async (roomId) =>{
    const response =  await httpClient.get(`/api/rooms/${roomId}`)
    return response.data;
}

export const getMessages = async(roomId, size= 50, page=0)=>{
    const response = await httpClient.get(`/api/rooms/${roomId}/messages?size=${size}&page=${page}`)
    return response.data
}