import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-156 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-184">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto ">
              <img
                className="w-full h-full object-cover md:object-right"
                src={`${service1}`}
                width={800}
                height={730}
                alt="smartest AI"
              />
            </div>

            <div className="relative z-1 max-w-68 ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>

              <p className="body-2 mb-12 text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={`${check}`} width={24} height={24} />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8 " />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-156 border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  src={`${service2}`}
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-12 ">
                <h4 className="h4 mb-4">Photo editing</h4>

                <p className="body-2 text-n-3">
                  Automatically enhance your photos using our AI app's photo
                  editing, feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-184">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>

                <p className="body-2 mb-8 text-n-3">
                  The world's most powerful AI photo and video art generation
                  engin. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, i) => (
                    <li
                      key={i}
                      className={`cursor-pointer flex items-center justify-center rounded-2xl ${
                        i === 2
                          ? "w-12 h-12 p-0.25 bg-conic-gradient md:w-18 md-h-18"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={`${
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                            : ""
                        }`}
                      >
                        <img
                          src={`${icon}`}
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-80 bg-n-8 rounded-xl overflow-hidden md:h-100">
                <img
                  className="w-full h-full object-cover"
                  src={`${service3}`}
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
