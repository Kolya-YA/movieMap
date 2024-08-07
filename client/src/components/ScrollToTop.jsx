import { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="
                        fixed bottom-5 right-5 p-2 text-main-text bg-black/70
                        shadow-lg rounded-md border border-white border-opacity-70 
                        transition-colors hover:bg-black "
                    aria-label="Scroll to top"
                >
                    <LuArrowUp size={24} aria-hidden />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;