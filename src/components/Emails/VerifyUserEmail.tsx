
import "@/sass/index.scss"
import React from "react"

interface VerifyUserEmailProps {
  username: string,
  token: string
}

const VerifyUserEmail: React.FC<VerifyUserEmailProps> = ({username, token}) => (
      <body className="verify_user_email_container">

        <img className="logo" src="/next.svg"/>

        <center className="card">
          <header className="hero">
            <h1>Verify your email</h1>
            <h3>We do this to check if its you {username}!</h3>
          </header>
          <div className="content">
            <p>If you didnt ask to verify this account please ignore this email or contact us to <a href="#">fakeemail@contact.com</a></p>
            <p>test token: {token}</p>
            <button>Verify your account</button>
          </div>
          <footer className="footer">
            <div>Copyright &#169; 2022. All rights reserved.</div>
            <div>If you don't want to receive these emails from us in the future, please <a href="https://app.omegaconstructionmanagement.com/profile" target="_blank"><span>unsubscribe</span></a></div>
          </footer>
        </center>
      </body>
  )

export default VerifyUserEmail