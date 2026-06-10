'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const pathname = usePathname();

  const innerRef = useRef(null);
  const outerRef = useRef(null);

  const isHiddenRef = useRef(true);
  const isClickedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastPosition = useRef({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      const mobile =
        window.matchMedia('(max-width: 768px)').matches ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile || !mounted) return;

    // Dynamically inject stylesheet to hide default cursor
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const updateStyles = () => {
      const { x, y } = lastPosition.current;
      const opacityVal = isHiddenRef.current ? '0' : '1';
      const scaleVal = isClickedRef.current ? 0.8 : isHoveredRef.current ? 1.3 : 1;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${x - innerSize / 2}px, ${y - innerSize / 2}px, 0)`;
        innerRef.current.style.opacity = opacityVal;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${x - outerSize / 2}px, ${y - outerSize / 2}px, 0) scale(${scaleVal})`;
        outerRef.current.style.opacity = opacityVal;
      }
    };

    const handleMouseMove = (e) => {
      if (e.clientX === undefined || e.clientY === undefined) return;
      isHiddenRef.current = false;
      lastPosition.current = { x: e.clientX, y: e.clientY };
      updateStyles();
    };

    const handleMouseDown = () => {
      isClickedRef.current = true;
      updateStyles();
    };

    const handleMouseUp = () => {
      isClickedRef.current = false;
      updateStyles();
    };

    const handleMouseLeave = () => {
      isHiddenRef.current = true;
      updateStyles();
    };

    const handleMouseEnter = () => {
      isHiddenRef.current = false;
      updateStyles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const clickables = [
      'a',
      'input:not([type="hidden"])',
      'textarea',
      'select',
      'summary',
      'label',
      'button',
      '[tabindex]',
      '[role="button"]',
      '.link',
      '.link-button',
      '.cursor-pointer'
    ];

    const onMouseOver = (e) => {
      if (e.target && e.target.closest && e.target.closest(clickables.join(','))) {
        isHoveredRef.current = true;
      } else {
        isHoveredRef.current = false;
      }
      updateStyles();
    };

    window.addEventListener('mouseover', onMouseOver);

    // Initial reset
    isHoveredRef.current = false;
    isClickedRef.current = false;
    isHiddenRef.current = true;
    updateStyles();

    return () => {
      style.remove();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isMobile, mounted, pathname]);

  if (!mounted || isMobile) {
    return null;
  }

  const innerSize = 8;
  const outerSize = 35;

  return (
    <>
      <div
        ref={outerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          borderRadius: '50%',
          backgroundColor: '#fff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(-100px, -100px, 0) scale(1)',
          transition: 'transform 0.15s ease-out, opacity 0.2s',
          transformOrigin: 'center center',
          opacity: 0,
        }}
      />
        <div
          ref={innerRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${innerSize}px`,
            height: `${innerSize}px`,
            borderRadius: '50%',
            backgroundColor: '#6a6a6aff',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate3d(-100px, -100px, 0)',
            transition: 'transform 0.08s ease-out, opacity 0.2s',
            opacity: 0,
          }}
        />
    </>
  );
}

