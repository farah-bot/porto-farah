
import * as React from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "UI/ UX Design",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bc29e3ca31c08f8b79cd48e976afb1c79ce5ee0b8821dfd45570e2ffb07d703?apiKey=770a91bd70474eb39d8c1896cfba8984&",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a90078884d5286afe0275ec2e5d1133738f2b4656d28c7f33ae9e5dd5654b295?apiKey=770a91bd70474eb39d8c1896cfba8984&"
  },
  {
    title: "Web Design",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a08f2f9ead8e00793318c2ae3855180ea1365042e59fed8b45a939651abe68a?apiKey=770a91bd70474eb39d8c1896cfba8984&",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/65f963ad014dd5875a3f924860fcd01c1734109cd97b5b00d9786c97270b3a2c?apiKey=770a91bd70474eb39d8c1896cfba8984&"
  },
  {
    title: "Landing Page",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/206c9850cec66c907c402360565016ddd383e9fe82a3d707bd3f0ed850a272cb?apiKey=770a91bd70474eb39d8c1896cfba8984&",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a90078884d5286afe0275ec2e5d1133738f2b4656d28c7f33ae9e5dd5654b295?apiKey=770a91bd70474eb39d8c1896cfba8984&"
  }
];

export function ServicesSection() {
  return (
    <main className="flex overflow-hidden relative flex-col items-center pt-28 pr-16 pb-14 pl-16 w-full bg-neutral-900 min-h-[878px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex overflow-hidden absolute inset-x-0 bottom-0 z-0 flex-col self-start px-20 pt-36 w-full h-[828px] max-md:pt-24 max-md:pl-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca77154489080b0b455afd2a53790ac3e7ec0f39ebb2cc964b6682b6e3866dd8?apiKey=770a91bd70474eb39d8c1896cfba8984&"
          alt=""
          className="object-contain max-w-full aspect-[0.71] w-[486px]"
        />
      </div>
      <header className="flex z-0 flex-wrap gap-10 justify-between items-end max-w-full w-[1299px]">
        <h1 className="text-5xl tracking-tighter leading-none text-gray-50 max-md:text-4xl">
          <span className="font-medium">My </span>
          <span className="font-medium text-orange-400">Services</span>
        </h1>
        <p className="text-xl font-medium tracking-tight text-white w-[576px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales
        </p>
      </header>
      <section className="flex z-0 flex-col items-center mt-24 w-full max-w-[1299px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 justify-between items-start w-full max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <nav className="flex gap-3 items-start mt-10" aria-label="Services navigation">
          <div className="flex shrink-0 bg-orange-400 rounded-3xl h-[15px] w-[60px]" role="button" tabIndex={0} aria-label="Current page" />
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]"
              role="button"
              tabIndex={0}
              aria-label={`Go to page ${index + 2}`}
            />
          ))}
        </nav>
      </section>
    </main>
  );
}
