// dynamic route for /organ-systems/:slug (i.e. /organ-systems/respiratory || /organ-systems/circulatory)

// landing page for /organ-systems
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
    <section className="i-organ-system">
      <h1>Organ Systems</h1>
      <div className="i-organ-system-info">
        <h3 className="i-organ-system-name">{system.system}</h3>
        <img className="i-organ-system-image" src={system.image} alt={`Image of ${system.system}`} />
        <p className="i-organ-system-purpose">{system.purpose}</p>
        <p className="i-organ-system-organs">{system.organsInvolved}</p>
      </div>
      <div>
        <button className="i-organ-system-button" onClick={viewAllSystemsClick}>View All Organ Systems</button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const req = await fetch(`http://localhost:3000/organ-systems/${query.slug}`);
  const data = await req.json();

  return {
    props: {
      system: data
    }
  }
}

// export async function getServerSideProps({ params }) {
//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();
//   return {
//     props: { car: data },
//   };
// }

export default OrganSystem;
