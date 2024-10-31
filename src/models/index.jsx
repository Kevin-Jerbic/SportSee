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
            carbohydrateCount: data?.keyData?.carbohydrateCount,
            lipidCount: data?.keyData?.lipidCount,
        };
    }
}

export class UserActivityModel {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = Array.isArray(data?.sessions)
            ? data?.sessions.map(session => ({
                  day: this.formatDate(session?.day),
                  kilogram: session?.kilogram,
                  calories: session?.calories,
              }))
            : [];
    }
    // Méthode pour formater la date au format jj/mm/aaaa
    formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
    // Méthode pour formater l'axe X du graphique
    formatXAxis(tickItem) {
        const days = ['V', 'S', 'D', 'L', 'M', 'M', 'J'];
        const [day, month, year] = tickItem.split('/');
        const date = new Date(`${year}-${month}-${day}`);
        return days[date.getDay()];
    }
}

export class UserAverageSessionModel {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = Array.isArray(data?.sessions)
            ? data.sessions.map(session => ({
                  day: this.formatDay(session?.day),
                  sessionLength: session?.sessionLength,
              }))
            : [];
    }
    formatDay(dayNumber) {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[(dayNumber - 1) % 7];
    }
}

export class UserPerformanceModel {
    constructor(data) {
        this.userId = data?.userId;
        this.kind = {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité',
        };
        this.data = Array.isArray(data?.data)
            ? data.data.map(item => ({
                  value: item?.value,
                  kind: item?.kind,
              }))
            : [];
    }
    formatData() {
        return this.data.map(item => ({
            subject: this.kind[item.kind],
            A: item.value,
        }));
    }
    getSortedData() {
        const formattedData = this.formatData();
        return [
            formattedData.find(item => item.subject === 'Intensité'),
            formattedData.find(item => item.subject === 'Vitesse'),
            formattedData.find(item => item.subject === 'Énergie'),
            formattedData.find(item => item.subject === 'Endurance'),
            formattedData.find(item => item.subject === 'Force'),
            formattedData.find(item => item.subject === 'Cardio'),
        ];
    }
}
