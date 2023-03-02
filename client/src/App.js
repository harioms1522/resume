import React from 'react'
import Navbar from './Components/Navbar'
import pic from "./Components/icons/1651338187988.jpeg"
import Aboutme from './Components/Aboutme'
import Skills from './Components/Skills'
import nodeIcon from "./Components/icons/nodejs.png"
import redisIcon from "./Components/icons/redis.png"
import reactIcon from "./Components/icons/react.png"
import mongoIcon from "./Components/icons/mongodb.png"
import expressIcon from "./Components/icons/express.jpg"
import dockerIcon from "./Components/icons/docker.png"
import Projects from './Components/Projects'
import Contactme from './Components/Contactme'
import performanceMonitor from "./Components/icons/performanceMonitor.png"

// this can be made based on server aw well
const info = {
  name:"Hariom Sharma",
  about:{
    name:"About Me!",
    description:"Seeking a challenging role as a Backend Engineer where I can utilize my experience in Node.js, MongoDB, JavaScript, Socket, Servers, Linux, and REST APIsto design and develop innovative and secure applications. My objective is to continuously improve my technical skills, work effectively in a team environment, and use my knowledge to build scalable and efficient systems.",
    details:[
      {
        name:"Exp :: Backend Developer (Tablt Pharmacy)",
        points:[
          "one",
          "two",
          "three"
        ] 
      },
      {
        name:"Exp :: Process Analyst (Ruptok Fintech)",
        points:[
          "one",
          "two",
          "three"
        ] 
      },
      {
        name:"Education",
        points:[
          "B.Sc. (Physical Sciences) :: Zakir Husain Delhi College (Delhi University)",
          "M.Sc. (Physics - Electronics) :: M.M. Degree College (CCSU)",
        ] 
      }
    ]
  },
  skills:[
    {
      name:"Nodejs",
      level:.1,
      description:"A javascript runtime to use JS as a scriptig languages to run js outside browser!",
      icon:nodeIcon,
      details:[
        {
          name:"Experience",
          points:[
            "one",
            "two",
            "three"
          ] 
        },
        {
          name:"Projects",
          points:[
            "sdkjasdjdsfjkajkasdg",
            ""
          ]
        }
      ]

    },
    {
      name:"Express",
      level:1,
      description:"A nodejs framwork to easily implement servers and routing! And much more thanks to its middleware structure for req response cycle",
      icon: expressIcon

    },
    {
      name:"MongoDB",
      level:1,
      description:"A document based NOSQL database. That provides fast transactional queries and the documents are easily refered as the JS objects",
      icon: mongoIcon
    },
    {
      name:"Redis",
      level:.7,
      description:"A in-memory database that can be easily used for the caching purposed and other modules like redis-search are also provided",
      icon: redisIcon
    },
    {
      name:"React",
      level:.8,
      description: "A front-end framework of js. Its based on components and provides easy ways to generate complex components",
      icon: reactIcon
    },
    {
      name:"Docker",
      level:.8,
      description:"Its a container based technology that provides infrastructure of the app as code. Complex arctictures of Apps can be easily setup using docker containers and associated technologies",
      icon:dockerIcon
    },
    // "CSS":8, 
    // "HTML":8, 
    // "Bootstrap5":8, 
  ],
  projects:[
    {
      name:"Performance Monitor",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      srcCode:"https://github.com/harioms1522/PerformanceMonitor",
      image:performanceMonitor,
      tags:"Per",
      details:[
        {
          name: "Why?",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        },
        {
          name: "How?",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        },
        {
          name: "What?",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    },
    {
      name:"In Office",
      description: "I have been working on developing the CRM and ERP portals for our company!",
      details:[
        {
          name: "Responsibilities",
          points:[
            "Working1",
            "Working2",
            "Working3"
          ]
        }
      ]
    }
  ]
}

// state of a json that has all the resume details
export default function App() {
  return (
    <div className='app-container'>
      <div className='hero'>
        <Navbar />
        <img src={pic} alt='' className='profile-img'></img>
        <h3>Hariom Sharma</h3>
      </div>
      <div className='content'> 
          <Aboutme aboutMe={info.about}/>
          <Skills skills={info.skills}/>
          <Projects projects={info.projects}/>
          <Contactme />
      </div>
    </div>
  )
}
