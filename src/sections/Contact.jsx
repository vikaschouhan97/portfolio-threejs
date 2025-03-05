import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import BlurText from "../components/blurText";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // service_wnrpbxd
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_wnrpbxd",
        "template_qqw05pk",
        {
          user_name: form.name,
          to_name: "Vikas Chouhan",
          user_email: form.email,
          to_email: "vikaschouhan360@gmail.com",
          message: form.message,
        },
        "IxZGn6CRk_SBT4QOl"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Something went wrong.");
      });
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          {/* <h3 className="head-text">Contact Me</h3> */}
          <BlurText
            text="Contact Me"
            delay={150}
            animateBy="words"
            direction="top"
            className="head-text text-white-800"
          />
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            {/* <span className="sm:px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg"></span> */}
            <label className="space-y-3">
              <span className="field-label px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] rounded-lg">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Vikas Chouhan"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="vikaschouhan@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                Your Message
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
