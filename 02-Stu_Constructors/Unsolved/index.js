// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log('My name is ' + this.name + ". " +  'I love ' + this.tech);
      }
    };

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
const erin = new Developer('Erin', 'CSS!');
const josh = new Developer('Josh', "JavaScript!");

// TODO: Create a new object using the 'Developer' constructor
erin.introduction();
josh.introduction();

const manyDevelopers = (erin, josh) => {
    if (erin.name === true && josh.name === true) {
      console.log('Too many developers in one place!');
    }
  };
  
 manyDevelopers(erin, josh);
// TODO: Call the 'introduction()' method on the new object
