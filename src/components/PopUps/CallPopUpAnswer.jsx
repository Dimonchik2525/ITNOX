import { useContext, useEffect } from "react"
import { ShowContext } from "../UseContext"


export const CallPopUpAnswer = (props) => {

   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)

   useEffect(() => {
      let timeout;

      function closeSuccess() {
         setPhone(false);
      }

      timeout = setTimeout(closeSuccess, 3000);

      return () => {
         clearTimeout(timeout);
      };
   }, [props.success]);

   return (
      <div className=" call__answer popup-overlay" onClick={() => setPhone(false)} >
         <div className=" call__answer__content popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="call__answer__title">Спасибо за доверие!</h2>
            <div className="call__answer__subtitle">
               <p>  Ваша заявка принята, в ближайшее время с вами свяжется нас менеджер.</p>
               <p>Окно будет закрыто автоматически.</p>
            </div>
            <button className="close-btn" onClick={() => setPhone(false)} >X</button>
         </div>
      </div>
   )
}

export default CallPopUpAnswer