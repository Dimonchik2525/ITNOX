


export const Services = () => {

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
            'Поддержка сайта',
            'Аудит сайта',
         ]
      },
   ]
   let items = []
   arr.map((item, index) => {
      items.push(
         <article key={index} className="services__item">
            <h3 className="services__item__title">{item.title}</h3>
            {item.links.map((item, index) => {
               return <a key={index} href="#" className="services__item__link">{item}</a>
            })}
         </article>
      )
   })

   return (
      <section className="services">
         <div className="services__container">
            <div className="services__block">
               <h2 className="services__title">Десятки решений для вашего бизнеса</h2>
               <div className="services__items">
                  {items}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Services