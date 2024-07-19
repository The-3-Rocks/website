"use client";

import { useEffect } from "react";

import Image from "next/image";
import CarouselImage01 from "@/public/images/raw-material-zinc.png";
import CarouselImage02 from "@/public/images/raw-material-lead.png";
import CarouselImage03 from "@/public/images/raw-material-barite.png";
import CarouselImage04 from "@/public/images/raw-material-iron.png";
import CarouselImage05 from "@/public/images/raw-material-antimony.png";
import CarouselImage06 from "@/public/images/raw-material-amber.png";

// Import Swiper
import Swiper, { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay, Navigation]);

export default function Carousel() {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      slidesPerView: "auto",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section id="products" className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">
              Explore Our Diverse Range of Premium Raw Materials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover a spectrum of high-quality raw materials meticulously
              sourced to meet our exacting standards.
            </p>
          </div>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            <div className="swiper-slide max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={CarouselImage01}
                width={540}
                height={460}
                alt="Carousel item 01"
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-rocks-400 hover:bg-rocks-500 mx-auto self-center"
                    href="/our-products/zinc"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    The purity can reach up to 70%
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={CarouselImage02}
                width={540}
                height={460}
                alt="Carousel item 02"
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-rocks-400 hover:bg-rocks-500 mx-auto self-center"
                    href="/our-products/lead"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    The purity can reach up to 86%
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={CarouselImage06}
                width={540}
                height={460}
                alt="Carousel item 02"
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-rocks-400 hover:bg-rocks-500 mx-auto self-center"
                    href="/our-products/amber"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Less than 120 UFC/mL of aerobic mesophilic bacteria
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={CarouselImage03}
                width={540}
                height={460}
                alt="Carousel item 03"
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-rocks-400 hover:bg-rocks-500 mx-auto self-center"
                    href="/our-products/barite"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    The density ranges from 4.18 to 4.28
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={CarouselImage04}
                width={540}
                height={460}
                alt="Carousel item 04"
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-rocks-400 hover:bg-rocks-500 mx-auto self-center"
                    href="/our-products/iron"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    The purity can reach up to 73%
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <Image
                className="transition-opacity duration-300"
                src={CarouselImage05}
                width={540}
                height={460}
                alt="Carousel item 05"
              />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a
                    className="inline-flex btn-sm text-white bg-rocks-500 hover:bg-rocks-400 mx-auto self-center"
                    href="our-products/antimony"
                  >
                    Learn more
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <a
                    className="text-xs font-medium text-center text-white py-2 px-3 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    high density and excellent corrosion resistance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-rocks-500 hover:bg-rocks-400 dark:bg-gray-800 dark:hover:bg-rocks-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-rocks-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-rocks-500 hover:bg-rocks-400 dark:bg-gray-800 dark:hover:bg-rocks-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-rocks-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}