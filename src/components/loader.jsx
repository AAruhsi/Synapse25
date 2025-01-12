"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const totalAssets = document.images.length; // Total number of images on the page
        let loadedAssets = 0;

        const updateProgress = () => {
            loadedAssets++;
            const percentage = Math.round((loadedAssets / totalAssets) * 100);
            setProgress(percentage);
        };

        const images = Array.from(document.images);
        images.forEach((img) => {
            if (img.complete) {
                updateProgress(); // If the image is already loaded
            } else {
                img.addEventListener('load', updateProgress);
                img.addEventListener('error', updateProgress); // Handle failed loads
            }
        });

        // Handle the case when all assets are fully loaded
        const handleLoad = () => {
            setProgress(100); // Ensure progress is set to 100%
            setTimeout(() => {
                console.log("visible");
                setIsVisible(false); // Hide loader after 2 seconds
            }, 20000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    if (!isVisible) {
        return null; // Do not render the loader if it's no longer visible
    }

    return (
        <>
        {!isVisible 
        ? <div>
            <div className="bg-black min-h-screen flex flex-col items-center justify-center">
                <div className="bg-black overflow-hidden text-center animation-container">
                    <Image
                        className="mx-auto"
                        src="/logo.svg"
                        alt="logo"
                        width={600}
                        height={600}
                    // style={{
                    //   maxWidth: '100%',
                    //   height: 'auto',
                    // }}
                    />
                </div>
                <div className="mt-6">
                    <Image
                        className="h-24 w-48"
                        src="/bat.gif"
                        alt="bat"
                        width={200}
                        height={100}
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end z-10 pb-10">
                    <div className="relative w-24 h-24 ">
                        <svg
                            className="text-gray-300 animate-spin"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                        >
                            <path
                                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-900"
                            ></path>
                        </svg>
                        <span className="absolute inset-0 flex justify-center items-center text-white font-bold text-lg !animate-none">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
        : <></>}
        </>
    );
};

export default Loader;
