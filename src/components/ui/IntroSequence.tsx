import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const totalFrames = 265;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    
    // We preload all frames before starting
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Format number to 5 digits e.g. 00001
      const frameNumber = i.toString().padStart(5, '0');
      img.src = `/frames/frame_${frameNumber}.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };
      // If error occurs, count it as loaded to not block forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  // Play sequence once loaded
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window initially
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    let currentFrame = 0;
    let animationFrameId: number;
    let lastTime = performance.now();
    const fps = 30;
    const frameInterval = 1000 / fps;
    
    const drawImageContain = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
      // Calculate aspect ratios
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;
      
      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;
      
      if (imgRatio > canvasRatio) {
        // Image is wider than canvas, constrain by width
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        // Image is taller than canvas, constrain by height
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      }
      
      ctx.fillStyle = '#020202';
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };
    
    const render = (time: number) => {
      if (currentFrame >= totalFrames) {
        // Sequence finished
        setIsFinished(true);
        setTimeout(() => onComplete(), 800); // Wait for fade out
        return;
      }
      
      const elapsed = time - lastTime;
      
      if (elapsed > frameInterval) {
        lastTime = time - (elapsed % frameInterval);
        
        const img = imagesRef.current[currentFrame];
        if (img && img.complete && img.naturalWidth !== 0) {
          drawImageContain(ctx, img, canvas.width, canvas.height);
        }
        
        currentFrame++;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    animationFrameId = requestAnimationFrame(render);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#020202] flex items-center justify-center"
        >
          {/* Loading Indicator */}
          {!isLoaded && (
            <div className="absolute flex flex-col items-center gap-4">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-8 h-8 border-2 border-white/20 border-t-accent rounded-full"
              />
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Loading Experience</span>
            </div>
          )}
          
          <canvas
            ref={canvasRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
