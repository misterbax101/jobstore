import axios from 'axios';

import {SignUpModel, UserModel } from '../types';

const userService = {
    getUserById,
    signUp
}

async function getUserById(userId: string): Promise<UserModel> {
    const response = await axios.get<UserModel>(`accounts/${userId}`);
    return response.data;
}

async function signUp(data: SignUpModel): Promise<string> {
    const response = await axios.post<UserModel>('accounts', data);
    return response.data.id;
}



export default userService;