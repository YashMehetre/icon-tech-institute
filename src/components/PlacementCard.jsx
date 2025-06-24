import React from "react";

const PlacementCard = ({ person, onClick }) => {
    return (
        <div
            className="w-full max-w-3xl bg-white text-black rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
            onClick={() => onClick(person)}
        >
            <div className="flex flex-col md:flex-row h-auto md:h-[380px]">
                <div className="md:w-2/5 h-64 md:h-auto">
                    <div className="h-full w-full overflow-hidden">
                        <img
                            src={person.img}
                            alt={person.name}
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/300x400?text=No+Image";
                            }}
                        />
                    </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div className="mb-2">
                            <svg className="h-8 w-8 text-indigo-500 mb-2" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                        </div>
                        <div className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6 line-clamp-4 md:line-clamp-5">
                            "{person.review.replace("if you want you can add this =", "")}"
                        </div>
                    </div>

                    <div className="mt-auto pt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                            {person.name}
                        </h3>
                        <p className="text-indigo-600 font-medium mt-1">
                            {person.designation}
                        </p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent card click event
                                onClick(person);
                            }}
                            className="mt-3 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center"
                        >
                            <span>Full Story</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementCard;