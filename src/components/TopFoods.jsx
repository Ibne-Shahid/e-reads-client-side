"use client";
import Card from '@/components/Card'
import { useEffect, useState } from 'react';
import Button from './Button';
import Link from 'next/link';



const TopFoods = () => {
    const [items, setItems] = useState([])
    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                SetLoading(true)
                const responese = await fetch('http://localhost:5000/topBooks')
                const data = await responese.json()
                setItems(data)
                SetLoading(false)
            } catch (error) {
                console.error("Error fetching foods:", error);
            }
        }

        fetchData()
    }, [])

    if (loading) return <div className="flex justify-center items-center py-10">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
    </div>

    return (
        <section className="py-16 bg-gray-50">
            <div data-aos='fade-up' className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
                    Top Homemade Dishes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <Card key={index} item={item}></Card>
                    ))}
                </div>
                <div className='flex justify-center mt-10'>
                    <Link href='/Foods'><Button className='bg-primary hover:bg-orange-600 text-white cursor-pointer px-20'>Show All</Button></Link>
                </div>

            </div>
        </section>
    );
}


export default TopFoods