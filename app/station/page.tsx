"use client";
import data from "@/data/data.json";
import { useRouter } from "next/navigation";
import Image from "next/image"; 

const Station = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/station/${item.id}`)}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <Image
                src={item.image}
                alt={item.name}
                fill 
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                  ₦{item.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Station;
