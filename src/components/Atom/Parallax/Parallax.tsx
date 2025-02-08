"use client";
import { useState, useEffect, forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ParallaxProps extends HTMLAttributes<HTMLDivElement> {
  url: string;
}

export const Parallax = forwardRef<HTMLDivElement, ParallaxProps>(
  ({ className, children, url, ...props }, ref) => {
    const [offsetY, setOffsetY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      let ticking = false;
      const updateOffset = () => {
        setOffsetY(window.scrollY * 0.2);
        ticking = false;
      };

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateOffset);
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div
        className={twMerge(`relative h-[200px] bg-cover bg-center`, className)}
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: isMobile ? "center center" : `center ${offsetY * 0.2}px`,
        }}
        ref={ref}
        data-testid="parallax"
        {...props}
      >
        <div
          className={twMerge(
            `absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center`,
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

Parallax.displayName = "Parallax";
