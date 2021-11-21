import './signin.css'

function Signin() {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign In</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn solid" value="Login" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="facebook.com" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="twitter.com" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="google.com" className="social-icon">
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

export default Signin
