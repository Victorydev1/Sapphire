"use client";
import React from "react";
import Image from "next/image";
import data from "@/data/data.json";
import relatedProducts from "@/data/related.json";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const product = data.find((item) => String(item.id) === params.id);

   const related = relatedProducts
     .filter((p) => String(p.id) !== params.id)
     .slice(0, 3);

  if (!product) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">
        Product not found.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li>
            <button
              onClick={() => router.push("/station")}
              className="hover:text-blue-600 transition"
            >
              Products
            </button>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="mb-6">
        <button
          onClick={() => router.push("/station")}
          className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-900 transition"
        >
          Back to Products
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-6 rounded-xl shadow-md flex items-center justify-center">
          <Image
            src={product.image || "/palette.png"}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-500 mb-4">{product.category}</p>
            <p className="text-3xl font-bold text-blue-600 mb-4">
              ₦{product.price}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Jane Doe",
              rating: "⭐⭐⭐⭐⭐",
              review: "Absolutely love this product! Great quality.",
            },
            {
              name: "John Smith",
              rating: "⭐⭐⭐⭐",
              review: "Very nice, but I wish the color was a little darker.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-900">{review.name}</p>
              <p className="text-yellow-500 text-sm">{review.rating}</p>
              <p className="text-gray-600 mt-3">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {related.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/${item.id}`)}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-green-600 font-bold">₦{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;


