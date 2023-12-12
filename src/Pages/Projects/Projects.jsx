import { Helmet } from "react-helmet";
import HeadingStyle from "../../Components/HeadingStyle/HeadingStyle";

const Projects = () => {
  return (
    <div className="text-white">
      <Helmet title="Sajjad Molliek | Projects"></Helmet>
      <div className="mt-20 mb-10">
        <HeadingStyle heading={"My Latest 3 Projects"} />
      </div>
      <div className="flex justify-center items-center gap-10 mb-10">
        <div>
          <iframe
            src="https://forum-b8cea.web.app/"
            className="w-[25rem] h-[60vh]"
          ></iframe>
          <h1 className="text-white text-xl font-bold mt-5 text-center">
            {" "}
            To Show another page{" "}
            <a
              href="http://forum-b8cea.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline text-[#FF0000] text-lg mt-4  bg-[#3A3A3A70]">
                click &gt;&gt;
              </button>
            </a>
          </h1>
        </div>
        <div>
          <iframe
            src="https://online-study-explore.web.app/"
            className="w-[25rem] h-[60vh]"
          ></iframe>
          <h1 className="text-white text-xl font-bold mt-5 text-center">
            {" "}
            To Show another page{" "}
            <a
              href="http://online-study-explore.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline text-[#FF0000] text-lg mt-4  bg-[#3A3A3A70]">
                click &gt;&gt;
              </button>
            </a>
          </h1>
        </div>
        <div>
          <iframe
            src="https://shoes-store-c81c1.surge.sh/"
            className="w-[25rem] h-[60vh]"
          ></iframe>
          <h1 className="text-white text-xl font-bold mt-5 text-center">
            {" "}
            To Show another page{" "}
            <a
              href="http://shoes-store-c81c1.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline text-[#FF0000] text-lg mt-4  bg-[#3A3A3A70]">
                click &gt;&gt;
              </button>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
