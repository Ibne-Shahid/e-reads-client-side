"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { confirmWithToast } from "@/utils/confirmToast";
import { toast } from "react-toastify";

const ManagebooksPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser()


    const email = user?.primaryEmailAddress?.emailAddress

    useEffect(() => {
        async function fetchBooks() {
            try {
                setLoading(true)
                const res = await fetch(`http://localhost:5000/books?email=${email}`);
                const data = await res.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, [email]);


    const handleDelete = async (id) => {
        
        const confirmed = await confirmWithToast("Are you sure you want to delete this item?");
        if (!confirmed) return;

        try {
            const res = await fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" });

            if (res.ok) {
                setBooks((prev) => prev.filter((item) => item._id !== id));
                toast.success("Item deleted successfully!");
            } else {
                toast.error("Failed to delete.");
            }
        } catch (error) {
            toast.error("Something went wrong.");
        }
    };


    if (loading) return <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>

    return (
        <div className="p-6 min-h-screen bg-linear-to-b from-gray-100 to-gray-200">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Manage Your Books
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                    <div
                        key={book._id}
                        className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-1">
                        <div className="relative">
                            <img
                                src={book.imageUrl}
                                alt={book.title}
                                className="h-48 w-full object-cover"
                            />
                            <span className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 text-sm rounded-full shadow-md">
                                {book.price}$
                            </span>
                        </div>

                        <div className="p-5 flex flex-col">
                            <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
                            <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                                {book.shortDescription}
                            </p>


                            <div className="flex justify-between items-center mt-5 pt-4 border-t">
                                <Link href={`/books/${book._id}`} className="px-4 py-2 text-white text-sm bg-success hover:bg-green-800 rounded-lg shadow-md transition-all">
                                    View
                                </Link>

                                <button onClick={() => handleDelete(book._id.toString())} className=" px-4 py-2 text-white text-sm bg-error hover:bg-red-600 rounded-lg shadow-md transition-all">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {books.length === 0 && (
                <p className="mt-10 text-center text-gray-500">No books found.</p>
            )}
        </div>
    );

};

export default ManagebooksPage;
