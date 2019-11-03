import axios from 'axios'

import LoginModel from '../models/LoginModel'
import LoginResponse from '../models/apiResponses/LoginResponse'
import setAuthToken from '../untils/setAuthToken';

const authService = {
    login,
    logout,
    getUserIdFromStore
};

async function login(model: LoginModel): Promise<string> {
    try {
        const response = await axios.post<LoginResponse>('/auth/login', model);
        localStorage.setItem('authData', JSON.stringify(response.data));
        setAuthToken(response.data.auth_token);
        return response.data.id;
    }
    catch (error) {
        throw error.response.data || 'Internal Server Error';
    }
}

function logout() {
    localStorage.removeItem('authData');
    setAuthToken(null);
}

function getUserIdFromStore(): string | null {
    const authDateString = localStorage.getItem('authData');
    if (authDateString != null) {
        const authDate = JSON.parse(authDateString) as LoginResponse;
        setAuthToken(authDate.auth_token);
        return authDate.id;
    }
    return null;
}

export default authService;