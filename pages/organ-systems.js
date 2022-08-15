// landing page for /organ-systems
import React, { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function OrganSystems({ systems }) {
  // const { systems } = props;
  // console.log('{ systems }: \n', systems);
  // const router = useRouter();

  return (
    <section>
      <h1>Organ Systems</h1>
      <div className="all-view">
        {systems.map((system) => (
          <div className="all-view-section" key={system.id}>
            <Link href={{
              pathname: "/organ-systems/[slug]", 
              query: { slug: system.system },
            }}>
              <div className="all-view-grid">
                <div className="imgBx">
                  <img
                    className="all-view-image"
                    src={system.image}
                    alt={`Image of the ${system.system}`}
                  />
                </div>
                <div className="nameBx">
                  <p className="all-view-name">{system.system}</p>
                </div>
              </div>
            </Link>
            <hr />
            <br /><br /><br /><br /><br />
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/api/organ-systems`);
  const data = await req.json();
  return {
    props: {
      systems: data,
    },
  };
}

export default OrganSystems;
