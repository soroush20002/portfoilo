import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="flex-center md:p-8 px-5 relative">
      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
          title="Contact Me"
          number="03"
          text="Let's collaborate on tailored, sustainable solutions"
        />
        <div className="mt-20">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12 ">
              <div className=" w-full md:h-full h-96 md:absolute top-0 md:left-250 md:m-0 ">
                <div className="skills-video-box ">
                  <video
                    className="skills-video max-h-[600px] h-full scale-300 autoBlur mix-blend-lighten md:translate-y-100 translate-y-[-100px] md:translate-x-[0px] translate-x-[300px] "
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/hero-video.mp4"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
