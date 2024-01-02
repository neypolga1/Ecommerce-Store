import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NikeImg5 from '../img/pngwing4.png'

export const Shuffle = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div>
            <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
              Better every day
            </span>
            <h3 className="text-4xl md:text-6xl font-semibold">
              Discover Your Truly Desire
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
              error repellat voluptatibus ad.
            </p>
            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
              Find Your Desire
            </button>
          </div>
          <ShuffleGrid />
        </section>
      );
    };
    
    const shuffle = (array) => {
      let currentIndex = array.length,
        randomIndex;
    
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
    
      return array;
    };
    
    const squareData = [
      {
        id: 1,
        src: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      },
      {
        id: 2,
        src: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: 3,
        src:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      },
      {
        id: 4,
        src: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      },
      {
        id: 5,
        src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 6,
        src: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      },
      {
        id: 7,
        src: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 9,
        src: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 10,
        src: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 11,
        src: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 12,
        src: "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 13,
        src: "https://images.unsplash.com/photo-1611331827787-109e62126722?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 14,
        src: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 15,
        src: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 16,
        src: "https://images.unsplash.com/photo-1616410072514-e92114cf1a88?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    
    const generateSquares = () => {
      return shuffle(squareData).map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
          }}
        ></motion.div>
      ));
    };
    
    const ShuffleGrid = () => {
      const timeoutRef = useRef(null);
      const [squares, setSquares] = useState(generateSquares());
    
      useEffect(() => {
        shuffleSquares();
    
        return () => clearTimeout(timeoutRef.current);
      }, []);
    
      const shuffleSquares = () => {
        setSquares(generateSquares());
    
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
      };
    
      return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
          {squares.map((sq) => sq)}
        </div>
      );
}
