import { useContext, useEffect, useState } from "react"
import { ShowContext } from "../UseContext"
import Button from "../Common/Button"
import CulcPopUpAnswer from "./CulcPopUpAnswer"

export const CulcPopUp = () => {

   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)
   let [options, setOptions] = useState({ admin: false, franch: true, })
   let [culculation, setCulculation] = useState({ send: false, show: false })
   let [optionsArray, setOptionsArray] = useState({
      admin: [
         ['Поддержка компьютеров', 0],
         ['Поддержка серверов', 0],
         ['Принтеры', 0],
         ['Телефония', 0],
         ['Видеонаблюдения', 0],
         ['Сетевое оборудование', 0],
      ],
      franch: [
         ['Консультация', 0],
         ['Програмирование', 0],
         ['Внедрение', 0],
      ]
   })
   useEffect(() => {
      setCulculation(prevState => ({ ...prevState, send: false }));
      if (amount[0] > 0 || amount[1] > 0) {
         setCulculation(prevState => ({ ...prevState, show: true }));
      } else if (amount[0] < 1 && amount[1] < 1) {
         setCulculation(prevState => ({ ...prevState, show: false }));
      }
   }, [optionsArray, options])
   useEffect(() => {
      const blockScroll = () => {
         if ((phone || culc) && !document.documentElement.classList.contains('menu-open')) {
            document.documentElement.classList.add('lock');
         }
      };

      blockScroll();

      return () => {
         if (!document.documentElement.classList.contains('menu-open')) {
            document.documentElement.classList.remove('lock');
         }
      };
   }, [phone, culc]);
   let amount = []
   amount[0] = optionsArray.admin.reduce((cur, itm) => {
      return cur + itm[1]
   }, 0)
   amount[1] = optionsArray.franch.reduce((cur, itm) => {
      return cur + itm[1]
   }, 0)

   let arr = []
   for (let item of Object.keys(options)) {
      if (options[item]) {
         optionsArray[item].map((itm, ind) => {
            arr.push(
               <div key={ind} className="popup__culc__item">
                  <div className="popup__culc__item__name">{itm[0]}</div>
                  {item == 'admin' ?
                     <div className="popup__culc__item__amount">
                        <button onClick={() => setOptionsArray(prevState => ({
                           ...prevState,
                           [item]: prevState[item].map((itm, index) => index === ind ? [itm[0], +itm[1] + 1] : itm)
                        }))} className="popup__culc__item__amount__plus">+</button>
                        <input type="text" value={itm[1]} onChange={(e) => setOptionsArray(prevState => ({
                           ...prevState,
                           [item]: prevState[item].map((itm, index) => index === ind ? [itm[0], +e.target.value] : itm)
                        }))} className="popup__culc__item__amount__number"></input>
                        <button onClick={() => setOptionsArray(prevState => ({
                           ...prevState,
                           [item]: prevState[item].map((itm, index) => index === ind ? [itm[0], itm[1] > 0 ? +itm[1] - 1 : 0] : itm)
                        }))} className="popup__culc__item__amount__minus">-</button>
                     </div>
                     :
                     <div className="popup__culc__item__amount__checkbox__wrapper">
                        <div className="checkbox">
                           <input id={ind} data-error="Ошибка" className="checkbox__input" type="checkbox" checked={itm[1] === 1} onChange={(e) => setOptionsArray(prevState => ({
                              ...prevState,
                              [item]: prevState[item].map((itm, index) => index === ind ? [itm[0], e.target.checked ? 1 : 0] : itm)
                           }))}></input>
                           <label htmlFor={ind} className="checkbox__label"></label>
                        </div>
                     </div>
                  }

               </div>
            )
         })
      }
   }
   return (
      (culculation.send && culculation.show) ?
         <CulcPopUpAnswer culculation={culculation} setCulculation={setCulculation} />
         :
         <div className="popup__culc popup-overlay" onClick={() => setCulc(false)}>
            <div className="popup__culc__block popup-content" onClick={(e) => e.stopPropagation()}>
               <h2 className="popup__culc__title">Получите расчет предложения</h2>
               <div className="popup__culc__options">
                  <div onClick={() => setOptions({ admin: true, franch: false })} className={options.admin ? 'popup__culc__options__item popup__culc__options__item_active' : 'popup__culc__options__item'}>
                     <button>Системное администрирование {amount[0] < 1 ? '' : <span>{amount[0]}</span>} </button>
                  </div>
                  <div onClick={() => setOptions({ admin: false, franch: true })} className={options.franch ? 'popup__culc__options__item popup__culc__options__item_active' : 'popup__culc__options__item'}>
                     <button>1С франчайзинг {amount[1] < 1 ? '' : <span>{amount[1]}</span>}</button>
                  </div>
               </div>
               <h3 className="popup__culc__subtitle">Стоимость примерная и рассчитывается, исходя из опций базого тарифа. Чтобы получить точный расчет стоимости, оставьте заявку, и менеджер свяжется с вами в течение 15 мин</h3>
               <div className="popup__culc__list">
                  {arr}
               </div>
               {
                  (!culculation.show && culculation.send) ?
                     <div className="popup__culc__alert">
                        Для продолжение требуется выбрать хотя бы один параметр
                     </div>
                     :
                     ''
               }
               <div className="popup__culc__bottom">
                  <div className="popup__culc__bottom__wrapper">
                     <div className="popup__culc__bottom__text">Цена от:
                        <strong>{amount[0] * 1000 + amount[1] * 1000}₽</strong>
                        <span>
                           /
                           мес
                        </span>
                     </div>
                     <Button culculation={culculation} setCulculation={setCulculation} class={'popup__culc__bottom__button'}>{'Оставить заявку'}</Button>
                  </div>
               </div>
               <button className="close-btn" onClick={() => setCulc(false)}>X</button>
            </div>
         </div>
   )
}

export default CulcPopUp