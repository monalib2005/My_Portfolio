import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Server, Database, Smartphone, Star, Zap } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'C', confidence: 75, learningDuration: '1 year' },
      { name: 'C++', confidence: 90, learningDuration: '2 years' },
      { name: 'Java', confidence: 70, learningDuration: '1 year' },
      { name: 'Python', confidence: 80, learningDuration: '1.5 years' },
      { name: 'JavaScript', confidence: 85, learningDuration: '2 years' }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: [
      { name: 'React.js', confidence: 90, learningDuration: '1.5 years' },
      { name: 'Express.js', confidence: 80, learningDuration: '1.5 years' },
      { name: 'Node.js', confidence: 85, learningDuration: '2 years' },
      { name: 'Bootstrap', confidence: 70, learningDuration: '1 year' },
      { name: 'Tailwind CSS', confidence: 95, learningDuration: '1.5 years' },
      { name: 'Pandas', confidence: 75, learningDuration: '6 months' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', confidence: 85, learningDuration: '1.5 years' },
      { name: 'SQL', confidence: 80, learningDuration: '1 year' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Smartphone,
    skills: [
      { name: 'GitHub', confidence: 90, learningDuration: '2 years' },
      { name: 'Visual Studio Code', confidence: 95, learningDuration: '2 years' },
      { name: 'Figma', confidence: 80, learningDuration: '1 year' }
    ]
  },
  {
    id: 'concepts',
    title: 'Programming Concepts',
    icon: Star,
    skills: [
      { name: 'Object-Oriented Programming (OOP)', confidence: 90, learningDuration: '2 years' },
      { name: 'Data Structures', confidence: 85, learningDuration: '2 years' },
      { name: 'Algorithms', confidence: 80, learningDuration: '2 years' }
    ]
  }
];

const learningNext = [
  { name: 'Vue.js', reason: 'Frontend diversity' },
  { name: 'Rust', reason: 'Performance optimization' },
  { name: 'Three.js', reason: '3D web experiences' },
  { name: 'Machine Learning', reason: 'AI integration' }
];

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('languages');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const currentCategory = skillCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Technologies I enjoy learning and applying in academic, personal, and team projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selection */}
          <div className="space-y-4 animate-slide-in-left">
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className={`glass-card hover-glow border-0 cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.id ? 'bg-white/20 scale-105' : 'bg-white/10'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{category.title}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Learning Next */}
            <Card className="glass-card border-0 mt-8">
              <CardContent className="p-4">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  Learning Next
                </h4>
                <div className="space-y-2">
                  {learningNext.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-white/80">{item.name}</span>
                      <span className="text-white/60 text-xs">{item.reason}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="glass-card hover-glow border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg">
                    <currentCategory.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{currentCategory.title}</h3>
                </div>

                <div className="space-y-6">
                  {currentCategory.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedSkill === skill.name 
                          ? 'bg-white/20 scale-105' 
                          : 'bg-white/10 hover:bg-white/15'
                      }`}
                      onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                          <div className="text-sm text-white/60 mt-1">
                            {skill.learningDuration} of learning
                          </div>
                        </div>
                        <Badge className="bg-white/20 text-white border-0">
                          {skill.confidence}% confidence
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <Progress 
                          value={skill.confidence} 
                          className="h-2 bg-white/20"
                        />

                        {selectedSkill === skill.name && (
                          <div className="mt-3 p-3 bg-white/10 rounded-lg animate-fade-in">
                            <p className="text-white/80 text-sm">
                              Gained {skill.confidence}% confidence in {skill.name} over {skill.learningDuration} of continuous learning and practice.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Summary */}
                <div className="mt-8 p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-white font-semibold">Quick Stats</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Technologies Listed:</span>
                      <span className="text-white ml-2 font-semibold">
                        {currentCategory.skills.length}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/60">Avg Confidence:</span>
                      <span className="text-white ml-2 font-semibold">
                        {Math.round(currentCategory.skills.reduce((sum, skill) => 
                          sum + skill.confidence, 0) / currentCategory.skills.length)}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
