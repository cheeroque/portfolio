import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import CollapseContent from './CollapseContent';

export default function SectionExperienceCollapse({ fadeColor, maxHeight }) {
  const collapseRef = useRef();
  const [collapsed, setCollapsed] = useState(true);
  const [currentHeight, setCurrentHeight] = useState(`${maxHeight}px`);

  function toggleCollapse() {
    if (collapsed) {
      const fullHeight = collapseRef?.current?.offsetHeight;
      setCurrentHeight(fullHeight ? `${fullHeight}px` : 'auto');
    } else {
      setCurrentHeight(`${maxHeight}px`);
    }
    setCollapsed(!collapsed);
  }

  return (
    <div>
      <div
        className={`collapse mb-32 mb-lg-48 ${
          collapsed ? 'collapsed' : 'expanded'
        }`}
        style={{
          '--collapse-fade-color': `var(--${fadeColor})`,
          '--collapse-max-height': `${maxHeight}px`,
          height: currentHeight,
        }}
      >
        <div ref={collapseRef}>
          <CollapseContent />
        </div>
      </div>
      <button
        className={`btn btn-primary collapse-toggle ${
          collapsed ? 'collapsed' : 'expanded'
        }`}
        onClick={() => {
          toggleCollapse();
        }}
      >
        {collapsed ? 'Show all' : 'Collapse'}
      </button>
    </div>
  );
}

SectionExperienceCollapse.propTypes = {
  fadeColor: PropTypes.string,
  maxHeight: PropTypes.number,
};
