import React from "react";
import Router from "next/router";
import Link from "next/link"

function Organelle(props) {
  const { organelle } = props;

  async function viewAllSystemsClick(e) {
    await Router.push({
      pathname: "/organelles",
    });
  }

  return (
    <section className="individual">
      {/* <p><Link href="/organelles">Organelles</Link> > <strong>{organelle.organelle}</strong></p> */}
      <h1>Organelles</h1>
      <div className="i-info">
        <h3 className="i-name">{organelle.organelle}</h3>
        <img
          className="i-image"
          src={organelle.image}
          alt={`Image of ${organelle.organelle}`}
        />
        <p className="i-details">Function: {organelle.description}</p>
      </div>
      <div>
        <button className="i-button" onClick={viewAllSystemsClick}>
          View All Organelles
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const req = await fetch(`http://localhost:3000/api/organelles/${query.slug}`);
  const data = await req.json();

  return {
    props: {
      organelle: data,
    },
  };
}

export default Organelle;
