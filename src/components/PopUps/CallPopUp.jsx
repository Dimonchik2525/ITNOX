import { useContext } from "react"
import { ShowContext } from "../UseContext"
import Button from "../Common/Button"

export const CallPopUp = () => {
   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)

   return (
      <div className=" popup__phone popup-overlay" onClick={() => setPhone(false)} >
         <div className=" popup__phone__content popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="popup__phone__title"></h2>
            <div className="popup__phone__subtitle"></div>
            <form className="popup__phone__form">
               <input type="text" name="" id="" placeholder="Имя" />
               <input type="text" name="" id="" placeholder="Номер телефона" />
               <Button>Получить расчет</Button>
            </form>
            <div className="popup__phone__copyright">Нажимая кнопку «Получить расчет», вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных</div>
         </div>
         <button className="close-btn" onClick={() => setPhone(false)} >X</button>
      </div>
   )
}

export default CallPopUp