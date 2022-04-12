import { experiences } from './experiences';

import styles from './CollapseContent.module.scss';

export default function SectionExperienceCollapseContent() {
  return (
    <div>
      {experiences.map((experience, index) =>
        experience.break ? (
          <div className={styles.break + ' row'}>
            <div className="col-12 col-xxl-10 col-offset-xxl-1">
              {experience.description.map((line, lineIndex) => (
                <p key={`break-line-${index}-${lineIndex}`}>{line}</p>
              ))}
            </div>
          </div>
        ) : (
          <article key={`experience-${index}`} className="mb-24 mb-lg-64">
            <div className={styles.articleHeader}>
              <h4 className="fw-600 mb-0">{experience.company}</h4>
              <h6 className={styles.duration}>{experience.duration}</h6>
            </div>
            {experience.positions.map((position, posIndex) => (
              <div
                key={`position-${index}-${posIndex}`}
                className={styles.position}
              >
                <div className={styles.positionHeader}>
                  <h5 className="mb-4 mb-lg-0">{position.title}</h5>
                  <h6 className="mb-16 mb-lg-0">{position.period}</h6>
                </div>
                <div className={styles.positionDescription}>
                  {position.description.map((line, lineIndex) => (
                    <p key={`line-${index}-${posIndex}-${lineIndex}`}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </article>
        )
      )}
    </div>
  );
}
