import React from "react";
import image1 from "../assets/image/6.jpg";
import image2 from "../assets/image/b1.jpg";
import image3 from "../assets/image/1.jpg";
import image4 from "../assets/image/5.jpg";
import image5 from "../assets/image/3.jpg";

// Single Image Card Component
const ImageCard = ({ imgSrc, title, description }) => {
    return (
        <div className="relative group w-full h-full">
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex flex-col justify-between p-4">
                <div className="text-white flex flex-col">
                    <h2 className="text-2xl font-bold transform transition-transform duration-500 ease-in-out group-hover:translate-y-4 underline">{title}</h2>
                </div>
                <div className="text-white mt-auto flex flex-col">
                    <p className="text-lg transform transition-transform duration-500 ease-in-out group-hover:translate-y-4{transform: translateY(-10px);">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Main Gallery Component
const Gallery = () => {
    const items = [
        {
            imgSrc: image1,
            title: "Men's Sunglasses",
            description: "Our sunglasses and retro frames are all shades of great.",
        },
        {
            imgSrc: image2,
            title: "New Men'Style",
            description: "Style it like a boss with this week's most hyped T-shirts.",
        },
        {
            imgSrc: image4,
            title: "Men's Watches",
            description: "Designer or digital, vintage or leather - it's time to get smart.",
        },
        {
            imgSrc: image3,
            title: "Fashion Men's Shoes",
            description: "Marley tried to convince her but she was not interested.",
        },
        {
            imgSrc: image5,
            title: "Sunglasses",
            description: "Our sunglasses and retro frames are all shades of great.",
        },
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-8 max-w-7xl mx-auto p-8 mt-10">
            {/* First row */}
            <div className="col-span-1 row-span-1">
                <ImageCard
                    imgSrc={items[0].imgSrc}
                    title={items[0].title}
                    description={items[0].description}
                />
            </div>
            <div className="col-span-1 row-span-2">
                <ImageCard
                    imgSrc={items[1].imgSrc}
                    title={items[1].title}
                    description={items[1].description}
                />
            </div>
            <div className="col-span-1 row-span-1">
                <ImageCard
                    imgSrc={items[2].imgSrc}
                    title={items[2].title}
                    description={items[2].description}
                />
            </div>
            {/* Second row */}
            <div className="col-span-1 row-span-1">
                <ImageCard
                    imgSrc={items[3].imgSrc}
                    title={items[3].title}
                    description={items[3].description}
                />
            </div>
            <div className="col-span-1 row-span-1">
                <ImageCard
                    imgSrc={items[4].imgSrc}
                    title={items[4].title}
                    description={items[4].description}
                />
            </div>
        </div>
    );
};

export default Gallery;