import React from 'react';

const About = ({ data }) => {
  let name, image, bio, street, city, state, zip, phone, email, resumeDownload;
  if (data) {
    ({
      name,
      bio,
      address: { street },
      address: { city },
      address: { state },
      address: { zip },
      phone,
      email,
      resumeDownload
    } = data);
    image = 'images/' + data.image;
  }
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={image} alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city}, {state} {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>

            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download" />Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
