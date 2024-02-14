import Image from 'next/image'
import React from 'react'
interface DescriptionCardProps {
    imageUrl: string;
    title: string;
    description: string;
}
const DescriptionCard: React.FC<DescriptionCardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col text-center lg:text-start lg:flex-row items-center justify-center gap-8">
            <div className="min-w-16 min-h-16 md:min-w-24 md:min-h-24 rounded-2xl bg-primary flex items-center justify-center p-4 ">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={46}
                    height={46}
                />
            </div>
            <div className="flex flex-col lg:items-start lg:justify-start gap-3">
                <h3 className="font-medium text-3xl">{title}</h3>
                <p className="text-grey w-96 px-8 lg:px-0">{description}</p>
            </div>
        </div>
    )
}

export default DescriptionCard
