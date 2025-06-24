import React, { useState, useEffect, useRef } from "react";
import placement from "../pages/placement";
import PlacementCard from "./PlacementCard";

const PlacementHighlights = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [swapDirection, setSwapDirection] = useState("next");
    const autoPlayRef = useRef(null);
    const totalSlides = placement.length;

    const openModal = (person) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
        setIsPaused(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPerson(null);
        document.body.style.overflow = 'auto';
        setIsPaused(false);
    };

    // Animate and swap content
    const navigate = (direction) => {
        if (isAnimating) return;
        setSwapDirection(direction);
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) => {
                if (direction === "next") return (prev + 1) % totalSlides;
                else return prev === 0 ? totalSlides - 1 : prev - 1;
            });
            setTimeout(() => setIsAnimating(false), 400); // match animation duration
        }, 100); // start fade out
    };

    // Autoplay
    useEffect(() => {
        autoPlayRef.current = () => {
            if (!isPaused) navigate("next");
        };
    }, [isPaused, totalSlides]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoPlayRef.current && !isPaused) autoPlayRef.current();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // Escape closes modal
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Click outside modal to close
    const handleModalContainerClick = (e) => {
        if (e.target.classList.contains('modal-container')) closeModal();
    };

    // Animation classes
    const animationClass = isAnimating
        ? swapDirection === "next"
            ? "animate-fade-slide-left"
            : "animate-fade-slide-right"
        : "";

    return (
        <div className="bg-gradient-to-tr from-slate-900 via-gray-900 to-slate-800 py-16 px-6">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6 text-white">
                    Placement Highlights
                </h2>
                <p className="text-2xl text-gray-400 text-center mb-4">
                    Success stories from our alumni
                </p>

                <div
                    className="relative max-w-3xl mx-auto py-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => !isModalOpen && setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => navigate('prev')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 md:-translate-x-16 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-blue-600 rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Previous testimonial"
                        disabled={isAnimating}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => navigate('next')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 md:translate-x-16 z-10 bg-white/90 hover:bg-white text-gray-700 hover:text-blue-600 rounded-full p-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Next testimonial"
                        disabled={isAnimating}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Single Card with animation */}
                    <div className={`flex justify-center items-center min-h-[420px]`}>
                        <div className={`w-full max-w-3xl ${animationClass}`}>
                            <PlacementCard person={placement[activeIndex]} onClick={openModal} />
                        </div>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {placement.map((_, index) => (
                            <button
                                key={index}
                                className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === index
                                    ? 'bg-blue-500 w-6'
                                    : 'bg-gray-400 hover:bg-gray-300'
                                    }`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Modal Component */}
                {isModalOpen && selectedPerson && (
                    <div
                        className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 p-4 modal-container"
                        onClick={handleModalContainerClick}
                    >
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="flex justify-between items-center p-6 border-b">
                                <h3 className="text-2xl font-bold text-gray-800">{selectedPerson.name}</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                    aria-label="Close"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/3">
                                        <div className="rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={selectedPerson.img}
                                                alt={selectedPerson.name}
                                                className="w-full h-auto object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                                                }}
                                            />
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-800">Current Position</h4>
                                            <p className="text-indigo-600 font-medium">{selectedPerson.designation}</p>
                                        </div>
                                    </div>

                                    <div className="md:w-2/3">
                                        <h4 className="font-semibold text-xl text-gray-800 mb-3">Success Story</h4>
                                        <div className="bg-blue-50 p-4 rounded-lg mb-6 italic">
                                            "{selectedPerson.review.replace("if you want you can add this =", "")}"
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t p-4 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlacementHighlights;

// Add these styles to your global CSS (e.g., index.css or tailwind.css):
/*
@layer utilities {
  .animate-fade-slide-left {
    animation: fade-slide-left 0.4s;
  }
  .animate-fade-slide-right {
    animation: fade-slide-right 0.4s;
  }
  @keyframes fade-slide-left {
    0% { opacity: 1; transform: translateX(0); }
    49% { opacity: 0; transform: translateX(-40px);}
    50% { opacity: 0; transform: translateX(40px);}
    100% { opacity: 1; transform: translateX(0);}
  }
  @keyframes fade-slide-right {
    0% { opacity: 1; transform: translateX(0); }
    49% { opacity: 0; transform: translateX(40px);}
    50% { opacity: 0; transform: translateX(-40px);}
    100% { opacity: 1; transform: translateX(0);}
  }
}
*/