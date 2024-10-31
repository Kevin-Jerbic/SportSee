import PropTypes from 'prop-types';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { UserActivityModel } from '../models/index.jsx';
import '../styles/ActivityChart.css';

function ActivityChart({ data }) {
    // eslint-disable-next-line react/no-unescaped-entities
    if (!data) return <div>Aucune donnée d'activité disponible</div>;

    const formatXAxis = tickItem => data.formatXAxis(tickItem);

    return (
        <div className="activity-chart">
            <h2>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data.sessions}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tick={{ fill: '#9B9EAC' }}
                        dy={15}
                        tickFormatter={formatXAxis} // Utilisation de la nouvelle fonction de formatage
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#9B9EAC' }}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        hide
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        height={50}
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="kilogram"
                        name="Poids (kg)"
                        fill="#282D30"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar
                        yAxisId="right"
                        dataKey="calories"
                        name="Calories brûlées (kCal)"
                        fill="#E60000"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
        return (
            <div className="custom-tooltip">
                <p>{`${payload[0]?.value}kg`}</p>
                <p>{`${payload[1]?.value}Kcal`}</p>
            </div>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
        })
    ),
};

ActivityChart.propTypes = {
    data: PropTypes.instanceOf(UserActivityModel).isRequired,
};

export default ActivityChart;
