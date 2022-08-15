import React, { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function Cells({ cells }) {
  return (
    <section>
      <h1>Cells in The Body</h1>
      <div className="all-view">
        {cells.map((cell) => (
          <div className="all-view-section" key={cell.id}>
            <Link
              href={{
                pathname: "/cells/[slug]",
                query: { slug: cell.cell },
              }}
            >
              <div className="all-view-grid">
                <div className="imgBx">
                  <img
                    className="all-view-image"
                    src={cell.image}
                    alt={`Image of a ${cell.cell} cell`}
                  />
                </div>
                <div className="nameBx">
                  <p className="all-view-name">{cell.cell}</p>
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
  const req = await fetch(`http://localhost:3000/api/cells`);
  const data = await req.json();
  return {
    props: {
      cells: data,
    },
  };
}

export default Cells;
