import React from 'react';
import ReactDOM from 'react-dom/client';

// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import htmlImage from './images/html.png'
import cssImage from './images/css.png'
import javascriptImage from './images/javascript.png'
import reactImage from './images/react.png'

// JSX element, header
const TechList = () => {
    const techs = [htmlImage, cssImage, javascriptImage, reactImage]
    return techs.map((tech) => <li key={tech}><img src={tech} alt={tech} className="full-page-image"/></li>)
}

const WebTechnologies = () => {
    const frontEndStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div>
            <p style={frontEndStyle}>
                <strong>
                    Front End Technologies
                </strong>
            </p>
            <ul style={frontEndStyle}>
                <TechList />
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <div className='header-wrapper'>
                <WebTechnologies />
            </div>
        </header>
    )
}


// JSX element, main

const ColourPalette = () => {
    const colours = ['#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0']
    const colourStyle = {
        color: "white",
        padding: "2rem",
        textAlign: 'center',
    }
    const coloursFormatted = colours.map(colour => <div style={{ ...colourStyle, backgroundColor: colour }}>{colour}</div>)
    return (
        <div>
            <h2>Colours</h2>
            <div className="flex-container" style={{flexDirection: 'column'}}>
                {coloursFormatted}
            </div>
        </div>
    )
}

const SkillList = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Docker', 'Git'];
    const skillSFormatted = skills.map(skill => <div className='skill-item'>{skill}</div>)
    return (
        <div>
            <h2>Skills</h2>
            <div className="flex-container">
                {skillSFormatted}
            </div>
        </div>
    )
}

const Main = () => {
    const profileStyle = {
        borderRadius: '50%',
        objectFit: 'cover',
    }
    const user = <img style={profileStyle} src={asabenehImage} alt='asabeneh' />

    return (
        <main>
            <div className='main-wrapper'>
                {user}
                <SkillList />
                <ColourPalette />
            </div>
        </main>
    )
}

// JSX element, footer

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and update</p>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" />
            <input type="submit" value="Subscribe" />
        </div>
    )
}

const Footer = () => {
    const copyRight = 'Copyright 2020'
    return (
        <footer>
            <div className='footer-wrapper'>
                <Newsletter />
                <p>{copyRight}</p>
            </div>
        </footer>
    )
}



// JSX element, app
const App = () => (
    <div className='app'>
        <Header />
        <Main />
        <Footer />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
