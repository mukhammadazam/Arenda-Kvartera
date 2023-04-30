import { Link, NavLink } from "react-router-dom";
import telephone from "./images/telephone.svg";
import Logo from "./images/Logo.svg";
import Sms from "./images/sms.svg";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav w-100 d-flex align-items-center justify-content-between'>
          <div className='nav__main d-flex '>
            <NavLink className='nav__main--logo'>
              <img src={Logo} alt='logo' />
            </NavLink>
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
          <div className='nav__link d-flex'>
            <NavLink className='text-decoration-none nav__link--item'>
              <img className='nav__link--png' src={Sms} alt='sms' />
              <Link className='nav__link--text text-decoration-none'>
                mail@yandex.ru
              </Link>
            </NavLink>
            <NavLink className='text-decoration-none nav__link--item'>
              <img className='nav__link--png' src={telephone} alt='sms' />
              <Link
                to='tel:998919509001'
                className='nav__link--text text-decoration-none'>
                +7 (919) 714-25-00
              </Link>
            </NavLink>
            <button type='submit' className='nav__btn border-0'>
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
