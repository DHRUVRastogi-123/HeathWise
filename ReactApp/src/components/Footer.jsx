import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer_1">
        <h2>Explore Our WebSite Get Health Related Help</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et
          eos neque explicabo id? Maiores dolores odio incidunt magnam repellat
          sit inventore blanditiis eius aliquid ipsum. Suscipit enim odit
          voluptate?
        </p>
        <div className="signin-btn">
        <a>
         Sign In
        </a>
        </div>
      </div>
      <div className="footer_2">
        <div className="foot_2_head">
        <h3>Follow us on</h3>
        </div>
        <div className="my-footer-icon">
        <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-whatsapp"></i>
          </div>
      </div>
    </div>
  );
}

export default Footer;