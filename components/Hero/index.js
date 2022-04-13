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
              srcSet="/images/me-336w.webp 336w, /images/me-380w.webp 380w, /images/me-480w.webp 480w, /images/me-520w.webp 520w"
              sizes="(max-width: 767px) 336px, (max-width: 1199px) 380px, (max-width: 1399px) 480px, 520px"
              src="/images/me-520w.png"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
