import axios from 'axios';
import {
    fetchUserData as mockFetchUserData,
    fetchUserActivity as mockFetchUserActivity,
    fetchUserAverageSessions as mockFetchUserAverageSessions,
    fetchUserPerformance as mockFetchUserPerformance,
} from './mockServices';
import { USE_MOCK_DATA, API_BASE_URL } from '../config';

const apiCall = async url => {
    if (USE_MOCK_DATA) {
        // Simuler un délai pour les données mockées
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    const response = await axios.get(url);
    return response.data;
};

export const fetchUserData = async userId => {
    try {
        if (USE_MOCK_DATA) {
            return await mockFetchUserData(userId);
        }
        return await apiCall(`${API_BASE_URL}/user/${userId}`);
    } catch (error) {
        console.error('===Error fetching user data:===', error);
        throw error;
    }
};

export const fetchUserActivity = async userId => {
    try {
        if (USE_MOCK_DATA) {
            return await mockFetchUserActivity(userId);
        }
        return await apiCall(`${API_BASE_URL}/user/${userId}/activity`);
    } catch (error) {
        console.error('===Error fetching user activity:===', error);
        throw error;
    }
};

export const fetchUserAverageSessions = async userId => {
    try {
        if (USE_MOCK_DATA) {
            return await mockFetchUserAverageSessions(userId);
        }
        return await apiCall(`${API_BASE_URL}/user/${userId}/average-sessions`);
    } catch (error) {
        console.error('===Error fetching user average sessions:===', error);
        throw error;
    }
};

export const fetchUserPerformance = async userId => {
    try {
        if (USE_MOCK_DATA) {
            return await mockFetchUserPerformance(userId);
        }
        return await apiCall(`${API_BASE_URL}/user/${userId}/performance`);
    } catch (error) {
        console.error('===Error fetching user performance:===', error);
        throw error;
    }
};
