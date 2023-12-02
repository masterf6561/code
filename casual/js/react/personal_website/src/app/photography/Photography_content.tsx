import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Photography} from "../photography/page";

export const PhotographyContent = async (props: Photography) => {
  "use client";
  
  const {imageFilenames} = props;

  return (
      <div className="bg-seasalt">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-black text-4xl mb-6">My Photography</h1>
          </div>
          <div className="bg-seasalt md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {imageFilenames.map((x: string) => {
              return (
                <>
                  <article
                    key={x}
                    className="p-6 mb-6 rounded-md transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 ">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 w-full rounded-md object-cover transition-transform duration-300 transform
                        group-hover:scale-105"
                        src={`/${x}`}
                        alt=""
                      />
                      <Link
                        className="flex justify-center items-center bg-blue-600 bg-opacity-0 rounded-md absolute top-0 left-0 w-full h-full text-white
                        opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={`/images/${x}`}
                        // target="_blank"
                        rel="noopener noreferrer"
                      >
                      </Link>
                    </div>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
  );
};

