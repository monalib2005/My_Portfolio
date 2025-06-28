
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Book, Code, Palette, Brain, Heart, Star, Music, Award, Target,Sparkles } from 'lucide-react';

const funFacts = [
{ icon: Book, text: 'Lifelong Learner 📚', description: 'Learning never stops', color: 'from-pink-500 to-rose-600' },
  { icon: Code, text: 'Night Owl 🦉', description: 'Best code at midnight', color: 'from-purple-500 to-indigo-600' },
  { icon: Brain, text: 'Problem Solver 🧠', description: 'Love cracking logic puzzles', color: 'from-yellow-500 to-amber-600' },
  { icon: Music, text: 'Lo-Fi Coder 🎧', description: 'Best code with chill beats', color: 'from-fuchsia-500 to-pink-600' },
  { icon: Star, text: 'Quick Learner ⚡', description: 'Always curious', color: 'from-blue-500 to-cyan-600' }
];

const timeline = [
  {
    year: '2025',
    title: 'Enhancement in Various Fields 🎓',
    description: 'Deepening my skills in Data Structures, Web Development & Project Building',
    color: 'from-purple-500 to-indigo-500',
    icon: Target
  },
  {
    year: '2024',
    title: 'Explored Web Development 🌐',
    description: 'Built my first websites using HTML, CSS, JavaScript — and loved it!',
    color: 'from-blue-500 to-cyan-400',
    icon: Code
  },
  {
    year: '2023',
    title: 'Fell in Love with Programming 💻',
    description: 'Started learning C++ and problem-solving, laying the foundation for dev journey',
    color: 'from-cyan-500 to-teal-500',
    icon: Sparkles
  },
  {
    year: '2023',
    title: 'Started Engineering at PICT 🏫',
    description: 'Began my journey in Computer Engineering with a strong curiosity in coding',
    color: 'from-indigo-500 to-blue-500',
    icon: Book
  }
];

export const AboutSection = () => {
  const [selectedFact, setSelectedFact] = useState(0);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid-3d lg:grid-cols-2 gap-12 items-start">
          {/* Left side - About content */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="glass-card-dark hover-glow border-0 card-3d">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl card-3d">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">My Story</h3>
                </div>
                <div className="space-y-4 text-blue-100 leading-relaxed">
                  <p>
                    I'm a second-year Computer Engineering student at PICT, passionate about turning ideas into impactful digital experiences. My journey began with curiosity about how technology works, which soon turned into a deep interest in coding and problem-solving.
                    What started with writing simple programs has evolved into a strong command over full-stack web development. I enjoy designing clean, responsive user interfaces and developing robust backend systems. From frontend technologies like React and Tailwind CSS to backend tools like Node.js and MongoDB, I love building complete, end-to-end solutions.
                  </p>
                  <p>
                Outside of projects and academics, I’m always exploring new technologies, contributing to open-source communities, or helping peers by sharing what I learn. I believe in writing clean, maintainable code and creating products that are not only functional but also user-friendly and performance-driven.
                 As I continue to grow, I'm excited to collaborate, innovate, and contribute to real-world projects that make a <span className="text-gradient font-semibold">meaningful difference.</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts with structured layout */}
            <Card className="glass-card-dark hover-glow border-0 card-3d">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Know Me in 10 Seconds</h3>
                <div className="grid grid-cols-1 gap-4">
                  {funFacts.map((fact, index) => {
                    const Icon = fact.icon;
                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 card-3d ${
                          selectedFact === index 
                            ? 'glass-card-dark scale-105 border border-blue-400' 
                            : 'glass-card hover:glass-card-dark'
                        }`}
                        onClick={() => setSelectedFact(index)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${fact.color} card-3d`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold text-lg">{fact.text}</p>
                            <p className="text-blue-300">{fact.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Structured Timeline */}
          <div className="animate-slide-in-right">
            <Card className="glass-card-dark hover-glow border-0 card-3d">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-10 text-center">My Journey</h3>
                <div className="relative">
                  {/* Enhanced timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"></div>
                  
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="relative flex items-start gap-8 mb-12 last:mb-0">
                        {/* Enhanced timeline dot */}
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 z-10 card-3d shadow-lg`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        
                        {/* Enhanced content */}
                        <div className="flex-1 glass-card hover-glow p-6 rounded-2xl card-3d">
                          <Badge className={`mb-3 bg-gradient-to-r ${item.color} text-white border-0 px-4 py-1 text-sm font-semibold`}>
                            {item.year}
                          </Badge>
                          <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                          <p className="text-blue-200 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
