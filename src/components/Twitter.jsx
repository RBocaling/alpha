import { useState } from "react";
import { Tweet } from "react-tweet";
import { getTweets } from "../services/getAllTweets";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Twitter = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTweets();
        setTweets(result);
        console.log("tweets", result); // Logs the fetched tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="p-4 mt-12 flex items-center gap-5 overflow-x-auto container mx-auto bg-transparent">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {tweets?.map((item, index) => (
          <SwiperSlide key={index}>
            <Tweet id={item} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Twitter;
