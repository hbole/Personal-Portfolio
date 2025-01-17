import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false; // Default value for SSR
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Initial match
    setMatches(mediaQueryList.matches);

    // Listen for changes
    mediaQueryList.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
