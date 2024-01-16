import './Hero.css';
import gameBoy from '../../assets/gameboy21.png';
import vector from '../../assets/Vector.png';
import Vector1 from '../../assets/Vector1.png';
import vector2 from '../../assets/Vector2.png';
import facebook from '../../assets/facebook-round-icon-png-free-download 1.svg';
import behance from '../../assets/behance-1-logo-svg-vector 1.svg';
import instagram from '../../assets/instragram-round-icon-png-free-download 1.svg';
import linkedin from '../../assets/in 1.svg';
import twitter from '../../assets/twitter-icon-png-free-download 1.svg';
import groub from '../../assets/Group 3.svg'

const Hero = () => {
    return (
        <>
            <header className='of-header'>
                <div className='lg:flex'>
                    <div className='pt-[8.56rem] largeScreen:pt-[15rem] pl-[2.06rem] pr-[2.06rem] sm:pr-0  lg:w-[67.57%] of-left-hero'>
                        <h1 className='lg:w-[75.39%]'>Hey !! Mario still here, But don’t forget that</h1>
                        <p className='lg:w-[72.35%]  pt-[1.81rem]'>At focal X agency, we are working to build somthing different.
                            Here you’ll have a group of creative people who specialize in:
                            Branding, Digital Marketing, Web/App Development, Ui/Ux
                            Content creation, Graphic design, Social media and More........
                            So you can take a tour in our website, OR just <span className='font-bold'>Press Start :)</span>
                        </p>
                    </div>
                    <div className='lg:w-[32.43%] flex justify-center relative'>
                        <img className='lg:inline hidden  md:absolute top-0 right-0  z-[-1]' src={vector} alt="this is photo" />
                        <img className='lg:mt-[106px] xl:hidden pr-[14px] ' src={gameBoy} alt="gameboy photo" />
                    </div>
                </div>
            </header>
            <div className='of-header-social-media relative'>
                <img className='of-img1' src={Vector1} alt="social media links" />
                <img className='xl:absolute xl:inline hidden right-0 top-[-310px]  z-[33] ' src={gameBoy} alt="gameboy photo" />
                <img className='xl:inline hidden  xl:absolute z-[55] right-[105px] top-[-130px]' src={vector2} alt="this is image" />
                <p className='xl:absolute xl:block hidden right-[338px] top-[-74px] of-header-social-media-p'>START</p>
                <div>
                    <div className='absolute  flex gap-1 md:top-[69.71%] top-[60%] left-[1.94rem]'>
                        <img className='md:w-[30px] w-[15px]' src={facebook} alt='social media links' />
                        <img className='md:w-[30px] w-[15px]' src={behance} alt='social media links' />
                        <img className='md:w-[30px] w-[15px]' src={linkedin} alt='social media links' />
                        <img className='md:w-[30px] w-[15px]' src={instagram} alt='social media links' />
                        <img className='md:w-[30px] w-[15px]' src={twitter} alt='social media links' />
                    </div>
                    <div className='w-[8.875rem]  flex flex-col sm:gap-[0.69rem] gap-[0] items-center   of-p-discourd'>
                        <img className='md:w-[21px] w-[10px]' src={groub} alt="" />
                         <p className='md:text-base text-[0.6rem]'>Scroll To Discover</p>                 
                    </div>
                    <div className='flex justify-center items-center gap-[0.38rem] absolute  left-[69.25%]  md:top-[80.21%] top-[51%] of-copyrightfocalx'>
                          <span className='text-white'>&copy;</span>
                          <span className='of-copyright md:text-base text-[0.6rem]'>2021 - 2022 focal X agency All Right Reserved</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
