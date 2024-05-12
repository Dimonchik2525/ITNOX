
import { useContext } from "react"
import Button from "../../Common/Button"
import { SvgCulcIcon, SvgPhoneIcon } from "../../SvgIcons"
import { ShowContext } from "../../UseContext"

export const Hero = (props) => {
   let but = <Button class={"hero__content__button"}>Посмотреть услуги</Button>
   let { phone, setPhone, culc, setCulc } = useContext(ShowContext)

   function call(type) {
      if (type == 'phone') {
         setPhone(true)
      }
      else if (type == 'culc') {
         setCulc(true)
      }
   }
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
            <div className="hero__icons">
               <a onClick={() => call('phone')} href="#" className="hero__icons__item header__icons__item">
                  <SvgPhoneIcon />
               </a>
               <a onClick={() => call('culc')} href="#" className="hero__icons__item header__icons__item">
                  <SvgCulcIcon />
               </a>
            </div>
         </div>
      </section>
   )
}

export default Hero