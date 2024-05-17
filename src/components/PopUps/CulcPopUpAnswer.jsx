import { useContext, useEffect, useState } from "react"
import { ShowContext } from "../UseContext"
import Button from "../Common/Button"


export const CulcPopUpAnswer = (props) => {

   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)
   let [proove, setProove] = useState(true)

   useEffect(() => {
      if (!proove) {
         timeout = setTimeout(closeSuccess, 3000);
      }
      let timeout;

      function closeSuccess() {
         setCulc(false);
      }


      return () => {
         clearTimeout(timeout);
      };
   }, [proove]);

   /*useEffect(() => {
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
   }*/


   return (
      !proove ?
         <div className=" call__answer popup-overlay" onClick={() => setCulc(false)} >
            <div className=" call__answer__content popup-content" onClick={(e) => e.stopPropagation()}>
               <h2 className="call__answer__title">Спасибо за доверие!</h2>
               <div className="call__answer__subtitle">
                  <p>  Ваша заявка принята, в ближайшее время с вами свяжется нас менеджер.</p>
                  <p>Окно будет закрыто автоматически.</p>
               </div>
               <button className="close-btn" onClick={() => setCulc(false)} >X</button>
            </div>
         </div>
         :
         <div className=" popup__phone popup-overlay" onClick={() => setCulc(false)} >
            <div className=" popup__phone__content popup-content" onClick={(e) => e.stopPropagation()}>
               <h2 className="popup__phone__title">Заказ расчета</h2>
               <div className="popup__phone__subtitle">Мы готовы помочь! <br />
                  Укажите ваш номер телефона и наш лучший менеджер обязательно перезвонит вам в указанное время и ответит на интересующие вас вопросы</div>
               <form className="popup__phone__form">
                  <input type="text" name="" id="" placeholder="Имя" />
                  <input type="tel" name="" id="" placeholder="Номер телефона" />
                  <Button setProove={setProove} proove={proove} >Получить расчет</Button>
               </form>
               <div className="popup__phone__copyright">Нажимая кнопку «Получить расчет», вы соглашаетесь с <a href="#">политикой конфиденциальности</a> и <a href="#">обработкой персональных данных</a></div>
               <button className="close-btn" onClick={() => setCulc(false)} >X</button>
            </div>
         </div >
   )
}


export default CulcPopUpAnswer