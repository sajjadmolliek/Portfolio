/* eslint-disable react/prop-types */
const HeadingStyle = ({heading}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="90"
            viewBox="0 0 112 90"
            fill="none"
          >
            <rect
              x="44.5919"
              y="2.12132"
              width="60.0625"
              height="60.0625"
              transform="rotate(45 44.5919 2.12132)"
              stroke="#FF0000"
              strokeWidth="3"
            />
            <rect
              x="75.0369"
              y="10.7976"
              width="47.9687"
              height="47.9687"
              transform="rotate(45 75.0369 10.7976)"
              stroke="#FF0000"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className="w-16 h-[1px] flexShrink-0 border-[1px] -ml-1 bg-[#FF0000] border-[#FF0000]"></div>
        <p className="text-white text-3xl ml-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-white ">{heading}</p>
      </div>
    </div>
  );
};


export default HeadingStyle;
