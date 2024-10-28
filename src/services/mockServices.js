import userData from './mockData/userData.json';
import userActivity from './mockData/userActivity.json';
import userAverageSessions from './mockData/userAverageSessions.json';
import userPerformance from './mockData/userPerformance.json';

export const fetchUserData = async userId => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: userData.find(user => user.id === userId) });
        }, 100);
    });
};

export const fetchUserActivity = async userId => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: userActivity.find(activity => activity.userId === userId),
            });
        }, 100);
    });
};

export const fetchUserAverageSessions = async userId => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: userAverageSessions.find(
                    sessions => sessions.userId === userId
                ),
            });
        }, 100);
    });
};

export const fetchUserPerformance = async userId => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: userPerformance.find(perf => perf.userId === userId),
            });
        }, 100);
    });
};
