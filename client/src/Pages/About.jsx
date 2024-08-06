import React, { useEffect, useRef, useState } from 'react';
import gatsbyImage from '../assets/images/about/gatsby.jpeg';
import laBoumImage from '../assets/images/about/laBoum.jpeg';
import amelieImage from '../assets/images/about/amelie.png';

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const stepRefs = useRef([]);
    const graphicRefs = useRef([]);

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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            text: `When you're not sure what to watch`,
            image: laBoumImage,
        },
        {
            text: `we're here to help`,
            image: amelieImage,
        },

        {
            text: `mapping to your life's movie`,
            image: gatsbyImage,
        },
        {
            text: ``,
            image: ``,
        },
        {
            text: `Movie Map`,
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
                            className={`mb-[60vh] p-4 text-white font-bold text-2xl text-center font-black-ops-one rounded-lg shadow transition-opacity duration-500 ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <p className="whitespace-pre-line text-5xl">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
