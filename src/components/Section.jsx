import PropTypes from "prop-types";
import styles from './App.module.css'

const Section = ({ title, children }) => (
  <section className={styles.section}>
        <h2>{title}</h2>
        {children}
  </section>
);

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object
};