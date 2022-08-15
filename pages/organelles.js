// landing page for /organ-systems
import React, { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function Organelles({ organelles }) {
  return (
    <section>
      {/* <p>Home > <strong>Organelles</strong></p> */}
      <h1>Organelles</h1>
      <div className="all-view">
        {organelles.map((organelle) => (
          <div className="all-view-section" key={organelle.id}>
            <Link
              href={{
                pathname: "/organelles/[slug]",
                query: { slug: organelle.organelle },
              }}
            >
              <div className="all-view-grid">
                <div className="imgBx">
                  <img
                    className="all-view-image"
                    src={organelle.image}
                    alt={`Image of ${organelle}`}
                  />
                </div>
                <div className="nameBx">
                  <p className="all-view-name">{organelle.organelle}</p>
                </div>
              </div>
            </Link>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/api/organelles`);
  const data = await req.json();
  return {
    props: {
      organelles: data,
    },
  };
}

export default Organelles;
