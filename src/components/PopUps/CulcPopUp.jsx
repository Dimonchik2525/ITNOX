import { useContext, useState } from "react"
import { ShowContext } from "../UseContext"
import Button from "../Common/Button"

export const CulcPopUp = () => {

   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)
   let [options, setOptions] = useState({ admin: true, franch: false, })
   let [optionsArray, setOptionsArray] = useState({
      admin: [
         ['Поддержка компьютеров', 0],
         ['Поддержка серверов', 0],
         ['Принтеры', 0],
         ['Телефония', 0],
         ['Видеонаблюдения', 0],
         ['Сетевое оборудование', 0],
      ],
      franchaizing: [
         ['Консультация', 0],
         ['Програмирование', 0],
         ['Внедрение', 0],
      ]
   })
   let arr = []
   for (let item of Object.keys(options)) {
      if (options[item]) {
         optionsArray[item].map((itm, ind) => {
            arr.push(
               <div key={ind} className="popup__culc__item">
                  <div className="popup__culc__item__name">{itm[0]}</div>
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
               </div>
            )
         })
      }
   }
   return (
      <div>
         <div className="popup__culc popup-overlay" onClick={() => setCulc(false)}>
            <div className="popup__culc__block popup-content" onClick={(e) => e.stopPropagation()}>
               <h2 className="popup__culc__title">Получите расчет предложения</h2>
               <div className="popup__culc__options">
                  <div className="popup__culc__options__item">
                     <button>Системное администрирование</button>
                  </div>
                  <div className="popup__culc__options__item">
                     <button>1С франчайзинг</button>
                  </div>
               </div>
               <h3 className="popup__culc__subtitle">Стоимость примерная и рассчитывается, исходя из опций базого тарифа. Чтобы получить точный расчет стоимости, оставьте заявку, и менеджер свяжется с вами в течение 15 мин</h3>
               <div className="popup__culc__list">
                  {arr}
               </div>
               <div className="popup__culc__bottom">
                  <div className="popup__culc__bottom__text">Цена от:
                     1100 ₽
                     <span>
                        /
                        мес
                     </span>
                  </div>
                  <Button class={'popup__culc__bottom__button'}>{'Оставить заявку'}</Button>
               </div>
               <button className="close-btn" onClick={() => setCulc(false)}>Close</button>
            </div>
         </div>
      </div>
   )
}

export default CulcPopUp