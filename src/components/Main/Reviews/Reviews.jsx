import Navigate from "../../Common/Navigation"

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
   let items = []
   arr.map((itm, ind) => {
      items.push(
         <div class="review__slide swiper-slide">
            <div className="review__slide__title">{itm.title}</div>
            <div className="review__slide__subtitle">{itm.subtitle}</div>
            <div className="review__slide__text">{itm.text}</div>
         </div>
      )
   })

   return (
      <div className="reviews">
         <div className="reviews__container">
            <div className="reviews__block">
               <Navigate text={'Отзывы'} />
               <div className="review__header">
                  <div className="review__header__title">что говорят о нас</div>
                  <div className="review__header__subtitle">Мы облегчаем работу более 100 компаний на протяжении многих лет</div>
               </div>
               <div class="review__slider swiper">
                  <div class="review__wrapper swiper-wrapper">
                     {items}
                  </div>
                  <div className="review__slider__pagination"></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Reviews