import './panel.css'

function Panel({ handleSignin, handleSignup }) {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New Here?</h3>
          <p>Welcome! Do Signup to keep people in knowledge of your work.</p>
          <button className="btn transparent" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
        <img className="image" src="images/login.png" alt="Signup-illustration" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>With us?</h3>
          <p>
            Welcome Back! Do Login to your account and keep people in knowledge
            of your work.
          </p>
          <button className="btn transparent" onClick={handleSignin}>
            Sign In
          </button>
        </div>
        <img className="image" src="images/signup.png" alt="Signup-illustration" />
      </div>
    </div>
  )
}

export default Panel
