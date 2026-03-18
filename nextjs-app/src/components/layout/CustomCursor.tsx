'use client';

import React, { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, .work-card, .skill-chip, .feat-card';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number | null = null;
    let isHovering = false;

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }

      // Stop animating once the ring has caught up
      const dx = mx - rx;
      const dy = my - ry;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        animId = null;
        return;
      }

      animId = requestAnimationFrame(animRing);
    };

    const startAnim = () => {
      if (animId === null) {
        animId = requestAnimationFrame(animRing);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px)${isHovering ? ' scale(1.5)' : ''}`;
      }
      startAnim();
    };

    // Use event delegation — works for dynamically added elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(INTERACTIVE_SELECTOR)) {
        isHovering = true;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${mx - 5}px, ${my - 5}px) scale(1.5)`;
        }
        if (ringRef.current) {
          ringRef.current.style.width = '54px';
          ringRef.current.style.height = '54px';
          ringRef.current.style.marginLeft = '-9px';
          ringRef.current.style.marginTop = '-9px';
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(INTERACTIVE_SELECTOR)) {
        isHovering = false;
        if (ringRef.current) {
          ringRef.current.style.width = '36px';
          ringRef.current.style.height = '36px';
          ringRef.current.style.marginLeft = '0';
          ringRef.current.style.marginTop = '0';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
