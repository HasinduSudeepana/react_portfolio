import React from "react";
import hero from "../assets/images/profile.png";

const Hero = () => {
  const social_media = [
    { name: "logo-instagram", url: "https://www.instagram.com/___hazii__/" },
    { name: "logo-facebook", url: "https://www.facebook.com/hasindusudeepana" },
    { name: "logo-linkedin", url: "https://www.linkedin.com/in/hasindu-karunathilaka-390365213/" },
    { name: "logo-twitter", url: "https://twitter.com/HSudeepana" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Hasindu Karunathilaka</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Software Engineer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
      <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
        {social_media?.map((icon) => (
          <a
            key={icon.name}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white cursor-pointer"
          >
            <ion-icon name={icon.name}></ion-icon>
          </a>
        ))}
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
