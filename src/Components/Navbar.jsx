import { Link, NavLink } from "react-router-dom";
import telephone from "./images/telephone.svg";
import Logo from "./images/Logo.svg";
import Sms from "./images/sms.svg";
import burger from "./images/menu.svg";
import eks from "./images/eks.svg";
import "./Navbar.scss";
import { useContext } from "react";
import { MyContext } from "./Context";
const Navbar = () => {
 const {minu,setMinu}=useContext(MyContext)
  const minuFun = () => {
    setMinu(!minu);
  };
  return (
    <div>
      <div className='container'>
        <div className='nav w-100 d-flex align-items-center justify-content-between'>
          <div className=' d-flex align-items-center'>
            <button
              onClick={minuFun}
              className='d-xxl-none pe-4 border-0 bg-transparent d-block'>
              <img src={burger} alt='minubar' width='31' height='21' />
            </button>
            <NavLink className='nav__logo'>
              <img src={Logo} alt='logo' />
            </NavLink>
            <div className='nav__main d-none d-xxl-flex  align-items-xl-center '>
              <NavLink className='text-decoration-none nav__main--link'>
                Главная
              </NavLink>
              <NavLink className='text-decoration-none nav__main--link'>
                Квартиры
              </NavLink>
              <NavLink className='text-decoration-none nav__main--link'>
                Контакты
              </NavLink>
              <NavLink className='text-decoration-none nav__main--link'>
                О нас
              </NavLink>
            </div>
          </div>
          <div
            className={`nav__link d-flex align-items-center ${
              minu ? "navbar" : ""
            }`}>
            <NavLink className='text-decoration-none d-flex  align-items-center nav__link--item'>
              <img className='nav__link--png' src={Sms} alt='sms' />
              <span className='nav__link--text d-none d-lg-block text-decoration-none'>
                mail@yandex.ru
              </span>
            </NavLink>
            <NavLink className='text-decoration-none d-flex align-items-center nav__link--item'>
              <img className='nav__link--png' src={telephone} alt='sms' />
              <span className='nav__link--text d-none d-lg-block text-decoration-none'>
                +7 (919) 714-25-00
              </span>
            </NavLink>
            <button type='submit' className='nav__btn  border-0'>
              <p className='d-none d-lg-block m-0'> Заказать звонок</p>
              <p className='d-block d-lg-none m-0'>Обратная связь</p>
            </button>
          </div>
          <div className='bg'></div>
          {minu ? (
            <div className='nav__main bground d-block d-xxl-none  align-items-center '>
              <button
                onClick={minuFun}
                className='border-0 bg-transparent text-light  minu-btn  mt-5'>
                <img src={eks} alt='eks' />
              </button>
              <NavLink className='text-decoration-none bground__item  item1 text-light d-block nav__main--link'>
                Главная
              </NavLink>
              <NavLink className='text-decoration-none bground__item  text-light d-block nav__main--link'>
                Квартиры
              </NavLink>
              <NavLink className='text-decoration-none bground__item  text-light d-block nav__main--link'>
                Контакты
              </NavLink>
              <NavLink className='text-decoration-none bground__item  text-light d-block nav__main--link'>
                О нас
              </NavLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {}
    </div>
  );
};

export default Navbar;
