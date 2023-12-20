import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import sajjad from "/src/assets/Fav-icone-image/sajjad.png";

const Counter = () => {
  const [CountStart, setCountStart] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className=" bg-black mb-20 stats stats-vertical md:stats-horizontal shadow lg:w-full lg:px-44">
        <div className="stat flex items-center lg:gap-24 lg:w-64">
          <div>
            <div className="stat-title text-white">Total Projects</div>
            <div className="stat-value bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-white text-2xl lg:text-4xl">
              <ScrollTrigger
                onEnter={() => setCountStart(true)}
                onExit={() => setCountStart(false)}
              >
                {CountStart && (
                  <>
                    <CountUp start={0} end={39} duration={6}></CountUp>
                    <span className="text-xs">th</span>
                  </>
                )}
              </ScrollTrigger>
            </div>
            <div className="stat-desc text-white">20% more than last month</div>
          </div>
          <div>
            <div className=" text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 lg:w-8 lg:h-8 stroke-[#FF0000] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="stat flex items-center lg:gap-20 lg:w-64">
          <div>
            <div className="stat-title text-white">Page Views</div>
            <div className="stat-value bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-white text-2xl lg:text-4xl">
              <ScrollTrigger
                onEnter={() => setCountStart(true)}
                onExit={() => setCountStart(false)}
              >
                {CountStart && (
                  <>
                    <CountUp start={0} end={1500}></CountUp>
                    <span className="text-xs">th</span>
                  </>
                )}
              </ScrollTrigger>
            </div>
            <div className="stat-desc text-white">
              Welcome to visit my Portfolio
            </div>
          </div>
          <div>
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 lg:w-8 lg:h-8 stroke-[#FF0000]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-12 lg:w-16 rounded-full">
                <img src={sajjad} />
              </div>
            </div>
          </div>
          <div className="stat-value text-white text-2xl lg:text-4xl">
            <ScrollTrigger
              onEnter={() => setCountStart(true)}
              onExit={() => setCountStart(false)}
            >
              {CountStart && (
                <>
                  <CountUp start={0} end={95}></CountUp>%
                </>
              )}
            </ScrollTrigger>
          </div>
          <div className="stat-title text-white">Tasks done</div>
          <div className="stat-desc text-[#FF0000] ">2 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
