import React from "react";
import Router from "next/router";

function Organ(props) {
  const { organ } = props;

  async function viewAllSystemsClick(e) {
    await Router.push({
      pathname: "/organs",
    });
  }

  return (
    <section className="individual">
      <h1>Organs</h1>
      <div className="i-info">
        <h3 className="i-name">{organ.organ}</h3>
        <img
          className="i-image"
          src={organ.image}
          alt={`Image of ${organ.organ}`}
        />
        <p className="i-details">
          Function: {organ.purpose}
        </p>
      </div>
      <div>
        <button className="i-button" onClick={viewAllSystemsClick}>
          View All Organs
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const req = await fetch(
    `http://localhost:3000/api/organs/${query.slug}`
  );
  const data = await req.json();

  return {
    props: {
      organ: data,
    },
  };
}

export default Organ;
