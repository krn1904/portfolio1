const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://krn1904.github.io/portfolio1/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Karan Soni',
  role: 'Front End Engineer',
  description:
    "Highly Motivated toward my goal and eager to contribute my knowledge to the industry and improve myself for the better future of the company and myself.",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/karansoni8349371b7/',
    github: 'https://github.com/krn1904',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TextUtils',
    description:
      'Application to help  user to update, change, copy converted texts and perform operations on copied texts',
    stack: ['JavaScript', 'ReactJs', 'Bootstrap'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Tic-Tac-Toe',
    description:
      'Multiplayer Game that can allow player to put there objects and make a series of objects in horizontal,vertical or diagonaly. The one who make a series of their object wins. ',
    stack: ['AndroidStudio', 'Java', 'CSS'],
    sourceCode: 'https://github.com/krn1904/Tic-Tac-Toe/tree/master',
  },
  {
    name: 'Currency Converter',
    description:
      'App to convert currency in dollar, Ruble, Rupees, and vice-versa.',
    stack: ['AndroidStudio', 'Java'],
    sourceCode: 'https://github.com/krn1904/CurrencyConverter',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'java',
  'Git',
  'python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'Karanssoni2002@gmail.com',
}

export { header, about, projects, skills, contact }
