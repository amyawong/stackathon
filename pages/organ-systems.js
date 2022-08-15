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
      <div className="a-organ-system">
        {systems.map((system) => (
          <div className="a-organ-system-section" key={system.id}>
            <Link href="/organ-systems/[slug]">
              <div>
                <img
                  className="a-organ-system-image"
                  src={system.image}
                  alt={`Image of ${system.system}`}
                />
                <p className="a-organ-system-name">{system.system}</p>
              </div>
            </Link>
            {/* <p className='i-organ-system-purpose'>{system.purpose}</p>
            <p className='i-organ-system-organs'>{system.organsInvolved}</p> */}
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
