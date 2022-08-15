import React from "react";
import Router from "next/router";

function Cell(props) {
  const { cell } = props;

  async function viewAllSystemsClick(e) {
    await Router.push({
      pathname: "/cells",
    });
  }

  return (
    <section className="individual">
      <h1>Cells</h1>
      <div className="i-info">
        <h3 className="i-name">{cell.cell}</h3>
        <img
          className="i-image"
          src={cell.image}
          alt={`Image of ${cell.cell}`}
        />
        <p className="i-details">Function: {cell.purpose}</p>
        <p className="i-details">Can be found in: {cell.locatedIn}</p>
        <p className="i-details">Category: {cell.category}</p>
      </div>
      <div>
        <button className="i-button" onClick={viewAllSystemsClick}>
          View All Cells
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const req = await fetch(`http://localhost:3000/api/cells/${query.slug}`);
  const data = await req.json();

  return {
    props: {
      cell: data,
    },
  };
}

export default Cell;
