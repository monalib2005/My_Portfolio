
import React from 'react';

const shapes = [
  { size: 'w-16 h-16', position: 'top-20 left-10', delay: '0s', duration: '10s', shape: 'cube' },
  { size: 'w-24 h-24', position: 'top-40 right-20', delay: '2s', duration: '12s', shape: 'pyramid' },
  { size: 'w-20 h-20', position: 'top-1/2 left-1/4', delay: '4s', duration: '11s', shape: 'sphere' },
  { size: 'w-12 h-12', position: 'bottom-40 right-1/4', delay: '1s', duration: '14s', shape: 'cube' },
  { size: 'w-28 h-28', position: 'bottom-20 left-1/3', delay: '3s', duration: '9s', shape: 'octagon' },
  { size: 'w-14 h-14', position: 'top-1/3 right-1/3', delay: '5s', duration: '13s', shape: 'diamond' }
];

const getShapeStyles = (shape: string) => {
  switch (shape) {
    case 'cube':
      return 'rounded-lg';
    case 'pyramid':
      return 'rounded-sm transform rotate-45';
    case 'sphere':
      return 'rounded-full';
    case 'octagon':
      return 'rounded-2xl transform rotate-12';
    case 'diamond':
      return 'rounded-md transform rotate-45';
    default:
      return 'rounded-full';
  }
};

const getShapeGradient = (index: number) => {
  const gradients = [
    'bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400',
    'bg-gradient-to-br from-slate-800 via-blue-600 to-blue-400',
    'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
    'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600',
    'bg-gradient-to-br from-slate-700 via-blue-500 to-cyan-400',
    'bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-500'
  ];
  return gradients[index % gradients.length];
};

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden perspective-1000">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape card-3d ${shape.size} ${shape.position} ${getShapeStyles(shape.shape)} ${getShapeGradient(index)} opacity-30 animate-float-3d`}
          style={{
            animationDelay: shape.delay,
            animationDuration: shape.duration,
            filter: 'blur(0.5px) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        />
      ))}
      
      {/* Structured geometric patterns */}
      <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg animate-spin-3d opacity-40 card-3d" 
           style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }} />
      
      <div className="absolute bottom-1/3 right-1/2 w-12 h-12 bg-gradient-to-r from-slate-700 to-blue-500 rounded-full animate-pulse-3d opacity-35 card-3d"
           style={{ boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)' }} />
      
      <div className="absolute top-2/3 left-1/5 w-6 h-24 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full animate-wiggle-3d opacity-30 card-3d"
           style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }} />
      
      {/* Additional structured 3D shapes */}
      <div className="absolute top-1/3 left-3/4 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl animate-float-3d opacity-35 card-3d" 
           style={{ animationDelay: '6s', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }} />
      
      <div className="absolute bottom-1/4 left-1/2 w-18 h-18 bg-gradient-to-br from-slate-800 to-blue-500 rounded-2xl animate-spin-3d opacity-30 card-3d" 
           style={{ animationDelay: '8s', boxShadow: '0 12px 35px rgba(59, 130, 246, 0.25)' }} />
      
      <div className="absolute top-1/6 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 transform rotate-45 animate-pulse-3d opacity-40 card-3d" 
           style={{ animationDelay: '4s', boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)' }} />

      {/* Structured particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float-3d"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
            }}
          />
        ))}
      </div>
    </div>
  );
};
