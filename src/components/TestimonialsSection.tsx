"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import "../app/globals.css";
import TestimonialCard from "./TestimonialCard";
import { MoveLeft, MoveRight } from "lucide-react";

const TestimonialsSection = () => {
    const swiperRef = useRef(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
        setIsSmallScreen(window.innerWidth < 1200); // Change the value as per your breakpoint
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);
    return (
        <div className="flex flex-col items-center justify-center py-20  gap-16">
            <div className="w-full flex flex-row items-center justify-between px-12 md:px-32 ">
                <h1 className="text-5xl sm:text-7xl font-medium">Avis clients</h1>
                <div className="flex flex-row gap-5 items-center justify-center">
                    <button className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-[#f8f9ff] flex items-center justify-center hover:scale-105 app_transition" onClick={goPrev}>
                        <MoveLeft color="#aeaeb3" size={32} />
                    </button>
                    <button className="w-14 sm:w-20 h-14 sm:h-20 rounded-full bg-primary flex items-center justify-center hover:scale-105 app_transition" onClick={goNext}>
                        <MoveRight color="white" size={32} />
                    </button>
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={isSmallScreen ? 2 : "auto"} centeredSlides={false}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                className="swiper ml-32"
            >
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TestimonialsSection;
