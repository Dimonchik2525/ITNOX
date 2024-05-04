import { useEffect } from "react"
import Navigate from "../../Common/Navigation"
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

export const Advantages = (props) => {
   let arr = [
      {
         title: 'Заменим штатного системного администратора',
         text: [
            'Каждый владелец бизнеса нацелен на то, чтобы его компания стабильно функционировала и приносила прибыль. Решайте задачи вашего бизнеса с помощью быстрого развёртывания облачных сервисов, увеличивая объём ИТ-инструментов по мере необходимости.',
            'IT-инфраструктура нуждается в наблюдении специалиста, а возможности нанять штатного IT-шника нет? Обратите внимания на аутсорсинг, зачастую, он обходится дешевле, чем заработная плата работника в штате.',
         ],
         bullet: 'Персонал',
         img: 'Cloud'
      },
      {
         title: 'Повысим вашу эффективность',
         text: [
            'Каждый владелец бизнеса нацелен на то, чтобы его компания стабильно функционировала и приносила прибыль. Решайте задачи вашего бизнеса с помощью быстрого развёртывания облачных сервисов, увеличивая объём ИТ-инструментов по мере необходимости.',

         ],
         bullet: 'Эффективность',
         img: 'Thumb up'
      },
      {
         title: 'Делегируем ваши обязанности',
         text: [
            'Каждый владелец бизнеса нацелен на то, чтобы его компания стабильно функционировала и приносила прибыль. Решайте задачи вашего бизнеса с помощью быстрого развёртывания облачных сервисов, увеличивая объём ИТ-инструментов по мере необходимости.',
            'IT-инфраструктура нуждается в наблюдении специалиста, а возможности нанять штатного IT-шника нет? Обратите внимания на аутсорсинг, зачастую, он обходится дешевле, чем заработная плата работника в штате.',
         ],
         bullet: 'Делегирование',
         img: 'Hearth'
      },
      {
         title: 'Нет невозможных задач',
         text: [

            'IT-инфраструктура нуждается в наблюдении специалиста, а возможности нанять штатного IT-шника нет? Обратите внимания на аутсорсинг, зачастую, он обходится дешевле, чем заработная плата работника в штате.',
         ],
         bullet: 'Решение задач',
         img: 'User'
      },
      {
         title: 'Высочайшая компетентность',
         text: [
            'Каждый владелец бизнеса нацелен на то, чтобы его компания стабильно функционировала и приносила прибыль. Решайте задачи вашего бизнеса с помощью быстрого развёртывания облачных сервисов, увеличивая объём ИТ-инструментов по мере необходимости.',
            'IT-инфраструктура нуждается в наблюдении специалиста, а возможности нанять штатного IT-шника нет? Обратите внимания на аутсорсинг, зачастую, он обходится дешевле, чем заработная плата работника в штате.',
         ],
         bullet: 'Компетентность',
         img: "Moon"
      }
   ]
   let items = []
   arr.map((itm, ind) => {
      items.push(
         <div key={ind} className="advantages__slide swiper-slide">
            <div className="advantages__slide__text">
               <div className="advantages__slide__text__title">{itm.title}</div>
               <div className="advantages__slide__text__subtitle">
                  {itm.text.map((item, i) => {
                     return <p key={i}>{item}</p>
                  })}
               </div>
            </div>
            <div className="advantages__slide__img">
               <img src={`img/advantages/${itm.img}.png`}></img>
            </div>
         </div>
      )
   })
   useEffect(() => {
      let slider;

      function initSwiper() {
         slider = new Swiper('.advantages__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
            speed: 800,
            pagination: {
               el: '.advantages__slider__pagination',
               clickable: true,
               renderBullet: function (index, className) {
                  if (props.size > 660) {
                     return `<div class="${className}"><span class="${className}__text">${arr[index].bullet}</span></div>`;
                  } else {
                     return `<div class="${className}"><span class="${className}__text"></span></div>`;
                  }
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
   return (
      <section className="advantages">
         <div className="advantages__container">
            <div className="advantages__block">
               <Navigate text={'Преимущества'} />
               <h2 className="advantages__header">
                  <div className="advantages__header__title">Поможем вашему бизнесу</div>
                  <div className="advantages__header__subtitle">Мы облегчаем работу более 100 компаний на протяжении многих лет</div>
               </h2>
               <div className="advantages__slider swiper">
                  <div className="advantages__wrapper swiper-wrapper">
                     {items}
                  </div>
                  <div className="advantages__slider__pagination">

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Advantages