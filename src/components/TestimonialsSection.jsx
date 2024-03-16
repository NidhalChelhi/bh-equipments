"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import "../app/globals.css";
import TestimonialCard from "./TestimonialCard";
import { MoveLeft, MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const { t } = useTranslation();

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 640);
    setIsMediumScreen(window.innerWidth > 640 && window.innerWidth < 1200);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 gap-12">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between md:px-32 gap-8">
        <h1 className="text-5xl sm:text-7xl font-medium">
          {t("testimonials_title")}
        </h1>
        <div className="flex sm:hidden flex-row gap-5 items-center justify-center">
          <button
            className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-[#f8f9ff] flex items-center justify-center hover:scale-105 app_transition"
            onClick={goPrev}
          >
            <MoveLeft color="#aeaeb3" size={32} />
          </button>
          <button
            className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-primary flex items-center justify-center hover:scale-105 app_transition"
            onClick={goNext}
          >
            <MoveRight color="white" size={32} />
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={isSmallScreen ? 1 : isMediumScreen ? 2 : 2}
        centeredSlides={false}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        className="swiper w-full h-full lg:px-10 xl:px-40"
      >
        <SwiperSlide>
          <TestimonialCard
            name="La Fabrique"
            testimonial={t("testimonial1")}
            imageUrl="Testimonial1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Flan de notre Dame"
            testimonial={t("testimonial2")}
            imageUrl="Testimonial2.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
