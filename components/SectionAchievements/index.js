import { slides } from './slides';
import Swiper from './Swiper';

export default function SectionAchievements() {
  return (
    <section className="section section-light">
      <div className="container">
        <h2>My achievements</h2>
        <p className="mb-24 mb-xxl-64">Project I worked&nbsp;on include...</p>
      </div>
      <Swiper slides={slides} />
    </section>
  );
}
