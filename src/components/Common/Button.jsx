export const Button = (props) => {

   return (
      <button className={`${props.class} button__common`}>{props.name}</button>
   )
}

export default Button