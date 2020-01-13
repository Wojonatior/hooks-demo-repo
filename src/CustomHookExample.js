
import React, { useState, useEffect } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setWidthFromEvent = () => { setWidth(window.innerWidth) };
    window.addEventListener('resize', setWidthFromEvent);
    return () => {
      window.removeEventListener('resize', setWidthFromEvent);
    }
  }, []);

  return width;
}

function CleanupExample() {
  const width = useWidth();

  return (
    <div>
      <p>The browser is {width}px wide</p>
    </div>
  );
}

export default CleanupExample;
