import data from '../db/db.json';
import './Hero.scss'
const Hero = () => {
  return (
    <div className='container'>
      <div className='hero'>
        {data.map((el, index) => (
          <div key={index} className=''>
            <img
              className='position-absolute z-1 hero  d-block end-0'
              src={el?.imgUrl}
              alt='hfd'
            />
            <h1 className='hero__title'>{el?.title}</h1>
            <p className='hero__text'>{el?.text}</p>
            <btn className='hero__btn '>{el?.btnText}</btn>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero