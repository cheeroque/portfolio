import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Swiper.module.scss';

export default function SectionAchievementsSwiper({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      className="swiper-achievements"
      grabCursor
      navigation
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <div className="row mx-lg-n32">
            <div className="col-12 col-md-5 px-lg-32">
              <div className={styles.slideImageWrapper}>
                <img
                  src={`/images/achievements/${slide.images[0]}`}
                  alt={slide.title}
                  className={styles.slideImage}
                />
              </div>
            </div>
            <div className="co l-12 col-md-7 px-lg-32">
              <h3 className="fw-600 mb-8 mb-md-16">{slide.title}</h3>
              <p className="h6 mb-8 mb-md-16 mb-xl-32">
                <a
                  href={slide.link.url}
                  target="_blank"
                  rel="nofollow"
                  className="text-primary"
                >
                  {slide.link.text}
                </a>
              </p>
              <div className="mb-32">
                {slide.description.map((line, index) => (
                  <p key={`description-line-${index}`}>{line}</p>
                ))}
              </div>
              {slide.srcLinks?.length && (
                <div className="row mx-n16">
                  {slide.srcLinks.map((link, linkIndex) => (
                    <div
                      key={`src-link-${linkIndex}`}
                      className="col-12 col-lg-auto fs-sm text-primary px-16"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="nofollow"
                        className={styles.srcLink + ' mb-8 mb-lg-0'}
                      >
                        <img
                          src={`/images/links/${link.icon}.svg`}
                          width={24}
                          height={24}
                          aria-hidden="true"
                        />
                        <span className="ms-12">{link.text}</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SectionAchievementsSwiper.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
};
