import React from "react";
interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  testimonial: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  testimonial,
}) => {
  return (
    <div className="group bg-[#f8f9ff]  hover:bg-primary rounded-3xl flex flex-col items-start justify-center gap-4 app_transition hover:text-white py-10 px-10 text-start">
      <div className="flex items-center justify-center gap-5  ">
        <div className="h-32 rounded-2xl group-hover:bg-[#f8f9ff] p-4 ">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full rounded object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold text-xl m:text-2xl">{name}</h3>
        </div>
      </div>
      <p className="font-normal text-base">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
