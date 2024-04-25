import { SvgCulcIcon, SvgMailIcon, SvgPhoneIcon } from "../SvgIcons"


export const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__block">
               <div className="header__logo">
                  <a href=""><span>IT</span> NOX</a>
               </div>
               <div className="header__menu menu">
                  <nav className="menu__body">
                     <ul className="menu__list">
                        <li className="menu__item"><a href="" className="menu__link">Услуги</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Преимущества</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Отзывы</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Партнеры</a></li>
                     </ul>
                     <div className="header__contacts">
                        <div className="header__contacts__mail">
                           <a href="#"><SvgMailIcon /></a>
                           <a href="mailto:info@itnox.ru" className="header__contacts__mail__text">info@itnox.ru</a>
                        </div>
                        <div className="header__contacts__phone">
                           <a href="#"><SvgPhoneIcon /></a>
                           <a href="tel:88126480377" className="header__contacts__phone__text">8 812 648-03-77 </a>
                        </div>
                     </div>
                     <div className="header__icons">
                        <a href="" className="header__icons__phone">
                           <SvgPhoneIcon />
                        </a>
                        <a href="" className="header__icons__culc">
                           <SvgCulcIcon />
                        </a>
                     </div>
                  </nav>
               </div>
               <button type="button" className="menu__icon icon-menu"><span></span></button>
            </div>
         </div>

      </header>
   )
}

export default Header