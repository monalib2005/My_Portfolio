import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Coffee, 
  MessageCircle, 
  Download,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'monalib909@gmail.com',
    action: 'mailto:monalib909@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, Maharashtra',
    action: '#'
  }
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/monalib2005', color: 'hover:text-gray-300' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/monali-bhoyar-a02007299/', color: 'hover:text-blue-400' },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="space-y-10 animate-slide-in-left">
          {/* Contact Methods */}
          <Card className="glass-card hover-glow border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{method.label}</p>
                        <p className="text-white font-medium">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="glass-card hover-glow border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    className={`p-3 glass-card hover-glow rounded-full transition-all duration-300 group ${color}`}
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
