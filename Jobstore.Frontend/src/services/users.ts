import axios from 'axios';

import {SignUpModel, UserModel } from '../types';

const userService = {
    getUserById,
    signUp,
    updateUser,
}

async function getUserById(userId: string): Promise<UserModel> {
    const response = await axios.get<UserModel>(`accounts/${userId}`);
    return response.data;
}

async function signUp(data: SignUpModel): Promise<string> {
    const response = await axios.post<UserModel>('accounts', data);
    return response.data.id;
}

async function updateUser(userId: string, firstName: string, lastName: string): Promise<void> {
    const response = await axios.put(`accounts/${userId}`, {
        firstName,
        lastName
    });
    return response.data.id;
}

export default userService;