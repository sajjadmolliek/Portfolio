import HeadingStyle from "../../Components/HeadingStyle/HeadingStyle";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const ConnectWithMe = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <HeadingStyle heading={"Touch With Me"}></HeadingStyle>
      </div>

      <div className="lg:w-[55rem] mx-auto p-4 mb-20">
        <h1 className="text-white text-3xl text-start">
          Reach-out <span className="text-[#FF0000]">Me</span>
        </h1>
        <div className="bg-[#FF0000] h-[0.1px] my-8" />

        <div className="flex justify-between gap-3 flex-col md:items-center lg:flex-row text-center ">
          <div className=" space-y-3">
            <p className="bg-[black] text-white text-left rounded-lg p-4 md:w-[25rem]">
              <LocationOnIcon/> Dhaka, Bangladesh.
            </p>
            <p className="bg-[black] text-white text-left rounded-lg p-4 md:w-[25rem] font-sans">
              <LocalPhoneIcon/> ( +880 ) 1734-402046
            </p>
            <p className="bg-[black] text-white text-left rounded-lg p-4 md:w-[25rem]">
              <MailIcon/> sajjadmolliek2018@gmail.com
            </p>
          </div>
          <div className=" space-y-3">
            <p className="bg-[black] text-white text-left rounded-lg p-4 md:w-[25rem]">
              <a
                href="https://github.com/sajjadmolliek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon/> GitHub
              </a>
            </p>
            <p className="bg-[black] text-white text-left rounded-lg p-4 md:w-[25rem]">
              <a
                href="https://www.linkedin.com/in/md-sajjad-hossain-51612220b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon/> Linkedin
              </a>
            </p>
            <p className="bg-[black] text-white text-left rounded-lg p-4 md:w-[25rem]">
              <a
                href="https://www.facebook.com/profile.php?id=100071133422493"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon/> Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;
