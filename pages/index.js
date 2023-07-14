import Head from "next/head";
import "tailwindcss/tailwind.css";
import TypeAnimation from "react-type-animation";
import { useEffect } from "react";
import onePageScroll from "../components/onepagescroll";
import { getProfile } from "./api/profile";
import AboutMe from "../sections/AboutMe";
import Experiences from "../sections/Experiences";
import Footer from "../sections/Footer";



export default function Home() {
  const profile = getProfile();
  useEffect(() => {
    new onePageScroll(".main", {
      sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
      easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
      animationTime: 1000, // AnimationTime let you define how long each section takes to animate
      pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
      updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
      loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
      keyboard: true, // You can activate the keyboard controls
      responsiveFallback: 1000,
    });
  }, []);
  return (
    <div className="body flex flex-col items-center justify-center min-h-screen background lg:h-screen">
      <Head>
        <title>{profile.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main container  h-full flex flex-col w-full text-default bg-opacity-20 bg-white">
        <section className=" min-h-screen h-full w-full flex flex-col justify-center items-center px-3 space-y-8">
          <div>
            <TypeAnimation
              sequence={["Kenneth Bolico", 3000, ""]}
              wrapper="h1"
              className="text-7xl md:text-9xl uppercase tracking-tighter text-center"
              repeat={Infinity}
            />
          </div>
          <div className=" divide-x-2 flex flex-col sm:flex-row flex-wrap justify-start space-x-2 tracking-widest">
            <h3>Software Engineer</h3>
            <h3 className="px-3">Gamer</h3>
            <h3 className="px-3">Adventurer</h3>
          </div>
          <p>Coffee is life ☕. Pizza is love 🍕.</p>
        </section>
        <AboutMe profile={profile} />
        <Experiences profile={profile} />
        <Footer />
      </main>
    </div>
  );
}
