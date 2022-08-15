import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function Category(props) {
  const { category } = props;

  async function viewAllSystemsClick(e) {
    await Router.push({
      pathname: "/cell-categories",
    });
  }

  return (
    <section className="individual">
      <h1>Categories</h1>
      <div className="i-info">
        <h3 className="i-name">{category.category}</h3>
        <img
          className="i-image"
          src={category.image}
          alt={`Image of ${category.category}`}
        />
        <p className="i-details">Examples of Cells in This Category: {category.examples}</p>
      </div>
      <div>
        <button className="i-button" onClick={viewAllSystemsClick}>
          View All Cell Categories
        </button>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const req = await fetch(`http://localhost:3000/api/cell-categories/${query.slug}`);
  const data = await req.json();

  return {
    props: {
      category: data,
    },
  };
}

export default Category;
