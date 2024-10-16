import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 mx-auto rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
