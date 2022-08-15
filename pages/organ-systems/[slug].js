// dynamic route for /organ-systems/:slug (i.e. /organ-systems/respiratory || /organ-systems/circulatory)

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function OrganSystem(props) {
  const { system } = props;
  // console.log('{ systems }: \n', systems);
  // const router = useRouter();

  async function viewAllSystemsClick(e) {
    await Router.push({
      pathname: '/organ-systems',
    });
  }

  return (
    <section className="individual">
      <h1>Organ Systems</h1>
      <div className="i-info">
        <h3 className="i-name">{system.system}</h3>
        <img className="i-image" src={system.image} alt={`Image of ${system.system}`} />
        <p className="i-details">Functions: {system.purpose}</p>
        <p className="i-details">Organs in System: {system.organsInvolved}</p>
      </div>
      <div>
        <button className="i-button" onClick={viewAllSystemsClick}>View All Organ Systems</button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const req = await fetch(`http://localhost:3000/api/organ-systems/${query.slug}`);
  const data = await req.json();

  return {
    props: {
      system: data
    }
  }
}

export default OrganSystem;
