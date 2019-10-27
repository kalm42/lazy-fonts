import React from 'react'
import { Router, Link } from '@reach/router'
import styled from 'styled-components'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Login from './pages/Login'
import Privacy from './pages/Privacy'
import Register from './pages/Register'
import About from './pages/About'
import SEO from './components/SEO'

const Header = styled.header`
  display: grid;
  background: black;
  color: white;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  min-height: 40px;
`
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 200;
  span {
    font-weight: 400;
  }
`
const NavUl = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
  justify-items: center;
`
const BlankLink = styled(Link)`
  text-decoration: none;
  color: white;
`
const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 200ms ease;
  padding: 10px;
  &:hover {
    transform: scale(1.1, 1.1);
    background-color: var(--yellow);
    color: black;
    font-weight: 200;
  }
  &:active {
    transform: scale(0.9, 0.9);
    background-color: var(--light-yellow);
    color: black;
    font-weight: 200;
  }
`
const Main = styled.main`
  width: 80vw;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
`
const Footer = styled.footer`
  background: black;
  color: white;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  min-height: 40px;
`
const FooterUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
`
const FeedbackBtn = styled.button`
  max-width: 100px;
`

function App() {
  return (
    <div>
      <SEO />
      <Header>
        <BlankLink to="/">
          <H1>
            Lazy <span>Fonts</span>
          </H1>
        </BlankLink>
        <nav>
          <NavUl>
            <HeaderLink to="/">
              <li>Catalog</li>
            </HeaderLink>
            <HeaderLink to="/about">
              <li>About</li>
            </HeaderLink>
            <HeaderLink to="/login">
              <li>Login</li>
            </HeaderLink>
          </NavUl>
        </nav>
      </Header>
      <Main>
        <Router>
          <Home path="/" />
          <Terms path="/terms" />
          <Privacy path="/privacy" />
          <About path="/about" />
          <Login path="/login" />
          <Login path="/login/:token" />
          <Register path="/register" />
        </Router>
      </Main>
      <Footer>
        <FeedbackBtn type="button">Feedback</FeedbackBtn>
        <FooterUl>
          <li>Terms</li>
          <li>Privacy</li>
        </FooterUl>
      </Footer>
    </div>
  )
}

export default App
