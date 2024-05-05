import { Navigation, Pagination } from "swiper/modules";
import Navigate from "../../Common/Navigation"
import { useEffect } from "react";
import Swiper from "swiper";

export const Reviews = (props) => {

   let arr = [
      {
         title: 'Сахаров В. И.',
         subtitle: 'Генеральный директор «Гемотест»',
         text: 'Часто обращаюсь с вопросами по 1С обслуживанию. Работа специалиста устраивает во всех отношениях, обновление программы происходит вовремя, так же своевременно получаю консультации по всем возникающим вопросам. Очень довольны, заключили договор на постоянное обслуживание.',
         bullet: 'review__1'
      },
      {
         title: 'Солдатенко Д. А',
         subtitle: 'Простой рабочий',
         text: 'Часто обращаюсь с вопросами по 1С обслуживанию.Часто обращаюсь с вопросами по 1С обслуживанию. Работа специалиста устраивает во всех отношениях, обновление программы происходит вовремя, так же своевременно получаю консультации по всем возникающим вопросам. Очень довольны, заключили договор на постоянное обслуживание.',
         bullet: 'review__2'
      },
      {
         title: 'Щеренкова Ф.А.',
         subtitle: 'Мастер по маникюру',
         text: 'Часто обращаюсь с вопросами по 1С обслуживанию. Работа специалиста устраивает во всех отношениях, обновление программы происходит вовремя, так же своевременно получаю консультации по всем возникающим вопросам. Очень довольны, заключили договор на постоянное обслуживание.',
         bullet: 'review__3'
      },
      {
         title: 'Сахарова Л. И.',
         subtitle: 'Жена Генерального директора «Гемотест»',
         text: ' Работа специалиста устраивает во всех отношениях, обновление программы происходит вовремя, так же своевременно получаю консультации по всем возникающим вопросам. Очень довольны, заключили договор на постоянное обслуживание.',
         bullet: 'review__4'
      }
   ]
   useEffect(() => {
      let slider;

      function initSwiper() {
         slider = new Swiper('.reviews__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
            speed: 800,
            pagination: {
               el: '.reviews__slider__pagination',
               clickable: true,
               renderBullet: function (index, className) {
                  return `<div class="${className}"><img src="img/review/${arr[index].bullet}.svg" class="${className}__text"></img></div>`;
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
   }, [props.size]);
   let items = []
   arr.map((itm, ind) => {
      items.push(
         <div key={ind} className="reviews__slide swiper-slide">
            <div className="reviews__slide__title">{itm.title}</div>
            <div className="reviews__slide__subtitle">{itm.subtitle}</div>
            <div className="reviews__slide__text">{itm.text}</div>
         </div>
      )
   })

   return (
      <div className="reviews">
         <div className="reviews__container">
            <Navigate text={'Отзывы'} />
            <div className="reviews__block">
               <h2 className="reviews__header">
                  <div className="reviews__header__title">что говорят о нас</div>
                  <div className="reviews__header__subtitle">Мы облегчаем работу более 100 компаний на протяжении многих лет</div>
               </h2>
               <div className="reviews__content">
                  <div className="reviews__slider swiper">
                     <div className="reviews__wrapper swiper-wrapper">
                        {items}
                     </div>
                  </div>
                  <div className="reviews__slider__pagination"></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Reviews