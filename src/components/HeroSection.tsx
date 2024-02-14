import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-hero bg-cover flex items-center justify-center">
            <div className=" flex flex-col items-center justify-center gap-4">
                <h1 className="text-white text-6xl font-bold text-center uppercase">
                    Durand
                </h1>
                <p className="text-white text-lg font-regular text-center">
                    We know how large objects will act, but things on a<br />
                    small scale just do not act that way.
                </p>
                <button className="bg-secondary text-white font-medium px-6 py-3 rounded-xl hover:scale-105 app_transition">
                    Discover Our Products
                </button>
            </div>

        </section>
    )
}

export default HeroSection
