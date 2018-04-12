import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
const Research = (props) => {
  const page = props.researchPage;
  return (<header id="home-section">
    <div className="dark-overlay">
      <div className="home-inner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 main-content supported-game-container"></div>
            <div className="corner-ribbon bottom-right sticky orange shadow">{page.betaTag}</div>
          </div>
        </div>
      </div>
    </div>
  </header>);
}
export default Research;