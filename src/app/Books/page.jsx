"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:5000/books')
    .then(res=>res.json())
    .then(data=>{
      setItems(data)
      setLoading(false)
    })
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "all" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="flex justify-center items-center py-10">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
  </div>

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2 text-secondary">Our Delicious Foods</h1>
        <p className="text-gray-600">
          Browse our wide variety of foods. Search by name or filter by
          category.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">

        <input
          type="text"
          placeholder="Search foods..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-2 sm:mb-0 w-full sm:w-1/2"
        />


        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/4"
        >
          <option value="all">All Categories</option>
          <option value="fast-food">Fast Food</option>
          <option value="dessert-beverages">Dessert / Beverages</option>
          <option value="asian-middle_eastern">Asian / Middle Eastern</option>
          <option value="italian-western">Italian / Western</option>
          <option value="healthy-vegetarian">Healthy / Vegetarian</option>

        </select>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <p className="col-span-full text-gray-500">
            No foods match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
