import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import Terms from './pages/Terms'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Privacy from './pages/Privacy'
import Register from './pages/Register'
import SEO from './components/SEO'

function App() {
  return (
    <div>
      <SEO />
      <header>
        <h1>Lazy Fonts</h1>
        <nav>
          <ul>
            <li>Catalog</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <Router>
          <Home path="/" />
          <Terms path="/terms" />
          <Privacy path="/privacy" />
          <Login path="/login" />
          <Register path="/register" />
          <ForgotPassword path="forgot-password" />
        </Router>
      </main>
      <footer>
        <button type="button">Feedback</button>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
