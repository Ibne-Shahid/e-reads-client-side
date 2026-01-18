"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {
  const { user } = useUser();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newBook = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      price: parseFloat(form.price.value),
      priority: form.priority.value,
      relevantField: form.relevantField.value,
      imageUrl: form.imageUrl.value,
      sellerEmail: form.sellerEmail.value,
      sellerUsername: form.sellerUsername.value,
      category: form.category.value,
    };

    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      const data = await response.json();
      toast.success(data.message);
      form.reset();
      router.push("/ManageFoods");
    } catch (error) {
      toast.error("Error adding book: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-orange-50 to-yellow-50 flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-orange-200"
      >
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">
          Add Your Homemade Food
        </h2>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Title</label>
          <input
            name="title"
            placeholder="Title of your food"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Short Description</label>
          <input
            name="shortDescription"
            placeholder="A brief description"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Full Description</label>
          <textarea
            name="fullDescription"
            placeholder="Detailed description about your food"
            className="border rounded-lg p-3 h-28 resize-none focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Price</label>
            <input
              name="price"
              type="number"
              placeholder="Price in USD"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
              required
              step="0.01"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Priority</label>
            <input
              name="priority"
              placeholder="Priority level"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Relevant Field</label>
          <input
            name="relevantField"
            placeholder="Any relevant info"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Image URL</label>
          <input
            name="imageUrl"
            placeholder="Link to an image of your food"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Seller Email</label>
            <input
              name="sellerEmail"
              type="email"
              className="border rounded-lg p-3 bg-gray-100 text-gray-600 cursor-not-allowed"
              value={user?.emailAddresses?.[0]?.emailAddress || ""}
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Seller Username</label>
            <input
              name="sellerUsername"
              className="border rounded-lg p-3 bg-gray-100 text-gray-600 cursor-not-allowed"
              value={user?.fullName || ""}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Category</label>
          <select
            name="category"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-orange-300 focus:outline-none transition"
            required
          >
            <option value="">Select Category</option>
            <option value="fast-food">Fast Food</option>
            <option value="dessert-beverages">Dessert / Beverages</option>
            <option value="asian-middle_eastern">Asian / Middle Eastern</option>
            <option value="italian-western">Italian / Western</option>
            <option value="healthy-vegetarian">Healthy / Vegetarian</option>
          </select>
        </div>

        <button type="submit" className="w-full py-3 rounded-xl bg-primary hover:bg-orange-600 text-white font-bold text-lg shadow-lg  transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
