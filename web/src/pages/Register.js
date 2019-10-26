import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form method="post">
        <label htmlFor="email">Email</label>
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
          placeholder="use-a-lot-of-words"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="enter-the-same-password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register
