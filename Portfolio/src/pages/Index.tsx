
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Database,
  Globe,
  Smartphone,
  Coffee,
  User,
  Briefcase,
  Star,
  Download,
  ArrowRight,
  Zap,
  Heart
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingShapes } from '@/components/FloatingShapes';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden perspective-1000">
      <FloatingShapes />
      <Navigation currentSection={currentSection} />
      
      <div className="relative z-10 preserve-3d">
        <HeroSection />
        
        {/* Structured section divider */}
        <div className="section-divider"></div>
        
        <AboutSection />
        
        <div className="section-divider"></div>
        
        <ProjectsSection />
        
        <div className="section-divider"></div>
        
        <SkillsSection />
        
        <div className="section-divider"></div>
        
        <ContactSection />
      </div>

      {/* Enhanced structured footer */}
      <footer className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card-dark card-3d hover-glow rounded-3xl p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left: Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gradient mb-2">Your Portfolio</h3>
                <p className="text-blue-200">Building the future, one line at a time</p>
              </div>
              
              {/* Center: Built with love */}
              <div className="flex items-center justify-center gap-3 text-blue-100">
                <Heart className="h-5 w-5 text-red-400 animate-pulse-3d" />
                <span className="font-medium">Built with passion using React & Tailwind CSS</span>
                <Heart className="h-5 w-5 text-red-400 animate-pulse-3d" />
              </div>
              
              {/* Right: Copyright */}
              <div className="text-center md:text-right">
                <p className="text-blue-300 font-medium">© 2024 Your Portfolio</p>
                <p className="text-blue-400 text-sm">All rights reserved.</p>
              </div>
            </div>
            
            {/* Bottom decorative line */}
            <div className="mt-8 pt-6 border-t border-blue-400/20">
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
