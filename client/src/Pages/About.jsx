import React, { useEffect, useRef, useState } from 'react';
import gatsbyImage from '../assets/images/about/gatsby.jpeg';
import laBoumImage from '../assets/images/about/laBoum.jpeg';
import amelieImage from '../assets/images/about/amelie.png';

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const stepRefs = useRef([]);
    const graphicRefs = useRef([]);
    const autoScrollIntervalRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            for (let i = currentIndex - 1; i < currentIndex + 2; i++) {
                const step = stepRefs.current[i];
                if (!step) continue;
                const rect = step.getBoundingClientRect();
                if (rect.top > window.innerHeight * 0.1 && rect.top < window.innerHeight * 0.8) {
                    setCurrentIndex(i);
                    break;
                }
            }

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setIsAutoScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsAutoScrolling(true);
    }, []);

    useEffect(() => {
        if (isAutoScrolling) {
            autoScrollIntervalRef.current = setInterval(() => {
                window.scrollBy(0, 2);
            }, 15);
        } else {
            clearInterval(autoScrollIntervalRef.current);
        }

        return () => clearInterval(autoScrollIntervalRef.current);
    }, [isAutoScrolling]);

    const steps = [
        {
            text: `The MovieMap app is a great way to find an interesting film that's perfect for you.`,
            image: laBoumImage,
        },
        {
            text: `With MoviMap, you'll always be in the know about the latest cinema news`,
            image: amelieImage,
        },
        {
            text: `you’ll be ready for future premieres, and you’ll get personal recommendations from our powerful AI`,
            image: gatsbyImage,
        },
        {
            text: `Your waiting lists and viewing history will always be available, up-to-date, and ready to use!`,
            image: laBoumImage,
        },
        {
            text: `Movie Map By \n Jang, Vladimir, Nikolay`,
            image: ``,
        },
        {
            text: `Enjoy your movie experience with MovieMap!`,
        },
    ];

    return (
        <div className="font-sans">
            <section className="relative">
                <div className="sticky top-0 h-screen overflow-hidden">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={el => (graphicRefs.current[index] = el)}
                            className={`absolute inset-0 flex top-1/4 justify-center transition-opacity duration-500 ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {step.image && (
                                <img src={step.image} alt="movie image" className=" w-[80%] h-1/3 object-contain" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={el => (stepRefs.current[index] = el)}
                            className={`mb-[60vh] p-4 text-main-text font-bold text-2xl text-center rounded-lg shadow transition-opacity duration-500 ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <p className=" px-2 text-lg">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
