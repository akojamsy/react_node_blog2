import './signup.css'

function Signup() {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign Up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn solid" value="Sign Up" />
          <p className="social-text">Or Sign Up with social platforms</p>
          <div className="social-media">
            <a href="www.facebook.com" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="twitter.com" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="gmail.com" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="linkedin.com/in/james-akomu" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
