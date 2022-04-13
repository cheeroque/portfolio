import { Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Achievement from './Achievement';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';

import styles from './Swiper.module.scss';

export default function SectionAchievementsSwiper({ slides }) {
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef();

  return (
    <div className="swiper-overflow">
      <div className="swiper-navigation">
        <button
          className="btn swiper-navigation-btn swiper-navigation-btn-prev"
          disabled={isBeginning}
          title="Go to previous slide"
          aria-label="Go to previous slide"
          onClick={() => swiperRef.current.slidePrev()}
        >
          &lt;
        </button>
        <button
          className="btn swiper-navigation-btn swiper-navigation-btn-next"
          disabled={isEnd}
          title="Go to next slide"
          aria-label="Go to next slide"
          onClick={() => swiperRef.current.slideNext()}
        >
          &gt;
        </button>
      </div>
      <div className="container">
        <Swiper
          modules={[Keyboard, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="swiper-achievements"
          grabCursor
          keyboard
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <div className="row mx-lg-n32">
                <div className="col-12 col-md-5 px-lg-32">
                  <Achievement images={slide.images} />
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
      </div>
    </div>
  );
}

SectionAchievementsSwiper.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
};
