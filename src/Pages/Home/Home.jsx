import { Helmet } from "react-helmet";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
    const handleDownload = () => {
        // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
        const pdfUrl = '/src/assets/Fav-icone-image/Sajjad_Resume.pdf';
    
        // Create a link element
        const link = document.createElement('a');
    
        // Set the href attribute to the PDF file URL
        link.href = pdfUrl;
    
        // Set the download attribute with the desired file name
        link.download = 'Sajjad_Resume.pdf';
    
        // Append the link to the document body
        document.body.appendChild(link);
    
        // Trigger a click on the link to start the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
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
          <button onClick={handleDownload} className=" p-4 flex items-center justify-center gap-2 font-semibold text-3xl  text-[#FF0000] mt-16 rounded-full bg-[#3A3A3A70]">
            Get Resume <FaFileDownload className="text-2xl"></FaFileDownload>
          </button>
        </div>
        <div>
          <img
            className="w-[15rem] lg:w-[20rem] "
            src="/src/assets/Fav-icone-image/sajjad.png"
            alt="Sajjad"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
