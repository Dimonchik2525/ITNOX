import { useEffect } from "react";
import Navigate from "../../Common/Navigation"
import Swiper from "swiper";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";

export const Partners = (props) => {
   let arr = [
      'review__3',
      'review__2',
      'review__4',
      'review__3',
      'review__2',
      'review__1',
      'review__4',
      'review__3',
      'review__1',
      'review__2',
      'review__3',
      'review__2',
      'review__4',
      'review__3',
      'review__2',
      'review__1',
      'review__4',
      'review__3',
      'review__1',
      'review__2',
   ]
   useEffect(() => {
      let slider;

      function initSwiper() {
         slider = new Swiper('.partners__slider', {
            modules: [Navigation, Grid, Autoplay, Pagination],
            observer: true,
            observeParents: true,
            loop: true,
            slidesPerView: 4,
            grid: {
               rows: 2,
            },
            /*autoplay: {
               delay: 2500,
               disableOnInteraction: false,
            },*/
            spaceBetween: 10,
            speed: 800,
            pagination: {
               el: '.partners__slider__pagination',
               clickable: true,
            },
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               400: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               550: {
                  slidesPerView: 2,
               },
               700: {
                  slidesPerView: 3,
               },
               900: {
                  slidesPerView: 4,
               },
            },
         });
      }

      initSwiper();

      return () => {
         if (slider) {
            slider.destroy();
         }
      };
   }, []);
   let items = []
   arr.map((itm, ind) => {
      items.push(
         <div key={ind} className="partners__slide swiper-slide">
            <img src={`img/partners/${itm}.svg`} alt=""></img>
         </div>
      )
   })
   return (
      <div className="partners">
         <div className="partners__container">
            <div className="partners__block">
               <Navigate text={'Партнеры'} />
               <div className="partners__header">
                  <div className="partners__header__title">Нам доверяют</div>
                  <div className="partners__header__subtitle">Мы облегчаем работу более 100 компаний на протяжении многих лет</div>
               </div>
               <div className="partners__slider swiper">
                  <div className="partners__wrapper swiper-wrapper">
                     {items}
                  </div>
               </div>
               <div className="partners__slider__pagination"></div>
            </div>
         </div>
      </div>
   )
}

export default Partners