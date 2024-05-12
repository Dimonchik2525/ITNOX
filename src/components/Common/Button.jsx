export const Button = (props) => {
   return (
      <button onClick={(e) => {
         if (props.answer)
            props.setSuccess(true)
         e.preventDefault()
      }} className={`${props.class} button__common`}>{props.children}</button>
   )
}

export default Button