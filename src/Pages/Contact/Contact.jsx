import { Helmet } from "react-helmet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeadingStyle from "../../Components/HeadingStyle/HeadingStyle";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g82mh8a",
        "template_cvxdy3t",
        form.current,
        "2SE3nZmcRSJq5x233"
      )
      .then(
        () => {},
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Helmet title="Sajjad Molliek | Contact"></Helmet>
      <div className="mt-20 mb-10">
      <HeadingStyle heading={"Contact With Me"}/>
      </div>
      <div className="text-white mb-10">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col space-y-4 w-[20rem] mx-auto">
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">Name</span>
                </div>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-black"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">Email</span>
                </div>
                <input
                  name="from_email"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs bg-black"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-white">Message</span>
                </div>
                <textarea
                  name="message"
                  className="textarea textarea-bordered bg-black"
                  placeholder="Bio"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-20">
          <input type="submit" value="Send" className="bg-[#FF0000] px-4 py-1 rounded-md mr-2 w-[20rem]"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;