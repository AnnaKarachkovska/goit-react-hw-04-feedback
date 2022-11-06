import PropTypes from "prop-types";
import styles from './App.module.css'

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.btnList}>{options.map(text => <li key={text}><button className={styles.btn} type="button" onClick={() => onLeaveFeedback(text)}>{text}</button></li>)}</ul>
    );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}