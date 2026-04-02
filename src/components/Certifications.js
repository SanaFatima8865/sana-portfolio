import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "OWASP Top 10 Web Application Vulnerabilities",
      issuer: "ARIA Systems",
      year: "2025",
      description: "Comprehensive training on identifying and mitigating the top 10 most critical web application security risks as defined by OWASP, including injection attacks, broken authentication, and cross-site scripting.",
      skills: ["OWASP Top 10", "Web Security", "Injection Prevention", "XSS Mitigation", "Secure Coding"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-primary-600 to-primary-700",
      category: "Security"
    },
    {
      title: "Privacy and Data Protection (P-101)",
      issuer: "ARIA Systems",
      year: "2025",
      description: "Professional certification in privacy principles and data protection practices, covering data handling, GDPR compliance, and organizational privacy frameworks.",
      skills: ["Data Protection", "Privacy Compliance", "GDPR", "Data Handling", "Privacy Frameworks"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-primary-700 to-accent-700",
      category: "Security & Privacy"
    },
    {
      title: "Basic Security Awareness (S-101)",
      issuer: "ARIA Systems",
      year: "2024",
      description: "Foundational security awareness certification covering cybersecurity best practices, threat identification, phishing prevention, and secure workplace habits.",
      skills: ["Cybersecurity", "Threat Identification", "Phishing Prevention", "Security Best Practices", "Risk Awareness"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-accent-600 to-accent-700",
      category: "Security"
    },
    {
      title: "Namaste React",
      issuer: "Akshay Saini",
      year: "2023",
      description: "Comprehensive React.js course covering advanced concepts, hooks, performance optimization, and modern React patterns.",
      skills: ["React.js", "Hooks", "Context API", "Performance Optimization", "Modern React Patterns"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-primary-600 to-primary-700",
      category: "Frontend Development"
    },
    {
      title: ".NET Core and Cloud CX",
      issuer: "Speridian Technologies",
      year: "2019",
      description: "Comprehensive training on .NET Core framework, cloud technologies, and customer experience solutions.",
      skills: [".NET Core", "Cloud Technologies", "API Development", "Microservices", "Azure"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "from-primary-700 to-primary-800",
      category: "Backend Development"
    }
  ];

  const achievements = [
    {
      title: "Society President Leadership",
      organization: "University Society",
      year: "2019-2020",
      description: "Led a team of 80+ members in social services including education initiatives, first-aid programs, and blood donation drives.",
      impact: "Organized 15+ community service events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-primary-600 to-primary-700"
    },
    {
      title: "Cultural & Dramatics Team Lead",
      organization: "University Cultural Society",
      year: "2019-2020",
      description: "Managed cultural and dramatics events with a team of 20+ members, organizing performances and cultural celebrations.",
      impact: "Successfully organized 10+ cultural events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
        </svg>
      ),
      color: "from-primary-700 to-primary-800"
    }
  ];

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/SanaFatima_Senior_Full_Stack_Developer.pdf`;
    link.download = 'SanaFatima_Senior_Full_Stack_Developer.pdf';
    link.target = '_blank';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show success message
    console.log('CV download initiated');
  };
  
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and leadership achievements that showcase my commitment to continuous learning and growth
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-700 hover:border-primary-500/50">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{cert.title}</h4>
                      <p className="text-primary-100">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.category}
                    </span>
                    <span className="text-primary-100 font-medium">{cert.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-3">Key Skills Acquired:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-dark-600 text-gray-300 text-sm rounded-full font-medium hover:bg-primary-500/20 hover:text-primary-400 transition-colors border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Leadership & Extracurricular Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-dark-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-700 hover:border-primary-500/50">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${achievement.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{achievement.title}</h4>
                      <p className="text-white/80">{achievement.organization}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Leadership
                    </span>
                    <span className="text-white/80 font-medium">{achievement.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="bg-dark-600 p-4 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-white">Impact: </span>
                      <span className="text-gray-300 ml-1">{achievement.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-dark-700 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">5</div>
              <div className="text-gray-400 text-sm">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">80+</div>
              <div className="text-gray-400 text-sm">Team Members Led</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm">Events Organized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">2</div>
              <div className="text-gray-400 text-sm">Years Leadership</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Interested in learning more about my qualifications and experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1" onClick={handleDownloadCV}>
              Download Full Resume
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-500 text-primary-400 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
