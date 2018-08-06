import React from 'react';

const Resume = ({ data }) => {
  let education, work, skills;
  if (data) {
    education = data.education.map(function(edu) {
      return (
        <div key={edu.school} className="row item">
          <div className="twelve columns">
            <h3>{edu.school}</h3>
            <p className="info">
              {edu.degree} <span>&bull;</span>{' '}
              <em className="date">{edu.graduated}</em>
            </p>
            <p>{edu.description}</p>
          </div>
        </div>
      );
    });
    work = data.work.map(function(job) {
      return (
        <div key={job.company} className="row item">
          <div className="twelve columns">
            <h3>{job.company}</h3>
            <p className="info">
              {job.title}
              <span>&bull;</span> <em className="date">{job.years}</em>
            </p>
            <p>{job.description}</p>
          </div>
        </div>
      );
    });
    skills = data.skills.map(function(skill) {
      let className = 'bar-expand ' + skill.name.toLowerCase();
      return (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={className} />
          <em>{skill.name}</em>
        </li>
      );
    });
  }
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">{education}</div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
