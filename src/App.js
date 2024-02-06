import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name":"Vinay Bojja",
          "occupation":"Software Engineer",
          "description":"Welcome to my profile! I am currently a dedicated and ambitious Master of Science in Computer Science student at the University of San Francisco, where I am honing my skills and knowledge in the dynamic field of computer science.",
          "image":"vinayPic.jpeg",
          "bio":"My primary focus is on Software Development. I am enthusiastic about applying theoretical concepts to real-world scenarios, and my academic journey has equipped me with a strong foundation in various programming languages, software design principles, and problem-solving strategies. I am particularly interested in Web Application Development, and I am excited about the prospect of collaborating with passionate professionals to create meaningful and impactful solutions. Feel free to explore my profile to learn more about my academic projects, technical skills, and the unique perspectives I bring to the table. I am open to networking, collaboration, and opportunities that align with my career aspirations. Let's connect or you can contact me via (email: vinay.bojja321@gmail.com) and explore the possibilities together!",
          "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
          "email": "vinay.bojja321@gmail.com",
          "phone": "+1 (415) 740 7149",
          "address":{
            "street":"Post St.",
            "city":"San Francisco",
            "state":"California",
            "zip": "94115"
          },
          "website": "https://vinay-bojja.github.io/vinaybojja",
          "resumedownload":"https://drive.google.com/file/d/1e4z1Xi8bVYxcs5uigW6XJdV3RG1ejyGd/view?usp=sharing",
          "social":[
            {
              "name":"facebook",
              "url":"http://facebook.com/",
              "className":"fa fa-facebook"
            },
            {
              "name":"twitter",
              "url":"http://twitter.com",
              "className":"fa fa-twitter"
            },
            {
              "name":"google-plus",
              "url":"http://googleplus.com/",
              "className":"fa fa-google-plus"
            },
            {
              "name":"linkedin",
              "url":"https://www.linkedin.com/in/vinay-bojja-21932615a/",
              "className":"fa fa-linkedin"
            },
            {
              "name":"instagram",
              "url":"http://instagram.com/vinay_bojja",
              "className":"fa fa-instagram"
            },
            {
              "name":"github",
              "url":"http://github.com/vinay-bojja",
              "className":"fa fa-github"
            },
            {
              "name":"skype",
              "url":"http://skype.com",
              "className":"fa fa-skype"
            }
          ]
        },
        "resume":{
          "skillmessage":"",
          "education":[
            {
              "school":"University of San Francisco",
              "degree":"Masters in Computer Science",
              "graduated":"May 2024(Expected)",
              "description":"Coursework: Principles of Software Development, Algorithms, Big Data, Network Programming."
            },
            {
              "school":"Vishwakarma Institute of Information Technology",
              "degree":"Bachelors in Computer Engineering",
              "graduated":"May 2020",
              "description":"Coursework: Data Structures and Algorithms, Operating Systems, Databases, Cloud Computing."
            }
          ],
          "work":[
            {
              "company":"Ipserlab Startup LLC, CA",
              "title":"Software Engineer Intern",
              "years":"March 2023 - August 2023",
              "description":"Led on 10+ API integrations, ensuring data consistency, system stability with error handling, and security through authentication protocols."
            },
            {
              "company":"Virtoustack Softwares Pvt. Ltd, Pune",
              "title":"Software Engineer",
              "years":"January 2022 - July 2022",
              "description":"Orchestrated auto-seeding and automated betting functions, reducing planned cheating by 40% and increasing revenue by 30-40% through the successful implementation of betting functionality. Developed a notification module for a 20% increase in user engagement and introduced flexible stage functionality, cutting manual workload by 30% for Tournament Organizers."
            },
            {
              "company":"Larsen and Toubro Infotech, Pune",
              "title":"Consultant",
              "years":"August 2020 - October 2021",
              "description":"Successfully oversaw the execution of 15+ SQL batch flows, ensuring timely code adjustments within specified windows for any identified failures, contributing to a 20% reduction in system downtime. Played a pivotal role in deploying pre-production to production, managing 100+ pre-production PLSQL jobs, delivering comprehensive analyses to the team, resulting in a 30% improvement in deployment efficiency."
            },
            {
              "company":"Inprospect Technologies, Pune",
              "title":"NodeJs Developer Intern",
              "years":"December 2018 - January 2019",
              "description":"Integrated role-based authentication to enforce rigorous access control and bolster security measures within the project. Applied private routes for secure authentication, enhancing data privacy and access control."
            }
          ],
          "skills":[
            {
              "name":"Java",
              "level":"90%"
            },
            {
              "name":"C",
              "level":"90%"
            },
            {
              "name":"C++",
              "level":"90%"
            },
            {
              "name":"Javascript",
              "level":"90%"
            },
            {
              "name":"Python",
              "level":"90%"
            },
            {
              "name":"Typescript",
              "level":"90%"
            },
            {
              "name":"C",
              "level":"90%"
            },
            {
              "name":"Golang",
              "level":"90%"
            },
            {
              "name":"CSS",
              "level":"90%"
            },
            {
              "name":"HTML5",
              "level":"90%"
            },
            {
              "name":"Express.Js",
              "level":"90%"
            },
            {
              "name":"React.Js",
              "level":"90%"
            },
            {
              "name":"Mongoose.Js",
              "level":"90%"
            },
            {
              "name":"Suquelize",
              "level":"90%"
            },
            {
              "name":"MongoDB",
              "level":"90%"
            },
            {
              "name":"MySQL",
              "level":"90%"
            },
            {
              "name":"Postgresql",
              "level":"90%"
            },
            {
              "name":"MS SQL Server",
              "level":"90%"
            }
          ]
        },
        "portfolio":{
          "projects": [
            {
              "title":"Airlines Management System",
              "category":"",
              "image":"canadian-wanderlust.jpg",
              "url":"https://github.com/vinay-bojja/Airlines-Backend.git"
            },
            {
              "title":"TravelHelper - A Hotel Review Website",
              "category":"University Project",
              "image":"fury-fighting-gear.jpg",
              "url":"http://www.timbakerdev.com"
            },
            {
              "title":"Original Thai Food",
              "category":"Website I built for a restaurant I like in Thailand",
              "image":"original-thai-food.jpg",
              "url":"http://www.timbakerdev.com/originalthaifood.github.io"
            },
            {
              "title":"Resume Website",
              "category":"A React based resume website template",
              "image":"resume-website.jpg",
              "url":"http://www.timbakerdev.com"
            },
            {
              "title":"Smirkspace",
              "category":"(MVP Only) A React and Meteor based chat University project.",
              "image":"smirkspace.jpg",
              "url":"http://www.smirkspace.com"
            }
          ]
        },
        "testimonials":{
          "testimonials":[
            {
              "text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
              "user":"Kareem Abdul Jabbar"
            },
            {
              "text":"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
              "user":"Steve Wozniak... impersonator"
            }
          ]
        }
      }
      
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    // this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
