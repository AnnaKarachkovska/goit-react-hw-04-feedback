import PropTypes from "prop-types";
import styles from './App.module.css'
import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return <Notification message="There is no feedback" />;
    } else {
        return <ul className={styles.list}>
            <li><p>Good: {good}</p></li>
            <li><p>Neutral: {neutral}</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: {total(good, neutral, bad)}</p></li>
            <li><p>Positive feedback: {positivePercentage(good)}% </p></li>
        </ul>;
    };
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}