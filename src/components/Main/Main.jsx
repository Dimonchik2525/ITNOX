import { useEffect, useState } from "react"
import Hero from "./Hero/Hero"
import Services from "./Services/Services"


export const Main = () => {
   let [size, setSize] = useState(document.documentElement.clientWidth)
   useEffect(() => {
      function handle() {
         return setSize(document.documentElement.clientWidth)
      }
      window.addEventListener('resize', handle);
      return () => {
         window.removeEventListener('resize', handle);
      };
   }, [])

   return (
      <main className="main">
         <Hero size={size} />
         <Services size={size} />
      </main>
   )
}

export default Main