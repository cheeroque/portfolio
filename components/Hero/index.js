import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.container + ' container'}>
        <div className={styles.row + ' row'}>
          <div className="col-12 col-sm-8 col-md-7">
            <h1 className="mb-8 mb-md-0">Hi, my name is&nbsp;Yuriy</h1>
            <h2 className="mb-0">
              and I am a&nbsp;frontend web&nbsp;developer
            </h2>
          </div>
          <div className="col-12 col-sm-4 col-md-5">
            <img
              srcSet="/images/me-336w.webp 336w, /images/me-420w.webp 420w, /images/me-620w.webp 620w"
              sizes="(max-width: 767px) 336px, (max-width: 991px) 420px, 620px"
              src="/images/me-620w.png"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
