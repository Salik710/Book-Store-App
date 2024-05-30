import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';
// import required modules
import { Pagination } from "swiper/modules";
const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24 min-w-full">
      <h2 className="text-5x1 font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper min-w-full"
        >
         

          <SwiperSlide className="shadow-2xl py-8 bg-white px-4 md:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="text-black mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam, maiores distinctio eius non neque, placeat natus debitis aliquid accusamus quo, dolores velit.
                </p>
                <IoPerson className=" text-black text-3xl"/>
                <h5 className="font-medium">Mark Frank</h5>
                <p>CEO, ABC Company</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl py-8 bg-white px-4 md:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="text-black mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam, maiores distinctio eius non neque, placeat natus debitis aliquid accusamus quo, dolores velit.
                </p>
                <IoPerson className=" text-black text-3xl"/>
                <h5 className="font-medium">Mark Frank</h5>
                <p>CEO, ABC Company</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl py-8 bg-white px-4 md:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="text-black mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam, maiores distinctio eius non neque, placeat natus debitis aliquid accusamus quo, dolores velit.
                </p>
                <IoPerson className=" text-black text-3xl"/>
                <h5 className="font-medium">Mark Frank</h5>
                <p>CEO, ABC Company</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl py-8 bg-white px-4 md:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="text-black mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam, maiores distinctio eius non neque, placeat natus debitis aliquid accusamus quo, dolores velit.
                </p>
                <IoPerson className=" text-black text-3xl"/>
                <h5 className="font-medium">Mark Frank</h5>
                <p>CEO, ABC Company</p>
                
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl py-8 bg-white px-4 md:m-5 rounded-lg border">
            <div>
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-5">
                <p className="text-black mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam, maiores distinctio eius non neque, placeat natus debitis aliquid accusamus quo, dolores velit.
                </p>
                <IoPerson className=" text-black text-3xl"/>
                <h5 className="font-medium">Mark Frank</h5>
                <p>CEO, ABC Company</p>
                
              </div>
            </div>
          </SwiperSlide>
  
        </Swiper>
      </div>
    </div>
  )
};
export default Review
