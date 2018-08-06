import React from 'react';

const Portfolio = ({ data }) => {
  let portfolio, modalBoxes;

  if (data) {
    portfolio = data.projects.map(function(project) {
      let imageUrl = 'images/portfolio/' + project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.modal} title="">
              <img alt="" src={imageUrl} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
              </div>
            </a>
          </div>
        </div>
      );
    });
    modalBoxes = data.projects.map(function(project) {
      let imageUrl = 'images/portfolio/modals/m-' + project.image;
      let boxId = project.modal.substring(1);
      return (
        <div key={project.title} id={boxId} className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={imageUrl} alt="" />
          <div className="description-box">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <span className="categories">
              <i className="fa fa-tag" />
              {project.tags}
            </span>
          </div>
          <div className="link-box">
            <a href="http://www.behance.net">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
      );
    });
  }
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {portfolio}
          </div>
        </div>
        {modalBoxes}
      </div>
    </section>
  );
};

export default Portfolio;
