
import Navigate from "../../Common/Navigation"
import { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const Services = (props) => {
   //??slider set ups
   let [servicesSlider, setServicesSlider] = useState(null);

   useEffect(() => {
      if (props.size <= 500) {
         initSlider();
      }
      else {
         deleteSlider()
      }
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [props.size]);

   function initSlider() {
      if (!servicesSlider) {
         const slider = new Swiper('.services__items__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            // autoHeight: true,
            speed: 800,
            pagination: {
               el: '.services__items__pagination',
               clickable: true,
            }
         });
         setServicesSlider(slider);
      }
   }

   function deleteSlider() {
      if (servicesSlider) {
         servicesSlider.destroy();
         setServicesSlider(null);
      }
   }

   function handleResize() {
      if (props.size <= 500 && !servicesSlider) {
         initSlider();
      } else if (props.size > 500 && servicesSlider) {
         deleteSlider();
      }
   }
   //!!array of items(u can change them)
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
            'Развал-схождение',
            'Развал-схождение',
            'Развал-схождение',
            'Защита информации',
            'Монтаж АТС',
            'Развал-схождение',
            'Развал-схождение',
            'Развал-схождение',
            'Развал-схождение',
            'Развал-схождение',
            'Развал-схождение',
            'Защита информации',
            'Монтаж АТС',
            'Развал-схождение',
            'Развал-схождение',
            'Развал-схождение',
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
            'Контроль доступа',
            'Сигнализации',
            'Видеонаблюдение',
            'СКУД',
            'Монтаж видеонаблюдения',
         ]
      },
   ]
   //?? button show more
   let obj = {}
   arr.map((item, i) => {
      obj[i] = false
   })
   let [full, setFull] = useState(obj)
   function change(ind) {
      setFull({ ...full, [ind]: !full[ind] })
   }
   let items = []
   //!!content part
   arr.map((item, index) => {
      items.push(
         <article key={index} className="services__item swiper-slide">
            <h3 className="services__item__title">{item.title}</h3>
            <ul className="services__item__list">
               {item.links.map((itm, i) => {
                  if (i < 7) {
                     return <li className="services__item__wrapper" key={i}><a href="#" className="services__item__link">{itm}</a></li>
                  }
                  if (i > 7) {
                     return <li className="services__item__wrapper" style={full[index] ? { display: 'block' } : { display: 'none' }} key={i}><a href="#" className="services__item__link">{itm}</a></li>
                  }
               })}
               {
                  item.links.length > 8 ?
                     <li>
                        <button onClick={() => change(index)} className="services__item__button">
                           {full[index] ? (
                              <>
                                 Hide <span>&larr;</span>
                              </>
                           ) : (
                              <>
                                 Еще <span>&rarr;</span>
                              </>
                           )}
                        </button>
                     </li>
                     :
                     ''
               }
            </ul>
         </article >
      )
   })

   return (
      <section id="services" className="services">
         <div className="services__container">
            <div className="services__block">
               <Navigate text={'Услуги'} />
               <h2 className="services__title">Десятки решений для вашего бизнеса</h2>
               {props.size > 500 ?
                  <div className="services__items">
                     {items}
                  </div>
                  :
                  <div className="services__items__slider  swiper">
                     <div className="services__items__sl services__items__wrapper swiper-wrapper">
                        {items}
                     </div>
                     <div className="services__items__pagination"></div>
                  </div>
               }
            </div>
         </div>
      </section>
   )
}
export default Services