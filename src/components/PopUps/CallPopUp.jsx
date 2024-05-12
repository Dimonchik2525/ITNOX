import { useContext, useEffect, useState } from "react"
import { ShowContext } from "../UseContext"
import Button from "../Common/Button"
import CallPopUpAnswer from "./CallPopUpAnswer"

export const CallPopUp = () => {
   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)
   let [success, setSuccess] = useState(false)

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

   function answer() {
      if (success) {
         setPhone(false)
         setSuccess(true)
      }
   }

   return (
      success ?
         <CallPopUpAnswer setSuccess={setSuccess} success={success} /> :
         <div className=" popup__phone popup-overlay" onClick={() => setPhone(false)} >
            <div className=" popup__phone__content popup-content" onClick={(e) => e.stopPropagation()}>
               <h2 className="popup__phone__title">Заказ обратного звонка</h2>
               <div className="popup__phone__subtitle">Мы готовы помочь! <br />
                  Укажите ваш номер телефона и наш лучший менеджер обязательно перезвонит вам в указанное время и ответит на интересующие вас вопросы</div>
               <form className="popup__phone__form">
                  <input type="text" name="" id="" placeholder="Имя" />
                  <input type="tel" name="" id="" placeholder="Номер телефона" />
                  <Button answer={answer} setSuccess={setSuccess} success={success}>Получить расчет</Button>
               </form>
               <div className="popup__phone__copyright">Нажимая кнопку «Получить расчет», вы соглашаетесь с <a href="#">политикой конфиденциальности</a> и <a href="#">обработкой персональных данных</a></div>
               <button className="close-btn" onClick={() => setPhone(false)} >X</button>
            </div>
         </div >
   )
}

export default CallPopUp