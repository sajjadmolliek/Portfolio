import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-[#191919] text-neutral-content px-10">
      <div className="items-center grid-flow-col md:justify-self-start">
        <p>Copyright © 2023 - All right reserved to Sajjad Hossain</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/sajjad-molliek-51612220b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className=" text-blue-600" />
        </a>
        <a
          href="https://instagram.com/m.r.molliek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className=" text-red-600" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100071133422493"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className=" text-blue-600" />
        </a>
      </div>
      {/* <div className="md:justify-self-center">
        email
      </div> */}
    </footer>
  );
};

export default Footer;
