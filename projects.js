const projectsSection = document.querySelector('.featured-wrapper');
// const wrapper = document.getElementsByClassName('feature-wrapper');

const features = [
  {
    name: 'Web Development',
    subText: 'Wondering how to get started as a Beginner?',
    mainText: 'We got you covered ranging from the best tutuorial out there. For better roadmap on how to get started in the field of web developmentwe got you covered!!',
    image: 'app-dev',
  },
  {
    name: 'JavaScript Tutotrial',
    subText: 'Wondering how to get started as a Beginner?',
    mainText: 'We got you covered ranging from the best tutuorial out there. For better roadmap on how to get started in the field of web developmentwe got you covered!!',
    image: 'js',
  },
  {
    name: 'Python Programming',
    subText: 'Wondering how to get Started with Python Programming?',
    mainText: 'We got you covered ranging from the best tutuorial out there. For better roadmap on how to get started in the field of web developmentwe got you covered!!',
    image: 'py',
  },
  {
    name: 'HTML 5/CSS Tutorials',
    subText: 'Wondering how to get started as a Beginner?',
    mainText: 'We got you covered ranging from the best tutuorial out there. For better roadmap on how to get started in the field of web developmentwe got you covered!!',
    image: 'html',
  },
];

function CreateCourse() {
  for (let i = 0; i < features.length; i += 1) {
    projectsSection.innerHTML += `  <div class="featured-card">
      <img src="img/${features[i].image}.png" alt="images" class="featured-image" >
     
      <div class="abc">
         <h1 class="xyz">${features[i].name}</h1>
      <p class="main-text">${features[i].subText}</p>
      <p class="sub-text">${features[i].mainText}</p>
     </div> 
    </div>
 `;

  }
}
CreateCourse()