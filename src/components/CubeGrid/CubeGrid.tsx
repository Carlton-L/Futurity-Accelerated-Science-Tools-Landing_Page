import React, { useEffect, useRef } from 'react';
import './index.css';

const CubeGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cubes = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing content
      container.innerHTML = '';

      const zValues = [
        -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10,
      ];

      zValues.forEach((z) => {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.setProperty('--z', z.toString());

        for (let x = -100; x <= 100; x++) {
          const div = document.createElement('div');
          div.style.setProperty('--x', x.toString());
          div.style.setProperty('--y', '0');
          const span = document.createElement('span');
          span.style.setProperty('--i', '2');
          div.appendChild(span);
          cube.appendChild(div);
        }
        container.appendChild(cube);
      });
      addHoverEvent();
    };

    const addHoverEvent = () => {
      const spans = document.querySelectorAll(
        '.cube span'
      ) as NodeListOf<HTMLSpanElement>;
      let currentTouchTarget: HTMLElement | null = null;
      let isTouch = false;

      spans.forEach((span) => {
        // Mouse events (for desktop)
        span.addEventListener('mouseenter', () => {
          if (!isTouch) {
            span.classList.add('active');
          }
        });

        span.addEventListener('mouseleave', () => {
          if (!isTouch) {
            span.classList.remove('active');
          }
        });

        // Touch events (for mobile) - using passive: false to allow preventDefault
        span.addEventListener(
          'touchstart',
          (e) => {
            isTouch = true;
            e.preventDefault();
            e.stopPropagation();
            span.classList.add('active');
            currentTouchTarget = span;
          },
          { passive: false }
        );

        span.addEventListener(
          'touchend',
          (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Delay removal to allow for smooth transitions
            setTimeout(() => {
              span.classList.remove('active');
            }, 100);
            currentTouchTarget = null;
          },
          { passive: false }
        );

        span.addEventListener(
          'touchcancel',
          (e) => {
            e.preventDefault();
            e.stopPropagation();
            span.classList.remove('active');
            currentTouchTarget = null;
          },
          { passive: false }
        );
      });

      // Handle touch move for drag-to-activate behavior
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          isTouch = true;
          e.preventDefault();

          const touch = e.touches[0];
          const element = document.elementFromPoint(
            touch.clientX,
            touch.clientY
          );

          // Try to find the span element more reliably
          let touchedSpan: HTMLElement | null = null;
          if (element) {
            // Check if element is a span or find closest span
            if (element.tagName === 'SPAN' && element.closest('.cube')) {
              touchedSpan = element as HTMLElement;
            } else {
              touchedSpan =
                element.querySelector('span') || element.closest('span');
              // If still not found, check parent elements
              if (!touchedSpan) {
                let parent = element.parentElement;
                while (parent && !touchedSpan) {
                  touchedSpan = parent.querySelector('span');
                  if (
                    !touchedSpan &&
                    parent.tagName === 'SPAN' &&
                    parent.closest('.cube')
                  ) {
                    touchedSpan = parent;
                  }
                  parent = parent.parentElement;
                }
              }
            }
          }

          if (touchedSpan && touchedSpan !== currentTouchTarget) {
            // Remove active from previous target
            if (currentTouchTarget) {
              currentTouchTarget.classList.remove('active');
            }
            // Add active to new target
            touchedSpan.classList.add('active');
            currentTouchTarget = touchedSpan;
          }
        }
      };

      // Clean up on touch end
      const handleTouchEnd = (e: TouchEvent) => {
        e.preventDefault();
        setTimeout(() => {
          if (currentTouchTarget) {
            currentTouchTarget.classList.remove('active');
            currentTouchTarget = null;
          }
          // Reset touch flag after a delay
          setTimeout(() => {
            isTouch = false;
          }, 500);
        }, 100);
      };

      // Reset touch flag on mouse events
      const handleMouseMove = () => {
        isTouch = false;
      };

      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
      document.addEventListener('mousemove', handleMouseMove);

      // Cleanup function to remove event listeners
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    };

    cubes();
    const cleanup = addHoverEvent();

    // Cleanup on component unmount
    return cleanup;
  }, []); // Empty dependency array means this runs once on mount

  return <div ref={containerRef} className='container'></div>;
};

export default CubeGrid;
