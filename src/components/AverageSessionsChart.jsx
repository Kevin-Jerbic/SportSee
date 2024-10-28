import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import '../styles/AverageSessionsChart.css';

function AverageSessionsChart({ data }) {
    //console.log('AverageSessionsChart data:', data);

    if (!data || data.length === 0) {
        return (
            <div className="average-sessions-chart">
                Aucune donnée disponible
            </div>
        );
    }

    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }

        CustomTooltip.propTypes = {
            active: PropTypes.bool,
            payload: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.number,
                })
            ),
        };
        return null;
    };

    return (
        <div className="average-sessions-chart">
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart
                    data={data}
                    margin={{ top: 50, right: 15, left: 15, bottom: 10 }}
                >
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                        tickFormatter={value => days[value - 1]}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                        hide={true}
                        domain={['dataMin - 10', 'dataMax + 10']}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: 'rgba(0, 0, 0, 0.1)',
                            strokeWidth: 32,
                        }}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#lineGradient)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            r: 4,
                            strokeWidth: 4,
                            stroke: 'white',
                            fill: 'white',
                        }}
                    />
                    <defs>
                        <linearGradient
                            id="lineGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(255, 255, 255, 0.4)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(255, 255, 255, 1)"
                            />
                        </linearGradient>
                    </defs>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

AverageSessionsChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number,
            sessionLegnth: PropTypes.number,
        })
    ),
};

export default AverageSessionsChart;
