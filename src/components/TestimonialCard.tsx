import React from 'react'

const TestimonialCard = () => {
    return (
        <div className="max-w-[512px] bg-[#f8f9ff]  hover:bg-primary rounded-3xl flex flex-col items-start justify-center gap-4 app_transition hover:text-white py-10 px-10 text-start">
            <div className="flex items-center justify-center gap-5  ">
                <div className="w-24 h-full">
                    <img src="avatar.png" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-2xl">Amelia Joseph</h3>
                    <span className="text-xl">Chief Manager</span>
                </div>
            </div>
            <p className="font-normal text-base">
                My vision came alive effortlessly. Their blend of casual and
                professional approach made the process a breeze. Creativity
                flowed, and the results were beyond my expectations.
            </p>
        </div>
    )
}

export default TestimonialCard
