
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowRight, Zap, Code } from 'lucide-react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Code Enthusiast'];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < role.length) {
        const timer = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 1500);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 perspective-1000 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in preserve-3d">
          {/* Enhanced Profile Section with structured 3D */}
          <div className="mb-12 relative perspective-1000">
            <div className="glass-card-dark card-3d hover-glow w-40 h-40 mx-auto rounded-3xl p-2 mb-6">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl animate-wiggle-3d z-10">👨‍💻</div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/20 to-transparent animate-pulse-3d"></div>
              </div>
            </div>
            
            {/* Status indicators */}
            <div className="absolute -top-4 -right-4 flex gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-glow card-3d">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center animate-spin-3d card-3d">
                <Code className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Structured Name and Title */}
          <div className="mb-8 space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 card-3d tracking-tight">
              Hi, I'm <span className="text-gradient">Monali Bhoyar</span>
            </h1>
            
            <div className="glass-card-dark card-3d hover-glow rounded-2xl p-6 mx-auto max-w-2xl">
              <div className="h-12 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl text-blue-200 font-medium">
                  I'm a{' '}
                  <span className="text-gradient font-bold text-3xl md:text-4xl">
                    {displayText}
                    <span className="animate-blink text-blue-400">|</span>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Structured description */}
          <div className="glass-card card-3d hover-glow rounded-xl p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-blue-100 leading-relaxed">
              Passionate about creating beautiful, functional, and user-friendly digital experiences.
              Let's build something <span className="text-gradient font-semibold">amazing</span> together!
            </p>
          </div>

          {/* Enhanced structured action buttons */}
          <div className="grid sm:grid-cols-2 gap-6 justify-center mb-16 max-w-lg mx-auto">
            <Button 
              size="lg" 
              className="glass-card-dark btn-3d hover-glow border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 h-14 text-lg font-semibold"
            >
              <Mail className="mr-3 h-6 w-6 icon-3d" />
              Get In Touch
              <ArrowRight className="ml-3 h-6 w-6 icon-3d" />
            </Button>
            <Button 
              size="lg" 
              className="glass-card btn-3d hover-glow border-blue-400 text-blue-100 hover:bg-blue-600/20 h-14 text-lg font-semibold"
              variant="outline"
            >
             <a
                href="/Monali_Bhoyar_CV.pdf"
                download
                className="w-full glass-card border-0 bg-white/20 hover:bg-white/30 text-white justify-start flex items-center px-4 py-2 rounded-md transition-all duration-300"
              >
                <Download className="mr-3 h-5 w-5 text-green-400" />
                Download my CV
              </a>
            </Button>
          </div>

          {/* Structured Social Links */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/monalib2005', color: 'from-slate-600 to-slate-800' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/monali-bhoyar-a02007299/', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, label: 'Email', href: 'monalib909@gmail.com', color: 'from-cyan-500 to-blue-600' }
            ].map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                className={`glass-card-dark card-3d hover-glow p-4 rounded-2xl transition-all duration-300 group bg-gradient-to-br ${color}`}
                aria-label={label}
              >
                <Icon className="h-7 w-7 text-white icon-3d group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Structured skills preview */}
          <div className="glass-card card-3d hover-glow rounded-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Design'].map((skill, index) => (
                <div key={skill} className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-blue-${500 + index * 100} to-cyan-400 flex items-center justify-center card-3d`}>
                    <span className="text-white font-bold">{skill[0]}</span>
                  </div>
                  <span className="text-blue-200 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced structured scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="glass-card-dark card-3d hover-glow p-4 rounded-full animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-pulse-3d"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
