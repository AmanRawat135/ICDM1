import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div id="footer">
      <div class="footer-content">
        <h1 class="footer-heading">Contact Us</h1>

        <div class="pre-det">
          <h5 class="mail">
            <i class="fas fa-envelope"></i
            ><a href="mailto:2021icdm@gmail.com" class="link-footer"
              >2021icdm@gmail.com</a
            >
          </h5>
          <h5 class="details">Ms. Hrutuja Meshram</h5>
          <h5 class="details"><i class="fas fa-phone-alt"></i>93599 62353</h5>
          <h5 class="details">Mr. Divyanshu Shokeen</h5>
          <h5 class="details"><i class="fas fa-phone-alt"></i>92107 94024</h5>
        </div>

        <div class="footer-icons">
          <i class="fab fa-facebook-f social-icons fa-2x"></i>
          <i class="fab fa-linkedin-in social-icons fa-2x"></i>
          <i class="fab fa-instagram social-icons fa-2x"></i>
        </div>
      </div>

      <hr class="h-rule" />

      <div class="footer-links">
        <h5 class="bullets">About</h5>

        <h5 class="bullets">Registeration</h5>

        <h5 class="bullets">Submissions</h5>

        <h5 class="bullets">DTU</h5>

        <h5 class="bullets">Publications</h5>

        <h5 class="bullets">FAQ</h5>
      </div>
    </div>
        </div>
    )
}

export default Footer
