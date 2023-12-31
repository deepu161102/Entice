import React from 'react';
import css from './Review.module.css';
import Hero from '../../assets/testimonialHero.png';
import {TestimonialsData} from '../../data/testimonials';
import {Swiper, SwiperSlide} from 'swiper/react';

const Review = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top rated</span>
                <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
            </div>
            <img alt='hero' src={Hero} />

            <div className={css.container}>
                <span>100k</span>
                <span>Happy customers with us.</span>
            </div>
        </div>

        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
            <Swiper
            slidesPerGroup={1}
            slidesPerView={3}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
                856:{
                    slidesPerView: 3
                },
                640:{
                    slidesPerView: 2
                },
                0:{
                    slidesPerView: 1
                }
                }
            }
            >
                {
                    TestimonialsData.map((testimonial,i)=>(
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt='img'/>
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Review