"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMailBulk, FaPhone, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Book An FREE Appoinment NOW !!";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_q2i3658",
        "template_tdv68w9",
        form.current,
        "QUYNsoDtCllS0QbOr"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-[calc(100vh-32px)] overflow-x-hidden mt-[145px]  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-[#FC4100]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            <br />
            <h4 className="text-[20px] md:text-[26px] items-center font-semibold flex"> <FaPhoneAlt className="flex"  color="red" size={20}/> &nbsp; &nbsp;Call At : 9551550815</h4>
            <br />
            <h4 className="text-[20px] md:text-[26px] items-center font-semibold flex"> <FaMailBulk className="flex"  color="red" size={20}/> &nbsp; &nbsp; Mail:jgtaxconsultant2015@gmail.com</h4>

            
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-[#d58f2d71] rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear JG TAX,</span>
          <input
            type="text"
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-[#FC4100] rounded font-semibold text-white p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Message Has been sent Our Team will contact you Soon!!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong! Kindly Dial : 9551550815
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;