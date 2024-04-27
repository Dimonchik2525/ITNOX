
import Navigation from "../../Common/Navigation"
//import { deleteSliders, initSliders } from "../../../js/files/sliders"
import { useEffect } from "react";



export const Services = (props) => {

   let arr = [
      {
         title: 'Интернет-решения',
         links: [
            'Разработка сайта',
            'Раскрутка сайта',
            'Ведение сайта',
            'Оптимизация сайта',
            'Администрирование сайта',
            'Поддержка сайта',
            'Аудит сайта',
         ]
      },
      {
         title: '1С Франчайзинг',
         links: [
            'Обслуживание',
            'Доработка',
            'Консультация 1С',
            'Настройка',
         ]
      },
      {
         title: 'ИТ-решения',
         links: [
            'Аутсорсинг',
            'Монтаж сетей ЛВС',
            'Обслуживание АТС',
            'Внедрение IP-телефонии',
            'IT Аудит',
            'Защита информации',
            'Монтаж АТС',
         ]
      },
      {
         title: 'Системы безопасности',
         links: [
            'Контроль доступа',
            'Сигнализации',
            'Видеонаблюдение',
            'СКУД',
            'Монтаж видеонаблюдения',
         ]
      },
   ]
   let items = []
   arr.map((item, index) => {
      items.push(
         <article key={index} className="services__item swiper-slide">
            <h3 className="services__item__title">{item.title}</h3>
            <ul className="services__item__list">
               {item.links.map((item, index) => {
                  return <li key={index}><a href="#" className="services__item__link">{item}</a></li>
               })}
            </ul>
         </article>
      )
   })


   return (
      <section className="services">
         <div className="services__container">
            <div className="services__block">
               <Navigation text={'Услуги'} />
               <h2 className="services__title">Десятки решений для вашего бизнеса</h2>
               {props.size > 500 ?
                  <div className="services__items__wrapper">
                     <div className="services__items">
                        {items}
                     </div>
                  </div> :
                  <div className="services__items__slider swiper">
                     <div className="services__items services__items__wrapper swiper-wrapper">
                        {items}
                     </div>
                  </div>
               }
            </div>
         </div>
      </section>
   )
}

export default Services