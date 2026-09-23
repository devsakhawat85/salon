import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if user is on a touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check what is under the cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTrigger = target.closest('[data-cursor="view"]');
      if (viewTrigger) {
        setCursorText('VIEW');
        setIsHovered(true);
        setIsPointer(false);
        return;
      }

      const dragTrigger = target.closest('[data-cursor="drag"]');
      if (dragTrigger) {
        setCursorText('DRAG');
        setIsHovered(true);
        setIsPointer(false);
        return;
      }

      const interactive = target.closest('button, a, input, select, textarea');
      if (interactive) {
        setCursorText('');
        setIsHovered(false);
        setIsPointer(true);
        return;
      }

      setCursorText('');
      setIsHovered(false);
      setIsPointer(false);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {isHovered && cursorText ? (
        <div className="flex items-center justify-center rounded-full bg-[#faf8f5] px-4 py-2 text-[10px] font-semibold tracking-widest text-[#0a0a0c] shadow-2xl backdrop-blur-md">
          {cursorText}
        </div>
      ) : isPointer ? (
        <div className="h-9 w-9 rounded-full border border-[#c5a880]/80 bg-[#c5a880]/10 transition-all duration-200" />
      ) : (
        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#faf8f5]/80 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
      )}
    </div>
  );
};
