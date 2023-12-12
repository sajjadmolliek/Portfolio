import Backend from "../../Components/Charts/Backend";
import Frontend from "../../Components/Charts/Frontend";
import Others from "../../Components/Charts/Others";
import HeadingStyle from "../../Components/HeadingStyle/HeadingStyle";

const Skills = () => {
  return (
    <div>
      <HeadingStyle heading={"My Skills"}></HeadingStyle>
      <div className="flex justify-center flex-col lg:flex-row items-center lg:items-start w-full gap-10 mt-10">
        {/* Front-end */}
      <div className="max-w-[30rem]">
        <h1 className="text-white text-2xl lg:text-4xl text-center mb-10">
          Front-End Technology
        </h1>
        <Frontend></Frontend>
      </div>
        {/* Front-end */}
      <div className="max-w-[30rem]">
        <h1 className="text-white text-2xl lg:text-4xl text-center mb-10">
          Backend Technology
        </h1>
        <Backend></Backend>
      </div>
      {/* Backend */}
      <div className="max-w-[30rem]">
        <h1 className="text-white text-2xl lg:text-4xl text-center mb-10">
          Others Technology
        </h1>
        <Others></Others>
      </div>
      </div>
    </div>
  );
};

export default Skills;
