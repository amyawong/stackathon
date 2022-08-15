import React, { useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

function Categories({ categories }) {

  return (
    <section>
      <h1>Types of Cells</h1>
      <div className="all-view">
        {categories.map((category) => (
          <div className="all-view-section" key={category.id}>
            <Link href={{
              pathname: "/cell-categories/[slug]",
              query: { slug: category.category },
            }}>
              <div className="all-view-grid">
                <div className="imgBx">
                  <img
                    className="all-view-image"
                    src={category.image}
                    alt={`Picture of ${category.category} cells`}
                  />
                </div>
                <div className="nameBx">
                  <p className="all-view-name">{category.category} cells</p>
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
  const req = await fetch(`http://localhost:3000/api/cell-categories`);
  const data = await req.json();
  return {
    props: {
      categories: data,
    },
  };
}

export default Categories;
