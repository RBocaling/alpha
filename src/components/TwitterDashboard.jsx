import React, { useEffect, useState } from "react";
import { getListings } from "../services/getAllTweets";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { RiRobot3Line } from "react-icons/ri";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/config";

const TwitterDashboard = () => {
  const [tweets, setTweets] = useState([]);
  const [listings, setListings] = useState([]);
  const [tab, setTab] = useState("feed");
  const [twitter, setTwitter] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const tweetCollection = collection(db, "tweets");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getDocs(tweetCollection);
        const listingData = await getListings();
        const feedData = data.docs.map((doc) => ({
          ...doc.data(),
          tweet: doc?.data().tweet,
          date: doc?.data().date,
        }));
        setListings(listingData?.map((item) => item.full_text));
        setTweets(feedData?.map(({ tweet }) => tweet));
      } catch (error) {
        console.error("Error fetching tweets:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (tab === "feed") {
      setTwitter(tweets);
    } else if (tab === "listing") {
      setTwitter(listings);
    }
  }, [tab, tweets, listings]);

  return (
    <section className="w-full text-white relative z-[9999] mt-32 overflow-auto">
      <div className="max-w-6xl mx-auto  rounded-xl shadow-md md:p-5 bg-black/50 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between px-3 py-5 md:px-7 mb-4">
          <h1 className="text-2xl font-medium p-2">
            Alpha/<span className="text-blue-500/50">{tab}</span>
          </h1>
          <div className="flex items-center gap-4 md:gap-7">
            <button
              onClick={() => setTab("feed")}
              className={`${
                tab === "feed" ? "border-blue-500" : "border-transparent"
              } border-b-2 p-2 transition-all duration-150 text-xl`}
            >
              Feed
            </button>
            <button
              onClick={() => setTab("listing")}
              className={`${
                tab === "listing" ? "border-blue-500" : "border-transparent"
              } border-b-2 p-2 transition-all duration-150 text-xl`}
            >
              Listing
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-full py-12">
            <p className="text-lg text-gray-300">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-7 h-[70vh] md:h-[400px] overflow-y-auto pb-9 flex items-center justify-center">
            {/* {twitter?.map((item, index) => (
              <li
                key={index}
                className="font-light text-base tracking-wider flex items-start gap-3"
              >
                <RiRobot3Line className="w-32 md:w-10 text-sky-500 m-2" />
                {item}
              </li>
            ))} */}
            <h1 className="text-3xl text-blue-500">
              {tab === "feed" ? "No Posting" : "Coming Soon"}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default TwitterDashboard;
