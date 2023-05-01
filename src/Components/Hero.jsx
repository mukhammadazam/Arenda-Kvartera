import data from '../db/db.json';
import './Hero.scss'
const Hero = () => {
  return (
    <div className='container'>
      <div className=''>
        {data.map((el, index) => (
          <div key={index} className=''>
            <img
              className='position-absolute z-1 hero  d-block end-0'
              src={el?.imgUrl}
              alt='hfd'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero