import { useEffect } from "react";
import Navigate from "../../Common/Navigation"
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

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
   ]
   useEffect(() => {
      let slider;

      function initSwiper() {
         slider = new Swiper('.reviews__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
            speed: 800,
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
            <img src={`img/review/${itm}.svg`} alt=""></img>
         </div>
      )
   })
   console.log(items)
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
            </div>
         </div>
      </div>
   )
}

export default Partners