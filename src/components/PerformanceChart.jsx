import PropTypes from 'prop-types';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import { UserPerformanceModel } from '../models/index.jsx';
import '../styles/PerformanceChart.css';

function PerformanceChart({ data, kind }) {
    if (!data || !kind)
        return <div>Aucune donnée de performance disponible</div>;

    const formattedData = data.getSortedData();

    return (
        <div className="performance-chart">
            <ResponsiveContainer width="100%" height={250}>
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={formattedData}
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
    data: PropTypes.instanceOf(UserPerformanceModel).isRequired,
    kind: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PerformanceChart;
