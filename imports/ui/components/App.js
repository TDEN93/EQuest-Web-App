import React, { Component } from 'react';
const FontAwesome = require('react-fontawesome');


// Task component - represents a single todo item

export default class App extends Component {

  render() {
    return (
      <div className="container">

        <div className="navigation-grid">
            <i class="menu-icon fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>

        <div className="content-grid">
            <img className="mobile-logo" src="/logo-full.svg" />
            <img className="desktop-logo" src="/beakers.svg" />
            <h1>THE FUTURE</h1>
            <span>OF GAMING INTELLIGENCE IS HERE</span>

            <section>
              <span className="main-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Hic rem tempora sequi ut, culpa harum illum nam?
               Illum voluptates accusamus doloribus debitis autem aliquam
               dolores.</span>
            </section>

            <button className="demo-button">Request a demo</button>
        </div>

        <div className="footer-grid">
            <img className="wave" src="/mobile-waves.svg" />
        </div>
      </div>
    );
  }
}
