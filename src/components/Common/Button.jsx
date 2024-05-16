import { useContext } from "react"
import { ShowContext } from "../UseContext"


export const Button = (props) => {
   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)
   return (
      <button onClick={(e) => {
         if (culc || phone) {
            if (props.proove) {
               props.setProove(false)
               //setCulc(false)
               return
            }
            if (props.answer) {
               props.setSuccess(true)
               e.preventDefault()
               return
            }
            else if (!props.culculation.send) {
               props.setCulculation(prevState => ({ ...prevState, send: true }));
               return
            }
         }
      }} className={`${props.class} button__common`}>{props.children}</button>
   )
}

export default Button