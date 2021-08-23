import React from 'react';
import Project from '../../components/Project';


const projectCard = [

  {
    deployedLink: "https://natejonesiii.github.io/Safe-Travels/",
    imageIcon: "Safe Travels Image.png",
    descriptionImage: "Safe Travels",
    projectName: "Safe Travels",
    projectDescription: "A COVID-19 travel advisory page to list statistics by county.",
    githubLink: "https://github.com/NateJonesIII/Safe-Travels",
    id: 1
  },
  {
    deployedLink: "https://demo-fitness.herokuapp.com/",
    imageIcon: "Demofitness.png",
    descriptionImage: "Fitness App",
    projectName: "Flextrain",
    projectDescription: "A Sequelize powered full stack app to track your fitness goals and progress.",
    githubLink: "https://github.com/patrickbdevaney/fitness-demo",
    id: 2
  },
  {
    deployedLink: "https://rydersrally.herokuapp.com/",
    imageIcon: "Ryders.png",
    descriptionImage: "Motorcycle Club Charity Organizing Social Media App",
    projectName: "RydersRally",
    projectDescription: "A MERN application which lets users post motorcycle charity events and organize them.",
    githubLink: "https://github.com/vbarajas4/05-Third-Party-API-WorkDayScheduler",
    id: 3
  },
  {
    deployedLink: "https://vbarajas4.github.io/06-Server-Side-APIs-Weather-Dashboard/",
    imageIcon: "Readmegen.png",
    descriptionImage: "Readme Generator",
    projectName: "Readme Generator",
    projectDescription: "A command line interface app for automatic readme structuring",
    githubLink: "https://github.com/patrickbdevaney/readmegenerator",
    id: 4
  },
  {
    deployedLink: "https://patrickbdevaney.github.io/Day-Planner/",
    imageIcon: "Day Planner.png",
    descriptionImage: "Day Planner",
    projectName: "Day Planner",
    projectDescription: "A browser tool to organize your day.",
    githubLink: "https://github.com/patrickbdevaney/Day-Planner",
    id: 5
  }
 
];

function Portfolio() {
    return (
      <div>
        {projectCard.map((project ) => (
          <Project project = { project } />
        ))}
      </div>
    )
  };
  
  export default Portfolio;

      
  