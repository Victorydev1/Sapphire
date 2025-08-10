// "use client";
// import React, { useEffect, useState } from 'react';
// import data from "@/data/data.json";
// import { useParams, useRouter } from 'next/navigation';

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   description: string;
//   price: number;
// }

// const Page = () => {
//   const router = useRouter();
//   const params = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         // Find the product by ID from the imported data
//         const productId = parseInt(params.id as string);
//         const foundProduct = data.find((Product) => Product.id === productId);
        
//         if (foundProduct) {
//           setProduct(foundProduct);
//         } else {
//           console.log('Product not found');
//           setProduct(null);
//         }
//       } catch (error) {
//         console.log(error);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.id) {
//       fetchProduct();
//     }
//   }, [params.id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-lg">Loading...</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h1>
//           <p className="text-gray-600 mb-4">The product with ID {params.id} does not exist.</p>
//           <button 
//             onClick={() => router.back()}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <div className="mb-6">
//             <button 
//               onClick={() => router.back()}
//               className="text-blue-500 hover:text-blue-700 mb-4 inline-flex items-center"
//             >
//               ← Back to Products
//             </button>
//             <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
//                 <div className="text-6xl text-gray-400">📦</div>
//               </div>
//             </div>
            
//             <div className="space-y-6">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Details</h2>
//                 <div className="space-y-3">
//                   <div>
//                     <span className="font-medium text-gray-700">Category:</span>
//                     <span className="ml-2 text-gray-900">{product.category}</span>
//                   </div>
//                   <div>
//                     <span className="font-medium text-gray-700">Price:</span>
//                     <span className="ml-2 text-green-600 font-bold">${product.price.toFixed(2)}</span>
//                   </div>
//                   <div>
//                     <span className="font-medium text-gray-700">Description:</span>
//                     <p className="mt-1 text-gray-900">{product.description}</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="pt-4">
//                 <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import React from "react";
import data from "@/data/data.json";
import relatedProducts from "@/data/related.json"
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const product = data.find((item) => String(item.id) === params.id);

   const related = relatedProducts.filter((p) => String(p.id) !== params.id).slice(0, 3);

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-sm mb-6 text-gray-500">
        <ol className="flex flex-wrap gap-2">
          <li>
            <a href="/station" className="hover:text-blue-600">
              Shop
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-800">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
          <img
            src={product.image || "/palette.png"}
            alt={product.name}
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
              <img src={item.image} alt={item.name} className="rounded-lg w-full mb-2" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
