// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const profile = {
  name: "Kenneth Bolico",
  current: "Senior React Developer",
  aboutMe:
    "A Senior Software Engineer with more than 8 years of experience in I.T industry and proven track record in developing high quality and scalable softwares in fields of Online Banking, Logistics, Travel and Energy.",
  location: "Batangas, Philippines",
  skills: [
    "ReactJS",
    "Javascript",
    "NodeJS",
    "Redux",
    "TailwindCSS",
    "AntD",
    "Styled Components",
    "Amazon Web Services",
    "Java",
    "Google Map",
    "SQL/NoSQL Databases",
    "Git",
  ],
  education: {
    course: "BS Computer Science",
    school: "Polytechnic University of the Philippines - Sta. Mesa",
    year: "2011-20215",
  },
  experiences: [
    {
      duration: "October 2022 - June 2023",
      company: "Collabera",
      role: "Senior React Developer",
      projects: [
        {
          name: "Carlson Wagonlit Travel",
          url: "https://travel.mycwt.com/login",
        },
      ],
      skills: ["ReactJS", "Redux", "Javascript", "Styled Components", "Git", "REST Api"],
    },
    {
      duration: "May 2022 - October 2022",
      company: "Cloud Employee",
      role: "Senior React Developer",
      projects: [
        {
          name: "Inspiretec",
        },
      ],
      skills: [
        "ReactJS",
        "Javascript",
        "CSS",
        "HTML",
        "Git",
        "REST",
        "Responsive Design",
      ],
    },
    {
      duration: "November 2018 - May 2022",
      company: "Whitecloak Technologies Inc.",
      role: "Senior React Developer, Team Captain",
      projects: [
        {
          name: "Unionbank Online",
          url: "https://online.unionbankph.com/online-banking/login",
        },
      ],
      skills: [
        "ReactJS",
        "Redux",
        "Javascript",
        "CSS",
        "HTML",
        "Bootstrap",
        "AntD",
        "REST Api"
      ],
    },
    {
      duration: "April 2021 - April 2023",
      company: "Exploretale Technologies",
      role: "Senior React Developer - Partime Freelance",
      projects: [
        {
          name: "KargaX",
          url: "https://kargax.com.ph/",
        },
        {
          name: "TakeFive Outdoors",
          url: "https://takefiveoutdoors.com/",
        },
        {
          name: "TakeFive Partners",
          url: "https://partner.takefiveoutdoors.com/",
        },
      ],
      skills: [
        "ReactJS",
        "Redux",
        "NextJS",
        "Javascript",
        "CSS",
        "HTML",
        "Bootstrap",
        "AntD",
        "REST Api",
        "Web sockets"
      ],
    },
    {
      duration: "October 2015 - November 2018",
      company: "Indra Philippines",
      role: "Java Developer",
      projects: [
        {
          name: "Meralco",
        },
      ],
      skills: ["Java", "Spring", "Javascript", "CSS", "HTML"],
    },
  ],
};

export function getProfile() {
  return profile;
}
