import Image from 'next/image';
import heroImage from '../../public/images/me.png';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className="row">
          <div className="col-12 col-lg-7">
            <h1>Hi, my name is&nbsp;Yuriy</h1>
            <h2>and I am a&nbsp;frontend web&nbsp;developer</h2>
          </div>
          <div className="col-12 col-lg-5">
            <Image src={heroImage} className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
