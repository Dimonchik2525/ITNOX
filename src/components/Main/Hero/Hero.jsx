
import Button from "../../Common/Button"

export const Hero = (props) => {
   let but = <Button class={"hero__content__button"}>Посмотреть услуги</Button>
   return (
      <section className="hero">
         <div className="hero__container">
            <div className="hero__block">
               <div className="hero__content">
                  <div className="hero__content__title">Возьмем и поддержим ваш бизнес в IT-сфере</div>
                  <div className="hero__content__subtitle">Комплексное решение вопросов с компьютерами и серверами.
                     Вы платите только за то, что нужно вашему бизнесу</div>
                  {props.size > 700 ? but : ''}
               </div>
               <div className="hero__img">
                  <img src="img/hero/hero__img.png" alt="" />
                  {props.size <= 700 ? but : ''}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero