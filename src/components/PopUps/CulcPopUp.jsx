import { useContext } from "react"
import { ShowContext } from "../UseContext"

export const CulcPopUp = () => {

   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)
   return (
      <div>
         <div className="popup-overlay" onClick={() => setCulc(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem quas ea dicta, est ipsam laudantium harum vel ex enim nostrum neque assumenda, rem eligendi, sapiente dolorem eum eos. Aperiam?
               Dolorum minus in cum, incidunt magnam sit doloribus, nesciunt perspiciatis eligendi officia obcaecati. Debitis maxime commodi deserunt ratione quas, quam, asperiores sapiente reiciendis excepturi a, exercitationem autem possimus facilis eveniet!
               Nemo eius modi voluptas, ab recusandae voluptatibus eligendi quidem officia debitis! Maxime nam, quidem, velit ipsa illum, sed iure ex quos adipisci ipsam odit eveniet expedita nemo ut nulla est?
               <button className="close-btn" onClick={() => setCulc(false)}>Close</button>
            </div>
         </div>
      </div>
   )
}

export default CulcPopUp