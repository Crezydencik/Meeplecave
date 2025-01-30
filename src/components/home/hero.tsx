'use client'; 
import Image from 'next/image'; // Импортируем Image компонент для Next.js

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Текстовая часть */}
        <div className="text-container lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">EACH GAME - A NEW ADVENTURE</h1>
          <p className="text-base md:text-lg">
            Dive into a world where each game opens a door to a new reality, full of mysteries, strategies, and magical moments of meeting like-minded individuals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full">
            MORE
          </button>
        </div>

        {/* Изображение */}
        <div className="image-container lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/mainboard.png" // Замените на ваш путь изображения
            alt="Board Game"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-xl w-full max-w-sm mx-auto lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
