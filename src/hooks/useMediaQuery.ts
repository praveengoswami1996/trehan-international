import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set initial width
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return width;
};

export default useMediaQuery;