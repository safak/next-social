"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Mainimg from "@/assets/img/pexels-rickson-bejar-56318012-30146472.jpg";
import BackgroundImage1 from "@/assets/img/2147663723.jpg";
import BackgroundImage2 from "@/assets/img/pexels-a-darmel-7862447.jpg"; // Add another background image
import BackgroundImage3 from "@/assets/img/pexels-cottonbro-5780773.jpg"; // Add another background image
import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const [currentBackground, setCurrentBackground] = useState(BackgroundImage1);
  const backgrounds = [BackgroundImage1, BackgroundImage2, BackgroundImage3];

  useEffect(() => {
    if (isLoaded && userId) {
      router.push("/user/home");
    }
  }, [isLoaded, userId, router]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = backgrounds.indexOf(currentBackground);
      const nextIndex = (currentIndex + 1) % backgrounds.length;
      setCurrentBackground(backgrounds[nextIndex]);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentBackground, backgrounds]);

  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <div className="absolute top-0 left-0 w-full h-screen">
        <Image
          src={currentBackground}
          alt="background image"
          layout="fill"
          className="object-cover h-screen"
        />
      </div>

      <div className="relative z-10 top-40 md:top-52">
        <div className="">
          <p className="text-2xl md:text-4xl text-white font-semibold md:w-[60%] text-center mx-auto">
            Discover,express, chat and find your spark with{" "}
            <span className="bg-[#6c5ce7] px-3 py-1 rounded-xl inline-block">
              <span className="rotate-45">Rant</span>
            </span>
          </p>
          {/* <SignedIn>
            <Link href="/user/home">
              <button className="bg-[#6c5ce7] text-center block mx-auto px-8 py-2 mt-10 text-white rounded-lg font-bold">
                Home <ArrowRightAltOutlinedIcon />
              </button>
            </Link>
          </SignedIn> */}
          <SignedOut>
            <Link href="/sign-up">
              <button className="bg-[#6c5ce7] text-center block mx-auto px-8 py-2 mt-10 text-white rounded-lg font-bold">
                Get Started <ArrowRightAltOutlinedIcon />
              </button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
