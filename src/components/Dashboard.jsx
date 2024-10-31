import { useState, useEffect } from 'react';
import {
    fetchUserData,
    fetchUserActivity,
    fetchUserAverageSessions,
    fetchUserPerformance,
} from '../services/api.js';
import {
    UserModel,
    UserActivityModel,
    UserAverageSessionModel,
    UserPerformanceModel,
} from '../models/index.jsx';
import ActivityChart from './ActivityChart';
import AverageSessionsChart from './AverageSessionsChart';
import PerformanceChart from './PerformanceChart';
import ScoreChart from './ScoreChart';
import NutritionCard from './NutritionCard';
import '../styles/Dashboard.css';

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [averageSessionsData, setAverageSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    // Choix de l'identifiant de l'utilisateur :
    // 12 Karl
    // 18 Cecilia
    const userId = 12;

    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            setErrors({});
            try {
                const [user, activity, averageSessions, performance] =
                    await Promise.all([
                        fetchUserData(userId),
                        fetchUserActivity(userId),
                        fetchUserAverageSessions(userId),
                        fetchUserPerformance(userId),
                    ]);

                // Utilisation des classes de modélisation
                setUserData(new UserModel(user.data));
                setActivityData(new UserActivityModel(activity.data));
                setAverageSessionsData(
                    new UserAverageSessionModel(averageSessions.data)
                );
                setPerformanceData(new UserPerformanceModel(performance.data));
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrors({
                    general:
                        'Une erreur est survenue lors du chargement des données',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [userId]);

    if (loading) return <div className="loading-data">Chargement...</div>;
    if (errors.general)
        return <div className="error-data">{errors.general}</div>;

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>
                    Bonjour{' '}
                    <span className="name">
                        {userData?.userInfos?.firstName || 'Utilisateur'}
                    </span>
                </h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <div className="dashboard-content">
                <div className="charts-container">
                    <ActivityChart data={activityData} />
                    <div className="small-charts-container">
                        <AverageSessionsChart
                            data={averageSessionsData?.sessions}
                        />
                        <PerformanceChart
                            data={performanceData}
                            kind={performanceData?.kind}
                        />
                        <ScoreChart score={userData?.todayScore} />
                    </div>
                </div>
                <div className="nutrition-container">
                    <NutritionCard
                        type="calories"
                        value={userData?.keyData?.calorieCount}
                        unit="kCal"
                    />
                    <NutritionCard
                        type="proteines"
                        value={userData?.keyData?.proteinCount}
                        unit="g"
                    />
                    <NutritionCard
                        type="glucides"
                        value={userData?.keyData?.carbohydrateCount}
                        unit="g"
                    />
                    <NutritionCard
                        type="lipides"
                        value={userData?.keyData?.lipidCount}
                        unit="g"
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
