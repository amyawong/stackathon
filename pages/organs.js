// landing page for /organ-systems
import React, { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function Organs({ organs }) {
  // const router = useRouter();

  return (
    <section>
      <h1>Organs</h1>
      <div className="all-view">
        {organs.map((organ) => (
          <div className="all-view-section" key={organ.id}>
            <Link href="/organs/[slug]">
              <div className="all-view-grid">
                <div className="imgBx">
                  <img
                    className="all-view-image"
                    src={organ.image}
                    alt={`Image of ${organ.organ}`}
                  />
                </div>
                <div className="nameBx">
                  <p className="all-view-name">{organ.organ}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/api/organs`);
  const data = await req.json();
  return {
    props: {
      organs: data,
    },
  };
}

export default Organs;
