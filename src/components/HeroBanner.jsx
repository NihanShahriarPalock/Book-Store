import { Link } from "react-router-dom";


const HeroBanner = () => {
    return (
      <div className='bg-[#1313130D] rounded-3xl py-6 lg:py-20 px-6 lg:px-32  flex flex-col-reverse lg:flex-row justify-between'>
        <div className='flex flex-col justify-center w-full '>
          <h2 className='font-bold text-3xl lg:text-5xl mb-12 w-full lg:w-[502px]'>
            Books are helpful to refresh your mind
          </h2>
          <Link to='/ListedBooks' className='bg-[#23BE0A] text-white rounded-lg p-6 text-xl max-w-fit font-bold'>
            View The List
          </Link>
        </div>
        <div>
          <div className='w-full mb-3 lg:mb-0 '>
            <img src='https://i.ibb.co/j5Kh8qL/banner.png' alt='' />
          </div>
        </div>

        
      </div>
    );
};

export default HeroBanner;
