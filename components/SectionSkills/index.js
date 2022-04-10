import SectionSkillsButton from './Button';
import styles from './SectionSkills.module.scss';

export default function SectionSkills() {
  const skills = [
    { icon: 'js', text: 'JavaScript' },
    { icon: 'vue', text: 'Vue.js' },
    { icon: 'nuxt', text: 'Nuxt.js' },
    { icon: 'react', text: 'React' },
    { icon: 'next', text: 'Next.js' },
    { icon: 'sass', text: 'SASS/SCSS' },
    { icon: 'webpack', text: 'WebPack' },
    { icon: 'gql', text: 'GraphQL' },
    { icon: 'figma', text: 'Figma' },
    { icon: 'git', text: 'Git' },
  ];

  return (
    <section className="section section-tertiary">
      <div className="container">
        <h2>My skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SectionSkillsButton skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
