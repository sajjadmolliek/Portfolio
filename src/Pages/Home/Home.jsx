import { Helmet } from "react-helmet";
import { FaFileDownload } from "react-icons/fa";
import sajjad from "/src/assets/Fav-icone-image/sajjad.png";
// import pdf from "/public/Sajjad_Resume.pdf"
import axios from "axios";
import fileDownload from "js-file-download";
import Skills from "./Skills";
// import fileDownload from "js-file-download";

const Home = () => {
  const handleDownload = () => {
    axios.get("https://resume-lac-one.vercel.app",{responseType:'blob'}).then((res) => {
      console.log(res.data)
      fileDownload(res.data, "Resume.pdf");
    });
  };
  return (
    <div>
      <Helmet title="Sajjad Molliek | Home"></Helmet>

      <div className="flex flex-col gap-10 md:gap-0 md:flex-row text-white justify-between w-[80%] mx-auto my-10 items-center">
        <div>
          <h1 className="text-xl md:text-4xl lg:text-7xl">
            <span className="block mb-2">Hi, I&apos;m</span> Sajjad Hossain
          </h1>
          <br />
          <br />
          <p className="text-2xl">
            A Full Stack Developer with a specialization in the
            <br />
            MERN (MongoDB, Express.js, React.js, Node.js) stack.
          </p>

          {/* <a href={pdf} download="Resume" rel="noopener noreferrer">Amake Click Kro</a> */}
          <button
            onClick={handleDownload}
            className=" p-4 flex items-center justify-center gap-2 font-semibold text-3xl  text-[#FF0000] mt-16 rounded-full bg-[#3A3A3A70]"
          >
            Get Resume <FaFileDownload className="text-2xl"></FaFileDownload>
          </button>
        </div>
        <div>
          <img className="w-[15rem] lg:w-[20rem] " src={sajjad} alt="Sajjad" />
        </div>
      </div>

      <Skills></Skills>
    </div>
  );
};

export default Home;
