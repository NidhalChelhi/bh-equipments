import React from 'react'
interface TestimonialCardProps {
    imageUrl: string;
    name: string;
    position: string;
    testimonial: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ imageUrl, name, position, testimonial }) => {
    return (
        <div className="max-w-[512px] bg-[#f8f9ff]  hover:bg-primary rounded-3xl flex flex-col items-start justify-center gap-4 app_transition hover:text-white py-10 px-10 text-start">
            <div className="flex items-center justify-center gap-5  ">
                <div className="w-24 h-full">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-xl m:text-2xl">
                        {name}
                    </h3>
                    <span className="sm:text-xl">
                        {position}
                    </span>
                </div>
            </div>
            <p className="font-normal text-base">
                {testimonial}
            </p>
        </div>
    )
}

export default TestimonialCard
