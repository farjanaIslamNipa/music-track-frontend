import banner from '../../assets/images/banner-3.jpg'
import Register from '../../pages/auth/Register';

const HeroSection = () => {
  return (
    <div className="custom-container">
      <div className='my-5 xl:my-10 h-[470px] md:h-[520px] xl:h-[600px] w-full relative'>
        <img src={banner} alt="Banner" className='rounded-3xl h-full w-full object-cover' />
        <div className='absolute min-w-[320px] sm:min-w-[350px] register-box z-50'>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;