
export const Footer = () => {

   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer__block">
               <div className="footer__hat">
                  <address className="footer__hat__address">
                     <div className="footer__hat__address__title">Адрес</div>
                     <div className="footer__hat__address__text">192102, г. Санкт-Петербург, ул. Фучика, дом 4, лит. Б</div>
                  </address>
                  <div className="footer__hat__phone">
                     <div className="footer__hat__phone__title">Телефон</div>
                     <a href="tel:8 812 648-03-77" className="footer__hat__phone__text">8 812 648-03-77</a>
                     <a href="tel:8 963 305-87-70" className="footer__hat__phone__text">8 963 305-87-70</a>
                  </div>
                  <div className="footer__hat__mail">
                     <div className="footer__hat__mail__title">Электронная почта</div>
                     <a href="mailto:" className="footer__hat__mail__text">info@itnox.ru</a>
                  </div>
               </div>
               <div className="footer__basement">
                  <p>Политика конфиденциальности</p>
                  <p>© 2003-2022 IT NOX</p>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer