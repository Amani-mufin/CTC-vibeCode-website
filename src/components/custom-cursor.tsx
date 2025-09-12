'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useMotionValue(-100);
  const followerY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const followerXSpring = useSpring(followerX, { ...springConfig, damping: 40, stiffness: 200 });
  const followerYSpring = useSpring(followerY, { ...springConfig, damping: 40, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, followerX, followerY]);
  
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed z-[9999] w-2 h-2 rounded-full bg-primary pointer-events-none"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -4,
          top: -4,
        }}
      />
      <motion.div
        className={cn(
          "fixed z-[9999] w-10 h-10 rounded-full border-2 border-primary/50 pointer-events-none transition-transform duration-200",
          isHovering && "scale-150 border-primary/80"
        )}
        style={{
          translateX: followerXSpring,
          translateY: followerYSpring,
          left: -20,
          top: -20,
        }}
      />
    </>
  );
}
