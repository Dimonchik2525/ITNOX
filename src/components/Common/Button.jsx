export const Button = (props) => {

   return (
      <button className={`${props.class} button__common`}>{props.children}</button>
   )
}

export default Button