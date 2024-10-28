import PropTypes from 'prop-types';
import '../styles/NutritionCard.css';

// Import des icônes
import caloriesIcon from '../assets/calories-icon.png';
import proteinesIcon from '../assets/proteines-icon.png';
import glucidesIcon from '../assets/glucides-icon.png';
import lipidesIcon from '../assets/lipides-icon.png';

const iconMap = {
    calories: caloriesIcon,
    proteines: proteinesIcon,
    glucides: glucidesIcon,
    lipides: lipidesIcon,
};

function NutritionCard({ type, value, unit }) {
    // Remplacez par un chemin valide pour un icône par défaut
    const iconSrc = iconMap[type] || 'path/to/default-icon.png';

    return (
        <div className={`nutrition-card ${type}`}>
            <img
                src={iconSrc}
                alt={`${type} icon`}
                className="nutrition-icon"
            />
            <div className="nutrition-info">
                <p className="nutrition-value">
                    {value}
                    {unit}
                </p>
                <p className="nutrition-type">{type}</p>
            </div>
        </div>
    );
}

// Validation des PropTypes
NutritionCard.propTypes = {
    type: PropTypes.oneOf(['calories', 'proteines', 'glucides', 'lipides'])
        .isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default NutritionCard;
