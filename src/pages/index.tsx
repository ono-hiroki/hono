import React from 'react';
import {TailWindHeader} from "../components/TailWindHeader";
import Image from 'next/image'
import {List} from "../components/List";

const Index = (props: any) => {

    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },{
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
    ]
    return (
       <>
        <TailWindHeader/>
           <List />

           <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">



               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
               <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                   <div style={{margin:'0 auto' ,position: 'relative', width: '336px', height: '200px' }}>
                       <Image
                           className="w-full"
                           src="/earth.jpg"
                           alt="Sunset in the mountains"
                           layout="fill"
                           objectFit='contain'
                       />
                   </div>

                   <div className="px-6 py-4">
                       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                       <p className="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                           et perferendis eaque, exercitationem praesentium nihil.
                       </p>
                   </div>
                   <div className="px-6 pt-4 pb-2">
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                       <span
                           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                   </div>
               </div>
           </div>
        </div>

           <div className="bg-white">
               <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                   <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                   <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                       {products.map((product) => (
                           <div key={product.id} className="group relative">
                               <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                   <img
                                       src={product.imageSrc}
                                       alt={product.imageAlt}
                                       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                   />
                               </div>
                               <div className="mt-4 flex justify-between">
                                   <div>
                                       <h3 className="text-sm text-gray-700">
                                           <a href={product.href}>
                                               <span aria-hidden="true" className="absolute inset-0" />
                                               {product.name}
                                           </a>
                                       </h3>
                                       <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                   </div>
                                   <p className="text-sm font-medium text-gray-900">{product.price}</p>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       </>
    )
}

export default Index;
