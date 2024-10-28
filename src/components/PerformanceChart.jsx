import PropTypes from 'prop-types';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import '../styles/PerformanceChart.css';

function PerformanceChart({ data, kind }) {
    if (!data || !kind)
        return <div>Aucune donnée de performance disponible</div>;

    const translations = {
        1: 'Cardio',
        2: 'Énergie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
    };

    const formattedData = data.map(item => ({
        subject: translations[item.kind] || kind[item.kind],
        A: item.value,
    }));

    const sortedData = [
        formattedData[5], // Intensité
        formattedData[4], // Vitesse
        formattedData[1], // Énergie
        formattedData[2], // Endurance
        formattedData[3], // Force
        formattedData[0], // Cardio
    ];

    return (
        <div className="performance-chart">
            <ResponsiveContainer width="100%" height={250}>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={sortedData}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: 'white', fontSize: 12 }}
                        tickLine={false}
                    />
                    <Radar
                        name="Performance"
                        dataKey="A"
                        fill="#FF0101"
                        fillOpacity={0.7}
                        stroke="transparent"
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

PerformanceChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.number,
            value: PropTypes.number,
        })
    ),
    kind: PropTypes.objectOf(PropTypes.string),
};

export default PerformanceChart;
