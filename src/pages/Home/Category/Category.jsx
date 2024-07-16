import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='mt-16 mb-10'>
            <SectionTitle
             subHeading={"From 11.00AM to 10.00PM"}
             heading={"order online"}
            >
            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10">
      
        <SwiperSlide>
        <img src={slide1} alt="" /> <p className='uppercase -mt-10 text-center text-white text-3xl font-medium'>salads</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /> <p className='uppercase -mt-10 text-center text-white text-3xl font-medium'>pizzas</p></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /> <p className='uppercase -mt-10 text-center text-white text-3xl font-medium'>soups</p></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><p className='uppercase -mt-10 text-center text-white text-3xl font-medium'>desserts</p></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><p className='uppercase -mt-10 text-center text-white text-3xl font-medium'>salads</p></SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;