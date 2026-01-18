"use client"
import Link from "next/link";

export default function Card({ item }) {
    return (
        <div data-aos='fade-up' className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">

            <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>


                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {item.shortDescription}
                </p>

                <p className="text-primary font-bold mt-4">{item.price}$</p>

                <Link href={`/Foods/${item._id}`}>
                    <button
                        className="mt-4 w-full border border-primary text-primary font-semibold py-2 rounded-lg hover:bg-orange-600 hover:text-black cursor-pointer transition"
                    >
                        View Details
                    </button></Link>
            </div>
        </div>
    );
}