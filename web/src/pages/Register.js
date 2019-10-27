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
        <label htmlFor="appName">Application Name</label>
        <input
          type="text"
          name="appName"
          id="appName"
          placeholder="Super Cool App"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register
