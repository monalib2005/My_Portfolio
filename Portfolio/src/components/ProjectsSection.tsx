import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ICEI 2026',
    description:
      'A full-stack web application for managing academic conferences, built with the MERN stack (MongoDB, Express.js, React, Node.js). The application allows presenters to submit papers and book presentation slots, while attendees can view and register for presentations.',
    image:
      'https://imgs.search.brave.com/DxmKRSHjmZsUe1yCDvLRoja1mkHOF7Pi3zq371vm3f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/OC8xNi8wOS81MS9p/bnRlcm5hdGlvbmFs/LWNvbmZlcmVuY2Ut/MTU5NzUyOV82NDAu/anBn',
    technologies: ['Typescript', 'Node.js', 'ExpressJs', 'MongoDB'],
    category: 'MERN',
    liveUrl: 'https://icei-pict.netlify.app/',
    githubUrl: 'https://github.com/KALYANI100/Conference',
    learned: 'Real-time project management, security features, and team collaboration',
  },
  {
    id: 2,
    title: 'NextRound',
    description:
      'NextRound is an intelligent mock interview platform that simulates real interview experiences using AI. It allows users to practice technical and HR interviews in a realistic setting by analyzing speech and responses in real-time and gives performance feedback.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['TypeScript', 'Speech Recognition', 'NodeJs', 'Firebase'],
    category: 'MERN',
    liveUrl: '#',
    githubUrl: 'https://github.com/Adit3107/NextRound',
    learned: 'Team coordination, frontend experience, and user experience design',
  },
  {
    id: 3,
    title: 'Resume Screening AI Platform',
    description:
      'A full-stack web application that automates the process of evaluating candidate resumes. It allows recruiters to upload resumes, match them against job descriptions using AI, view relevance scores, and shortlist candidates with email notifications.',
    image:
      'https://imgs.search.brave.com/PZNbMJHV4wHqdrHodsc59FKakLckS-P9SgxUbY3bgoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xvdWRhcHBlci5h/aS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNi9BSS1SZXN1/bWUtU2NyZWVuaW5n/LUhvdy1JdC1Xb3Jr/cy1XaHktWW91ci1U/ZWFtLU5lZWRzLUl0/LnBuZw',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: 'https://github.com/monalib2005/Resume-Screening',
    learned: 'Resume parsing, AI-powered matching, secure file handling, recruiter UI design',
  },
];

const categories = [{ id: 'all', label: 'All Projects', icon: Globe }];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Showcasing my passion for creating innovative solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={selectedCategory === id ? 'default' : 'outline'}
                className={`glass-card border-0 transition-all duration-300 ${
                  selectedCategory === id
                    ? 'bg-white/20 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card hover-glow border-0 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/10 text-white/80 border-0 hover:bg-white/20 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* What I Learned */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <p className="text-sm text-white/60 mb-1">What I learned:</p>
                    <p className="text-sm text-white/80">{project.learned}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/monalib2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="glass-card hover-glow border-0 bg-white/20 text-white hover:bg-white/30"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
