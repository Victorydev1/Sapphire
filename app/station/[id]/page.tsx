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
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6 text-gray-500">
        <ol className="flex flex-wrap gap-2">
           <button
      onClick={() => router.push('/station/')}
      className="text-black hover:text-blue-500"
    >
      Station
    </button>
          <li>/</li>
          <li className="text-gray-800">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
          <Image
            src={product.image || "/palette.png"}
            alt={product.name}
            width={500}
            height={400}
            className="object-cover rounded-lg w-full max-h-[400px]"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.category}</p>
          <p className="text-3xl font-semibold text-blue-600 mb-4">
            ₦{product.price}
          </p>
          <p className="text-gray-700 mb-6 text-white">{product.description}</p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-black">Jane Doe</p>
            <p className="text-gray-600 text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-700 mt-2">
              Absolutely love this product! Great quality.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-black">John Smith</p>
            <p className="text-gray-600 text-sm">⭐⭐⭐⭐</p>
            <p className="text-gray-700 mt-2">
              Very nice, but I wish the color was a little darker.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow p-4 rounded-lg cursor-pointer hover:shadow-lg"
              onClick={() => router.push(`/${item.id}`)}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="rounded-lg w-full mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-green-600 font-bold">₦{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
