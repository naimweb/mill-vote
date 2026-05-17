import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_1qybpre",
        "template_ruyz566",
        form.current,
        "_qMDgt4kRA9ES51pF"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send message!");
        setLoading(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 shadow-lg rounded-xl">

      <h2 className="text-4xl font-semibold text-center mb-6">
        পিকনিক কি হবে ???
      </h2>

      <form ref={form} onSubmit={sendEmail} className="mt-9">

        <div className="flex flex-col md:flex-row gap-4">

          <input
            name="user_name"
            type="text"
            placeholder="Enter your name"
            required
            className="border w-full px-4 py-2 rounded-lg outline-none"
          />

          <input
            name="user_email"
            type="email"
            placeholder="Enter your email"
            required
            className="border w-full px-4 py-2 rounded-lg outline-none"
          />

        </div>

        <textarea
          name="message"
          placeholder="yes or no "
          maxLength={250}
          required
          className="border w-full mt-4 px-4 py-2 rounded-lg h-40 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg text-white"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>


      <footer>
      <h3 className="text-center mt-7">&copy;{new Date().getFullYear()} Creator ~/naim</h3>
      </footer>
    </div>
  );
}

export default Contact;