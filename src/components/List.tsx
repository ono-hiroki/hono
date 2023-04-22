import Image from "next/image";
import React from "react";
import {Links} from "./Domain/Links";

export function List() {
    const items = [
        {
            href: 'https://nextjs.org/docs',
            title: 'Documentation \u2192',
            description: 'Find in-depth information about Next.js features and API.',
        },
        {
            href: 'https://nextjs.org/learn',
            title: 'Learn \u2192',
            description: 'Learn about Next.js in an interactive course with quizzes!',
        },
        {
            href: 'https://nextjs.org/docs',
            title: 'Documentation \u2192',
            description: 'Find in-depth information about Next.js features and API.',
        },
        {
            href: 'https://nextjs.org/learn',
            title: 'Learn \u2192',
            description: 'Learn about Next.js in an interactive course with quizzes!',
        },
    ]

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {Links.map((item, index) => {
                    return (
                        <a key={index} href={item.href}
                           className="group relative max-w-sm rounded overflow-hidden shadow-lg">
                            <div style={{margin: '0 auto', position: 'relative', width: '336px', height: '189px'}}>
                                <Image
                                    className="w-full"
                                    src={item.imageSrc}
                                    alt="Sunset in the mountains"
                                    layout="fill"
                                    objectFit='cover'
                                />
                            </div>

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{item.title}</div>
                                <p className="text-gray-700 text-base">
                                    {item.description}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {item.tags.map((tag, index) => {
                                    return (
                                        <span key={index}
                                              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            {tag}
                                        </span>
                                    )
                                })}
                            </div>
                        </a>

                    );
                })}
            </div>
        </div>
    )
}
