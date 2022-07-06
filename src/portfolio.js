const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ismail449.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ismail Khaled',
  role: 'Front End Engineer',
  description:
    'Recent graduate with a Bachelor of Science Degree (B.Sc.) in Computers and Information looking to leverage my experience building responsive and scalable Web apps to solve interesting problems that delight end-users.',
  resume:
    'https://drive.google.com/file/d/1crlgPvsbr57au3m9L-Q-NbEJqmLuWqjn/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ismail-khaled-089444219/',
    github: 'https://github.com/ismail449',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Custom Countdown',
    description:
      'A simple countdown app that lets you add an event title and date and see the the countdown to this date',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/custom-countdown',
    livePreview: 'https://ismail449.github.io/custom-countdown/',
  },
  {
    name: 'Music Player',
    description: 'A simple music player built using javascript',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/music-player',
    livePreview: 'https://ismail449.github.io/music-player/',
  },
  {
    name: 'Github Jobs Master',
    description:
      'Built a job search app that can search for jobs using the find work API you can search for a job and filter the results using location or employment type and see the job details and how to apply',
    stack: ['React', 'Redux Toolkit', 'React Router V6', 'react-paginate'],
    sourceCode: 'https://github.com/ismail449/github-jobs-master',
    livePreview: 'https://ismail-449-github-jobs.netlify.app',
  },
  {
    name: 'Weather App Master',
    description:
      'Built a weather app that can display the temperature in the place you are in and the wind direction and speed, humidity, visibility and pressure',
    stack: ['JavaScript', 'React', 'Open Weather Map API'],
    sourceCode: 'https://github.com/ismail449/weather-app-master',
    livePreview: 'https://ismail449-weather-app-master.netlify.app/',
  },
  {
    name: 'Light Dark Mode',
    description: 'A simple dark light theme template',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/light-dark-mode',
    livePreview: 'https://ismail449.github.io/light-dark-mode',
  },
  {
    name: 'Joke Teller',
    description:
      'A joke teller app the uses the joke API to get the jokes and the VoiceRSS API to convert the text to speech',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/joke-teller',
    livePreview: 'http://ismail449-joke-teller.surge.sh/',
  },
  {
    name: 'Picture in Picture',
    description:
      'A javaScript project that allows you to stream any media on your computer to a picture in picture',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/Picture-in-picture',
    livePreview: 'https://ismail449.github.io/Picture-in-picture/',
  },
  {
    name: 'Infinite Scroll',
    description:
      'An app where you can infinitely scroll images using the unsplash api',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/infinite-scroll',
    livePreview: 'http://ismail449-infinite-scroll.surge.sh/',
  },
  {
    name: 'Country Quiz Master',
    description:
      'Built a country quiz game you answer questions and see your result the game ends if you make a mistake',
    stack: ['JavaScript', 'React', 'Context API'],
    sourceCode: 'https://github.com/ismail449/country-quiz-master',
    livePreview: 'http://ismail449-quiz-master-app.surge.sh',
  },
  {
    name: 'Quote Generaor',
    description:
      'A simple javascript app that generates quotes and lets you share them on twitter',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ismail449/quote-generaor',
    livePreview: 'https://ismail449.github.io/quote-generaor/',
  },
  {
    name: 'React Shopping Cart',
    description:
      'Built a shopping cart you can make an order and see the order\'s history',
    stack: ['Sass','JavaScript', 'React', 'Redux', 'React Router', 'MongoDB', 'Express'],
    sourceCode: 'https://github.com/ismail449/React-Shopping-Cart',
    livePreview: 'https://ismail449.github.io/React-Shopping-Cart/',
  },
  {
    name: 'Smart Brain',
    description:
      'Built a full-stack web application that allows you to put an image URL and it will detect faces in it',
    stack: ['JavaScript', 'React', 'PostgreSQL', 'Express'],
    sourceCode: 'https://github.com/ismail449/smart-brain-frontend',
    livePreview: 'https://smart-brain449.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'React Router',
  'SASS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ismailkhaled539@gmail.com',
}

export { header, about, projects, skills, contact }
