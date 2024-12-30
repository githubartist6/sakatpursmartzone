import React from 'react';
import '../Navbar/NavBar.css';
import FuterCard from '../api/futterData.json';

export const Futer = () => {
  return (
    <>
      <section id="feature" className="section-p1 feature">
        {FuterCard.map((futers) => {
          return (
            <div className="fe-box" key={futers.id}>
                <img src={futers.futer_url} alt="feature" />
                <h4>{futers.futer_titel}</h4>
                <h5>{futers.futer_dis}</h5>
                <h6>{futers.button_name}</h6>
            </div>
          );
        })}
      </section>
    </>
  );
};
