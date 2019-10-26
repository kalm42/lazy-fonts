import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <form method="post">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your.email@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="using-a-lot-of-words-is-good"
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default Login
