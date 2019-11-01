import axios from 'axios';

import UserModel from '../models/UserModel';
import SignUpModel from '../models/SignUpModel';

const userService = {
    getUserById,
    signUp
}

function getUserById(userId: string): Promise<UserModel> {
    return axios.get<UserModel>(`accounts/${userId}`)
        .then(response => response.data);
}

function signUp(data: SignUpModel): Promise<string> {
    return axios.post<UserModel>('accounts', data)
        .then(response => response.data.id);
}

export default userService;