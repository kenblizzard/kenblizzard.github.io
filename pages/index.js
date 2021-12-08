import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import TypeAnimation from 'react-type-animation'
import { useEffect } from 'react'
import onePageScroll from './components/onepagescroll'

export default function Home() {
  useEffect(() => {
    new onePageScroll('.main', {
      sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
      easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
      animationTime: 1000, // AnimationTime let you define how long each section takes to animate
      pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
      updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
      beforeMove: function (index) { }, // This option accepts a callback function. The function will be called before the page moves.
      afterMove: function (index) { }, // This option accepts a callback function. The function will be called after the page moves.
      loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
      keyboard: true, // You can activate the keyboard controls
      responsiveFallback: 1000
    })

  }, [])
  return (
    <div className="body flex flex-col items-center justify-center min-h-screen background lg:h-screen">
      <Head>
        <title>Kenneth Bolico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main container  h-full flex flex-col w-full text-default bg-opacity-20 bg-white">
        <section className=" min-h-screen h-full w-full flex flex-col justify-center items-center px-3 space-y-8">
          <div>
            <TypeAnimation
              sequence={['Kenneth Bolico', 3000, '']}
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
          <p>
            Coffee is life ☕. Pizza is love 🍕.
          </p>
        </section>
        <section className=" min-h-screen h-full w-full flex flex-col items-center px-3 text-default">
          <div className="py-5 border-t-2 border-b-2 border-dotted border-default w-full text-center mt-10 mb-20">
            <h2 className="uppercase tracking-wider text-5xl">
              Profile
            </h2>

          </div>
          <div className="flex flex-col w-full md:w-2/3 space-y-6">
            <div className="flex flex-row">
              <div className="w-1/4 text-center">
                <h3>
                  Current
                </h3>
              </div>
              <div className="w-3/4 tracking-wide">
                <h3>
                  Senior React Developer
                </h3>
              </div>
            </div>
            <div className="flex flex-row">

              <div className="w-1/4 text-center">
                <h3>
                  About Me
                </h3>
              </div>
              <div className="w-3/4 tracking-wide">
                <p>
                  A Senior Software Engineer with almost 7 years of experience in I.T industry and proven track record in developing high quality and scalable softwares in fields of Online Banking, Logistics, Travel and Energy.
                </p>

              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/4 text-center">
                <h3>
                  Location
                </h3>
              </div>
              <div className="w-3/4 tracking-wide">
                Manila, Philippines <br /> Prefers full-time remote work
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/4 text-center">
                <h3>
                  Skills
                </h3>
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
                <h3>
                  Education
                </h3>
              </div>
              <div className="w-3/4 flex flex-row text-left space-x-5">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQGAH0LJBVVKYg/company-logo_200_200/0/1519907100157?e=1646265600&v=beta&t=qRNLVTjl24XQ1YZSTv2t98R5EEdwQQn2k-VL5mEB-2M"
                  height="100"
                  width="80"
                  className="max-h-24"
                />
                <div className="flex flex-col">
                  <h6>BS Computer Science</h6>
                  <strong>Polytechnic University of the Philippines</strong>
                  <p>2011-2015</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" min-h-screen h-full w-full flex flex-col items-center px-3 text-default">
          <div className="py-5 border-t-2 border-b-2 border-dotted border-default w-full text-center mt-10 mb-20">
            <h2 className="uppercase tracking-wider text-5xl">
              Experiences
            </h2>
          </div>
          <div className="flex flex-col w-full md:w-2/3 space-y-12">
            <div className="flex flex-row w-full">
              <div className="w-1/4 py-2 text-center">
                <h4>
                  November 2018 - <br />Present
                </h4>
              </div>
              <div className="w-3/4 space-y-5">
                <h3>React Developer / Team Captain</h3>
                <strong>White Cloak Technologies Inc</strong>
                <a href="https://online.unionbankph.com/online-banking/login" target="_blank" className="flex flex-row space-x-2 hover:text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <strong>
                    UnionBank Online
                  </strong>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <div className="flex flex-row flex-wrap">
                  <div className="bg-blue-500 p-1 px-3 rounded-full text-white m-1">
                    ReactJS
                  </div>
                  <div className="bg-purple-700 p-1 px-3 rounded-full text-white m-1">
                    Redux
                  </div>
                  <div className="bg-yellow-300 p-1 px-3 rounded-full text-black m-1">
                    Javascript
                  </div>
                  <div className="bg-red-400 p-1 px-3 rounded-full text-white m-1">
                    Java
                  </div>
                  <div className="bg-purple-700 p-1 px-3 rounded-full text-white m-1">
                    BootstrapCSS
                  </div>
                  <div className="bg-blue-600 p-1 px-3 rounded-full text-white m-1 ">
                    AntD
                  </div>

                  <div className="bg-indigo-300 p-1 px-3 rounded-full text-black m-1 ">
                    Git
                  </div>
                </div>

              </div>
            </div>
            <div className="flex flex-row w-full">
              <div className="w-1/4 py-2 text-center">
                <h4>
                  April 2021 - <br />Present
                </h4>
              </div>
              <div className="w-3/4 space-y-5">
                <h3>Part-time Lead Web Developer</h3>
                <strong>Exploretale Technologies</strong>
                <a href="https://kargax.com.ph/" target="_blank" className="flex flex-row space-x-2 hover:text-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <strong>
                    KargaX
                  </strong>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="https://takefiveoutdoors.com/" target="_blank" className="flex flex-row space-x-2 hover:text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <strong>
                    TakeFive Outdoors
                  </strong>

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <div className="flex flex-row flex-wrap">
                  <div className="bg-blue-500 p-1 px-3 rounded-full text-white m-1">
                    ReactJS
                  </div>
                  <div className="bg-purple-700 p-1 px-3 rounded-full text-white m-1">
                    Redux
                  </div>
                  <div className="bg-pink-700 p-1 px-3 rounded-full text-white m-1">
                    NextJS
                  </div>
                  <div className="bg-blue-300 p-1 px-3 rounded-full text-black m-1">
                    TailwindCSS
                  </div>
                  <div className="bg-blue-600 p-1 px-3 rounded-full text-white m-1 ">
                    AntD
                  </div>
                  <div className="bg-green-700 p-1 px-3 rounded-full text-white m-1">
                    Google Map
                  </div>
                  <div className="bg-yellow-600 p-1 px-3 rounded-full text-white m-1 ">
                    Amazon Web Services
                  </div>
                  <div className="bg-indigo-300 p-1 px-3 rounded-full text-black m-1 ">
                    Git
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-row w-full ">
              <div className="w-1/4 py-2 text-center">
                <h4>
                  October 2015 - <br />November 2018
                </h4>
              </div>
              <div className="w-3/4 space-y-3">
                <h3>Software Engineer</h3>
                <strong>Indra Philippines Inc</strong>
                <div className="font-bold my-2 flex flex-row space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Meralco Internal Applications</span>
                </div>
                <div className="flex flex-row flex-wrap">
                  <div className="bg-red-400 p-1 px-3 rounded-full text-white m-1">
                    Java
                  </div>
                  <div className="bg-yellow-300 p-1 px-3 rounded-full text-black m-1">
                    Javascript
                  </div>
                  <div className="bg-blue-500 p-1 px-3 rounded-full text-white m-1">
                    ReactJS
                  </div>
                  <div className="bg-indigo-300 p-1 px-3 rounded-full text-black m-1 ">
                    Git
                  </div>
                </div>
              </div>

            </div>
           
          </div>


        </section>


        <section className="w-full  py-40 space-y-5 text-center bg-opacity-20 bg-white container">
          <div className="  flex flex-col w-full text-default text-center ">
            <h4 className="uppercase tracking-wider text-xl">
              Connect
            </h4>

          </div>
          <div className=" flex flex-row justify-center items-center space-x-12 text-center">
            <a href="mailto:kenneth.bolico@gmail.com" target="_blank" className="w-6">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
            </a>

            <a href="https://www.linkedin.com/in/kennethbolico/" target="_blank" className="w-6">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://github.com/kenblizzard" target="_blank" className="w-6">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
          </div>
          <div className="font-bold">
            Made with ❤ 2021
          </div>
        </section>
      </main>



    </div >
  )
}
