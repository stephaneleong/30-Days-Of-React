// index.js
import React from 'react'
import { createRoot } from 'react-dom/client'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlImage from './images/html.png'
import cssImage from './images/css.png'
import javascriptImage from './images/javascript.png'
import reactImage from './images/react.png'
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Stephane',
  lastName: 'Leong',
}
const date = 'Dec 4, 2024'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const yearBorn = 2001
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    <strong className='capitalize'>{author.firstName} {author.lastName}</strong> is {age} years old
  </p>
)

// JSX element, main
const techs = [htmlImage, cssImage, javascriptImage, reactImage]
const techsFormatted = techs.map((tech) => <li key={tech}><img src={tech} alt={tech} className="full-page-image" /></li>)

const profileStyle = {
  borderRadius: '50%',
  objectFit: 'cover',
}

const user = <img style={profileStyle} src={asabenehImage} alt='asabeneh' />

const frontEndStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Docker', 'Git'];
const skillSFormatted = skills.map(skill => <div className='skill-item'>{skill}</div>)
// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      {user}
      {personAge}
      <h2>Skills</h2>
      <div className="flex-container">
        {skillSFormatted}
      </div>
      <p style={frontEndStyle}>
        <strong>
          Front End Technologies
        </strong>
      </p>

      <ul style={frontEndStyle}>{techsFormatted}</ul>
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <div className='newsletter'>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and update</p>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" />
        <input type="submit" value="Subscribe" />
      </div>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
// we render the JSX element using the ReactDOM package
root.render(app)