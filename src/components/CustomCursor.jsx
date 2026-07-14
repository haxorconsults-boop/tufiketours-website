import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    
    if (!cursor || !ring) return;

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    };

    const attachHoverEffects = () => {
      document.querySelectorAll('a, button, .hover-target').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const handleMouseEnter = () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.opacity = '.4';
    };

    const handleMouseLeave = () => {
      cursor.style.width = '14px';
      cursor.style.height = '14px';
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.opacity = '.7';
    };

    // Attach listeners
    document.addEventListener('mousemove', onMouseMove);
    
    // Set up a mutation observer to attach hover effects to dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, .hover-target').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial attachment
    attachHoverEffects();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;

