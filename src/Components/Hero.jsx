import { useContext } from "react";
import data from "../db/Db.json";
import "./Hero.scss";
import { MyContext } from "./Context";
import { Link } from "react-router-dom";
const Hero = () => {
  const { minu } = useContext(MyContext);
  return (
    <div className='container'>
      <div className={`hero ${minu ? "navbar" : ""}`}>
        {data.map((el, index) => (
          <div key={index} className='d-flex'>
            <img
              className='position-absolute z-1 hero1  d-block end-0'
              src={el?.imgUrl}
              alt='hfd'
            />
            <div className='hero__Enner'>
              <h1 className='hero__title '>{el?.title}</h1>
              <p className='hero__text '>{el?.text}</p>
              <Link className='hero__btn text-light  text-decoration-none'>
                {el?.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
