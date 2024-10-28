import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../styles/ScoreChart.css';

function ScoreChart({ score }) {
    const data = [
        { name: 'Score', value: score },
        { name: 'Total', value: 1 - score },
    ];

    return (
        <div className="score-chart">
            <h2>Score</h2>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={[{ value: 1 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={80}
                        fill="#FFFFFF"
                        dataKey="value"
                    />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                    >
                        <Cell fill="#FF0000" />
                        <Cell fill="transparent" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="score-label">
                <span className="score-value">{score * 100}%</span>
                <span className="score-text">
                    de votre
                    <br />
                    objectif
                </span>
            </div>
        </div>
    );
}

// Validation des PropTypes
ScoreChart.propTypes = {
    score: PropTypes.number.isRequired,
};

export default ScoreChart;
