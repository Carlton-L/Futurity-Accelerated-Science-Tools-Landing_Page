import React, { useEffect, useRef } from 'react';
import './index.css';

const CubeGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const idleAnimationRef = useRef<number | null>(null);
  const isMouseInsideRef = useRef(false);
  const activeSpansRef = useRef<Set<HTMLElement>>(new Set());
  const lastInteractionRef = useRef<number>(Date.now());
  const inactivityTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const activeSpansSet = activeSpansRef.current;

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

        for (let x = -10; x <= 10; x++) {
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
      addMouseEvents();
      startIdleAnimation();
    };

    const updateLastInteraction = () => {
      lastInteractionRef.current = Date.now();

      // Clear inactivity timeout and restart it
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }

      // Set timeout to detect inactivity (500ms after last interaction)
      inactivityTimeoutRef.current = setTimeout(() => {
        isMouseInsideRef.current = false;
        // Clear any manually activated spans after inactivity
        activeSpansRef.current.forEach((span) => {
          span.classList.remove('active');
        });
        activeSpansRef.current.clear();
        startIdleAnimation();
      }, 500);
    };

    const addMouseEvents = () => {
      const container = containerRef.current;
      if (!container) return;

      const spans = document.querySelectorAll(
        '.cube span'
      ) as NodeListOf<HTMLSpanElement>;

      // Container mouse/touch interaction detection
      container.addEventListener('mouseenter', () => {
        isMouseInsideRef.current = true;
        stopIdleAnimation();
        updateLastInteraction();
      });

      container.addEventListener('mousemove', () => {
        if (!isMouseInsideRef.current) {
          isMouseInsideRef.current = true;
          stopIdleAnimation();
        }
        updateLastInteraction();
      });

      container.addEventListener('mouseleave', () => {
        isMouseInsideRef.current = false;
        // Clear any manually activated spans when mouse leaves
        activeSpansRef.current.forEach((span) => {
          span.classList.remove('active');
        });
        activeSpansRef.current.clear();
        startIdleAnimation();
      });

      // Individual span hover events
      spans.forEach((span) => {
        span.addEventListener('mouseenter', () => {
          updateLastInteraction();
          if (isMouseInsideRef.current) {
            span.classList.add('active');
            activeSpansRef.current.add(span);
          }
        });

        span.addEventListener('mouseleave', () => {
          updateLastInteraction();
          if (isMouseInsideRef.current) {
            span.classList.remove('active');
            activeSpansRef.current.delete(span);
          }
        });
      });
    };

    const startIdleAnimation = () => {
      const runIdleAnimation = () => {
        // Only run if mouse is not inside the component
        if (!isMouseInsideRef.current) {
          const spans = document.querySelectorAll(
            '.cube span'
          ) as NodeListOf<HTMLSpanElement>;

          if (spans.length > 0) {
            // Get visible spans (within reasonable viewport bounds)
            const visibleSpans = Array.from(spans).filter((span) => {
              const rect = span.getBoundingClientRect();
              return (
                rect.top < window.innerHeight &&
                rect.bottom > 0 &&
                rect.left < window.innerWidth &&
                rect.right > 0
              );
            });

            // If no visible spans, fall back to all spans
            const spansToUse =
              visibleSpans.length > 0 ? visibleSpans : Array.from(spans);

            // Pick 2-3 random spans
            const numCubes = Math.floor(Math.random() * 2) + 2; // 2 or 3 cubes
            const selectedSpans: HTMLElement[] = [];

            for (let i = 0; i < numCubes && i < spansToUse.length; i++) {
              let randomSpan;
              do {
                const randomIndex = Math.floor(
                  Math.random() * spansToUse.length
                );
                randomSpan = spansToUse[randomIndex];
              } while (
                selectedSpans.includes(randomSpan) &&
                selectedSpans.length < spansToUse.length
              );

              if (!selectedSpans.includes(randomSpan)) {
                selectedSpans.push(randomSpan);
              }
            }

            // Activate spans with staggered timing
            selectedSpans.forEach((span, index) => {
              setTimeout(() => {
                span.classList.add('active');

                // Deactivate after 2 seconds
                setTimeout(() => {
                  span.classList.remove('active');
                }, 2000);
              }, index * 150); // 150ms stagger between each cube
            });
          }
        }

        // Schedule next animation
        idleAnimationRef.current = setTimeout(runIdleAnimation, 1000);
      };

      // Start the animation
      idleAnimationRef.current = setTimeout(runIdleAnimation, 1000);
    };

    const stopIdleAnimation = () => {
      if (idleAnimationRef.current) {
        clearTimeout(idleAnimationRef.current);
        idleAnimationRef.current = null;
      }
    };

    cubes();

    // Cleanup on component unmount
    return () => {
      stopIdleAnimation();
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      activeSpansSet.clear();
    };
  }, []); // Empty dependency array means this runs once on mount

  return <div ref={containerRef} className='container'></div>;
};

export default CubeGrid;
