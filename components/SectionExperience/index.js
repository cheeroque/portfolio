import Collapse from './Collapse';
import CollapseContent from './CollapseContent';

export default function SectionExperience() {
  return (
    <section className="section section-secondary">
      <div className="container">
        <h2>My job experience</h2>
        <Collapse
          fadeColor="secondary-container"
          maxHeight={640}
          renderContent={() => CollapseContent()}
        />
      </div>
    </section>
  );
}
