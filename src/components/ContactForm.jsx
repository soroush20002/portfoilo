import { useEffect, useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendTelegramMessage = async (message) => {
    try {
      const response = await fetch(
        "https://agrishop-1vpe.vercel.app/api/telegram",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log("MS", data);
      } else {
        console.error("MF", data);
        alert("There was a problem, the message didn’t send. Please try again ❌😭")
      }
    } catch (error) {
      console.error("MF", error);
      alert("There was a problem, the message didn’t send. Please try again ❌😭")
    } finally {
      setLoading(false);
      alert("Message sent successfully 👀🕊")
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    sendTelegramMessage(`
Name: ${name}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`);
  };



  return (
    <div className="flex-center">
      <form className="w-full text-[#a7a7a7] flex flex-col gap-7">
        <div>
          <label className="block text-white md:text-2xl font-semibold mb-2">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="soroush"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
        </div>

        <div>
          <label className="block md:text-2xl font-semibold mb-2">
            Phone Number
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            id="phone"
            placeholder="+099545435"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
        </div>

        <div>
          <label className="block md:text-2xl font-semibold mb-2">
            Subject
          </label>
          <input
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            id="subject"
            placeholder="Enter your subject"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          />
        </div>

        <div>
          <label className="block md:text-2xl font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="5"
            className="w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] bg-black-300 rounded-md"
          ></textarea>
        </div>

        <button
          onClick={(e) => submit(e)}
          disabled={!message || message.trim() === ""}
          className="w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          {message
            ? loading
              ? "Sending..."
              : "Send Message"
            : "Please fill the message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
