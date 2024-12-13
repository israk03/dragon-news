import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftNav() {
  const [categories, setCategories] = useState([]);
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data.data.news_category));
  return (
    <div>
      <h2 className="font-semibold">All Categories ({categories.length})</h2>
      <div className="flex flex-col gap-2 my-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn bg-base-100"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
