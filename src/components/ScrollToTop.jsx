import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 bg-indigo-600 text-white px-3 py-2 rounded-full shadow-md hover:bg-indigo-700 transition z-50"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
