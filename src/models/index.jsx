// Classe de modélisation
export class UserModel {
    constructor(data) {
        this.userId = data?.userId;
        this.userInfos = {
            firstName: data?.userInfos?.firstName,
            lastName: data?.userInfos?.lastName,
            age: data?.userInfos?.age,
        };
        this.todayScore = data?.todayScore || data?.score;
        this.keyData = {
            calorieCount: data?.keyData?.calorieCount,
            proteinCount: data?.keyData?.proteinCount,
            carbonydrateCount: data?.keyData?.carbonydrateCount,
            lipidCount: data?.keyData?.lipidCount,
        };
    }
}

export class UserActivityModel {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = Array.isArray(data?.sessions)
            ? data?.sessions.map(session => ({
                  day: session?.day,
                  kilogram: session?.kilogram,
                  calories: session?.calories,
              }))
            : [];
    }
}

export class UserAverageSessionModel {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = Array.isArray(data?.sessions)
            ? data.sessions.map(session => ({
                  day: session?.day,
                  sessionLength: session?.sessionLength,
              }))
            : [];
    }
}

export class UserPerformanceModel {
    constructor(data) {
        this.userId = data?.userId;
        this.kind = data?.kind || {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
        };
        this.data = Array.isArray(data?.data)
            ? data.data.map(item => ({
                  value: item?.value,
                  kind: item?.kind,
              }))
            : [];
    }
}
