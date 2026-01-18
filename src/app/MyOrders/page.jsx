"use client";
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { Calendar, Package, DollarSign, Mail } from 'lucide-react'

const Page = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useUser()

    useEffect(() => {
        if (!user) return
        setLoading(true)
        fetch(`http://localhost:5000/orders?email=${user?.emailAddresses[0]?.emailAddress}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching orders:", error)
                setLoading(false)
            })
    }, [user]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
        </div>
    )

    if (!orders || orders.length === 0) return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Package className="w-24 h-24 mx-auto text-gray-400 mb-6" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">No Orders Yet</h2>
                    <p className="text-gray-600 mb-8">You haven't placed any orders. Start exploring our delicious menu!</p>
                    <a 
                        href="/menu"
                        className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition duration-300"
                    >
                        Browse Menu
                    </a>
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">My Orders</h1>
                    <p className="text-gray-600">
                        Welcome back, {user?.firstName || 'Customer'}! Here's your order history.
                    </p>
                    <div className="mt-4 flex items-center text-gray-500">
                        <Mail className="w-5 h-5 mr-2" />
                        <span>{user?.emailAddresses[0]?.emailAddress}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg mr-4">
                                <Package className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Orders</p>
                                <p className="text-2xl font-bold text-gray-800">{orders.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg mr-4">
                                <Calendar className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Most Recent</p>
                                <p className="text-lg font-semibold text-gray-800">
                                    {orders.length > 0 ? formatDate(orders[0].date) : 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-lg mr-4">
                                <DollarSign className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Spent</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    ${orders.reduce((sum, order) => sum + order.price, 0).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-2/5">
                                    <img
                                        className="h-48 w-full md:h-full object-cover"
                                        src={order.imageUrl}
                                        alt={order.foodName}
                                    />
                                </div>
                                
                                <div className="p-6 md:w-3/5">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary rounded-full mb-2">
                                                {order.relevantField}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {order.foodName}
                                            </h3>
                                            <p className="text-gray-500 text-sm">Order ID: {order._id}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-gray-900">${order.price}</p>
                                            <p className="text-sm text-gray-500">Price</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-gray-600">
                                            <Calendar className="w-4 h-4 mr-3" />
                                            <span className="font-medium">Order Date:</span>
                                            <span className="ml-2">{formatDate(order.date)}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Mail className="w-4 h-4 mr-3" />
                                            <span className="font-medium">Seller:</span>
                                            <span className="ml-2">{order.sellerEmail}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium">Category:</span>
                                            <span className="ml-2 capitalize">{order.category}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <div className="text-sm">
                                            <span className="text-gray-500">Food ID: </span>
                                            <span className="font-mono text-gray-700">{order.foodId.slice(0, 8)}...</span>
                                        </div>
                                        <button className="px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/90 transition duration-300">
                                            Order Again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {orders.length > 0 && (
                    <div className="mt-10 bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Total Items</p>
                                <p className="text-xl font-bold text-gray-800">{orders.length}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Average Price</p>
                                <p className="text-xl font-bold text-gray-800">
                                    ${(orders.reduce((sum, order) => sum + order.price, 0) / orders.length).toFixed(2)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Earliest Order</p>
                                <p className="text-lg font-semibold text-gray-800">
                                    {formatDate(orders[orders.length - 1].date)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Latest Order</p>
                                <p className="text-lg font-semibold text-gray-800">
                                    {formatDate(orders[0].date)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page