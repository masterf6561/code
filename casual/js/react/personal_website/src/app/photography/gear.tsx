import React from 'react'
import {gearItems} from "./gearItems";
import {GearItem} from "./gearItems";
import Image from "next/image";
import Link from "next/link";

export const Gear = () => {
  return (
    <div className="bg-seasalt text-night" id="gearList">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl mb-12">My Gear</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {gearItems.map((item: GearItem) => {
              return (
                <>
                  <article
                    key={item.title}
                    className="p-6 mb-6 bg-white transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <h3 className="text-night text-lg">
                        {item.title}
                      </h3>
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={`/${item.foto}`}
                        alt=""
                      />
                      <Link
                        className="flex justify-center items-center bg-purple-500 bg-opacity-0  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={`/gear/${item.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check it out
                      </Link>
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        <span dangerouslySetInnerHTML={{ __html: item.description }} />
                      </Link>
                    </h3>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
  )
}
