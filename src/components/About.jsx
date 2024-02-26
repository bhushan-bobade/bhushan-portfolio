import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full lg:h-screen sm:h-screen-2x bg-gradient-to-b from-gray-700 to-black  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-6 sm:mt-10 md:mt-16">
        My name is Bhushan Bobade recent graduate(2023) with a degree in Computer Science and Engineering from Savitribai Phule Pune University. Passionate about software developement, I am proficient in HTML, CSS, JavaScript, React and various other technologies integral to web development. I consistently endeavor to broaden my comprehension of web developments dynamic and constantly evolving.
        <p> I've done my 12th from Kulbhushan Junior College and secured 73.69% in HSC.</p> <br />
        Apart from academic pursuits I've actively contributed to my vibrant campus life. I've successfully managed various events, including FASHION SHOW event, where precision in planning and execution led to memorable experience for participants. Additonal, I had the honor of hosting Speech Competition, showcasing my ability to engage with diverse audiences.
        <p>On the Sports front, I've been an enthusiastic participant in Sports. Whether it's a the strategic play in Table Tennis or the team fellowship in Cricket, sports have not only kept me physically active but also instilled qualities of teamwork and discipline.</p>
        </p>
        <br />
        <p className="text-xl">
        I am a spirited and multifaceted individual with an authentic passion for technology and an inclination toward perpetual learning.
        </p>
        <p className="text-xl"> Eager to contribute my fresh perspective, quick learning abilities, and dedication to excellence to dynamic projects in the tech industry.</p>
      </div>
    </div>
  );
};

export default About;
