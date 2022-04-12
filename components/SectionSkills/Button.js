import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export default function SectionSkillsButton({ skill }) {
  return (
    <button className={styles.btn + ' btn'}>
      <img
        src={`/images/skills/${skill.icon}.svg`}
        alt={skill.text}
        className={styles.icon}
      />
      <span className="h6 mb-0">{skill.text}</span>
    </button>
  );
}

SectionSkillsButton.propTypes = {
  skill: PropTypes.objectOf(PropTypes.string),
};
