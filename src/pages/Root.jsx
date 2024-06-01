import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { AuthContext } from '../Auth/ContextProvider';
import { motion, AnimatePresence } from 'framer-motion';

function Root() {
  const { dark } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const letterAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-black'>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="loader z-50 w-full h-screen flex items-center justify-center bg-[#171212] overflow-hidden text-white"
            initial={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            animate={{ opacity: 1 }}
            exit={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)', transition: { duration: 0.8 } ,delay:0.5}}
          >
            <div className='overflow-hidden bg-[#171212]'>
              <motion.h1 className='text inline-block overflow-hidden'
                  initial={{y:0}}
                  animate={{y:-100}}
                  transition={{ duration: 0.5, ease: "easeInOut" ,delay:2}}
              >
                {Array.from("Skillify").map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className="inline-block text-[#F56B13] text-2xl font-semibold"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }} 
          className={`main ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}
        >
          <Nav />
          <div className={`min-h-screen ${dark ? 'bg-[#212121] text-white' : 'bg-[#f2f2f2] text-black'}`}>
            <Outlet />
          </div>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default Root;
