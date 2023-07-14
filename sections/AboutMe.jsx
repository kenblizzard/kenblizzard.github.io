const AboutMe = ({ profile }) => (
  <section className=" min-h-screen h-full w-full flex flex-col items-center px-3 text-default">
    <div className="py-5 border-t-2 border-b-2 border-dotted border-default w-full text-center mt-10 mb-20">
      <h2 className="uppercase tracking-wider text-5xl">Profile</h2>
    </div>
    <div className="flex flex-col w-full md:w-2/3 space-y-6">
      <div className="flex flex-row">
        <div className="w-1/4 text-center">
          <h3>Current</h3>
        </div>
        <div className="w-3/4 tracking-wide">
          <h3>{profile.current}</h3>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 text-center">
          <h3>About Me</h3>
        </div>
        <div className="w-3/4 tracking-wide">
          <p>
            {profile.aboutMe}
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 text-center">
          <h3>Location</h3>
        </div>
        <div className="w-3/4 tracking-wide">
         {profile.location}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 text-center">
          <h3>Skills</h3>
        </div>
        <div className="w-3/4 tracking-wide">
          <div className="flex flex-row flex-wrap space-x-2 ">
            <div className="bg-blue-500 p-1 px-3 rounded-full text-white m-2">
              ReactJS
            </div>
            <div className="bg-yellow-300 p-1 px-3 rounded-full text-black m-2">
              Javascript
            </div>
            <div className="bg-green-300 p-1 px-3 rounded-full text-black m-2">
              NodeJS
            </div>
            <div className="bg-purple-700 p-1 px-3 rounded-full text-white m-2">
              Redux
            </div>
            <div className="bg-blue-300 p-1 px-3 rounded-full text-black m-2">
              TailwindCSS
            </div>
            <div className="bg-blue-600 p-1 px-3 rounded-full text-white m-2 ">
              AntD
            </div>
            <div className="bg-yellow-600 p-1 px-3 rounded-full text-white m-2 ">
              Amazon Web Services
            </div>
            <div className="bg-red-400 p-1 px-3 rounded-full text-black m-2">
              Java
            </div>
            <div className="bg-green-700 p-1 px-3 rounded-full text-white m-2">
              Google Map
            </div>

            <div className="bg-pink-600 p-1 px-3 rounded-full text-white m-2 ">
              SQL/NoSQL Databases
            </div>
            <div className="bg-indigo-300 p-1 px-3 rounded-full text-black m-2 ">
              Git
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 text-center">
          <h3>Education</h3>
        </div>
        <div className="w-3/4 flex flex-row text-left space-x-5">
          <div className="flex flex-col">
            <h6>{profile.education.course}</h6>
            <strong>{profile.education.school}</strong>
            <p>{profile.education.year}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
