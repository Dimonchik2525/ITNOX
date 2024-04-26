import { useEffect, useState } from "react"
import Button from "../../Common/Button"

export const Hero = () => {
   let but = <Button class={"hero__content__button"} name={'Посмотреть услуги'} />;
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
      <section className="hero">
         <div className="hero__container">
            <div className="hero__block">
               <div className="hero__content">
                  <div className="hero__content__title">Возьмем и поддержим ваш бизнес в IT-сфере</div>
                  <div className="hero__content__subtitle">Комплексное решение вопросов с компьютерами и серверами.
                     Вы платите только за то, что нужно вашему бизнесу</div>
                  {size > 700 ? but : ''}
               </div>
               <div className="hero__img">
                  <img src="img/hero/hero__img.png" alt="" />
                  {size <= 700 ? but : ''}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero