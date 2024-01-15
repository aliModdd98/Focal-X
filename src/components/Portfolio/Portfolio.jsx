import photo from '../../assets/Ellipse22.png'
import cup from '../../assets/cup1.png'

const Portfolio = () => {
  return (
    <>
      <div className='mt-[2.81rem] flex flex-col justify-center items-center'>
        <h3 style={{ lineHeight: 'normal' }} className='text-my-black font-my-font text-3xl not-italic font-bold'>Portfolio</h3>
        <p style={{ lineHeight: 'normal' }} className="text-my-black font-my-font text-2xl not-italic font-normal">99 reason to choose us</p>
      </div>
      <div className="md:flex">
        <div className="md:w-[49.63%] mt-[5.5rem]">
          <div className='relative max-w-[438px]'>
            <img src={photo} alt="this is brand photo" />
            <img className='absolute' src={cup} alt="" />
          </div>
        </div>
        <div className="md:w-[50.36%] mt-[1.12rem] bg-red-600">
          asdasdasdasd
        </div>
      </div>
    </>
  )
}

export default Portfolio

{/* <div className='w-[56.1%] relative'> */ }