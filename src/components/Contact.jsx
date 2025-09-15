import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { socials } from "../constants";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleEmailBlur = async (e) => {
    const email = e.target.value;
    if (!email) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_EMAIL_VALIDATION_API}&email=${email}`
      );
      const data = await res.json();

      if (data.deliverability !== "DELIVERABLE") {
        setEmailError("This email does not exist.");
      } else {
        setEmailError("");
      }
    } catch (err) {
      console.error("Email validation error:", err);
      setEmailError("Unable to validate email right now.");
    }
  };

  const validateEmailExistence = async (email) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_EMAIL_VALIDATION_API}&email=${email}`
      );
      const data = await res.json();
      return data.deliverability === "DELIVERABLE"; // Abstract API response
    } catch (err) {
      console.error("Email validation error:", err);
      return false;
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    if (emailError.length > 0) {
      toast.error("Invalid or non-existent email address.");
      setLoading(false);
      return;
    }

    const emailExists = await validateEmailExistence(data.email);
    if (!emailExists) {
      toast.error("Invalid or non-existent email address.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          to_name: "Mohd Zubair Alam",
          email: data.email,
          to_email: "zubairalambpl8@gmail.com",
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Form submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16"
      >
        <span className="text-sky-500 dark:text-rose-800">Get in Touch</span>
      </motion.h2>

      {/* Layout wrapper */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 justify-center items-center">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 backdrop-blur-xl border-4 border-gray-800 dark:text-white rounded-3xl shadow-lg p-8 flex flex-col gap-6"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-sky-500 dark:focus:ring-rose-800 outline-none"
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              onBlur={handleEmailBlur}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-sky-500 dark:focus:ring-rose-800 outline-none"
            />

            {!errors.email && emailError && (
              <span className="text-sm text-red-500">{emailError}</span>
            )}

            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              {...register("message", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-sky-500 dark:focus:ring-rose-800 outline-none"
            />
            {errors.message && (
              <span className="text-sm text-red-500">Message is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-sky-500 dark:bg-rose-800 text-white font-semibold opacity-80 hover:opacity-100 transition cursor-pointer"
          >
            {loading ? (
              <div role="status" className="flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin fill-rose-800 dark:fill-sky-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-xl border-4 border-gray-800 p-10 rounded-3xl shadow-2xl max-w-lg text-center"
        >
          <p className="text-lg md:text-xl mb-10 text-slate-700 dark:text-gray-200">
            I’m always open to new opportunities, collaborations, or just a
            friendly chat. Let’s build something{" "}
            <span className="text-sky-500 dark:text-rose-800 font-semibold">
              amazing
            </span>{" "}
            together!
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition`}
              >
                <img src={social.icon} alt={social.name} className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
