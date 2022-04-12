import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import CollapseContent from './CollapseContent';

import styles from './Collapse.module.scss';

export default function SectionExperienceCollapse({ fadeColor }) {
  const collapseRef = useRef();
  const [collapsed, setCollapsed] = useState(true);

  function toggleCollapse() {
    setCollapsed(!collapsed);
    console.log(collapseRef.current);
  }

  return (
    <div
      ref={collapseRef}
      className={styles.collapse}
      style={{ '--fade-color': `var(--${fadeColor})` }}
    >
      <div className={styles.collapseContent}>
        <CollapseContent />
      </div>
      <button
        className="btn"
        onClick={() => {
          toggleCollapse();
        }}
      >
        Collapse
      </button>
    </div>
  );
}

SectionExperienceCollapse.propTypes = {
  fadeColor: PropTypes.string,
};
