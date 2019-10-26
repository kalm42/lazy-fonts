import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <h1>Did ya forget your password?</h1>
      <form method="post">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your.email@gmail.com"
        />
        <input type="submit" value="Request Password Reset" />
      </form>
    </div>
  )
}

export default ForgotPassword
