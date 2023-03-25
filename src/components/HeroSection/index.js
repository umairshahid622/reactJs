import { greekSalad } from 'assets';
import heroStyles from './hero.module.css';
const HeroSection = () => {
  return (
    <div className={heroStyles.hero}>
      <div className={heroStyles.article}>
        <h1 className={heroStyles.heading}>
          Little Lemon
          <br />
          <span>Nigeria</span>
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and s
        </p>
        <a href='/reserve'>Reserve a table</a>
      </div>
      <img className={heroStyles.image} src={greekSalad} alt='' />
    </div>
  );
};

export default HeroSection;
