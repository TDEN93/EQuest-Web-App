import React from 'react';

const Home = (props) => {
	const page = props.homePage;
	return (
		<header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 main-content">
                <h1 className="top-text">
                  {page.title}
                </h1>
                <p className="bottom-text">{page.titleTag}<span>{page.titleTagColored}</span>{page.titleTagAfter}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  </header>
	);
}
export default Home;