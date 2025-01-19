import { FC } from 'react';
import {
  Github,
  Youtube,
  Mail,
  Rocket,
  Brain,
  Layout,
  FileCode,
  Presentation,
  PenTool,
  Newspaper,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Define types for project and post data
interface Project {
  icon: JSX.Element;
  title: string;
  description: string;
  tags: string[];
}

interface Post {
  icon: JSX.Element;
  title: string;
  description: string;
}

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const App: FC = () => {
  const projects: Project[] = [
    {
      icon: <Youtube className="w-12 h-12 text-zinc-400 mb-4" />,
      title: 'YouTube Niche App',
      description:
        'A specialized platform for curating and discovering niche YouTube content, built with modern web technologies.',
      tags: ['Next.js', 'YouTube API', 'Tailwind'],
    },
    {
      icon: <Layout className="w-12 h-12 text-zinc-400 mb-4" />,
      title: 'Task Manager',
      description:
        'A minimalist yet powerful task management application with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'TypeScript'],
    },
    {
      icon: <Rocket className="w-12 h-12 text-zinc-400 mb-4" />,
      title: 'bolt.new',
      description:
        'A lightning-fast project starter inspired by create-next-app, with added features and modern tooling.',
      tags: ['Node.js', 'CLI', 'TypeScript'],
    },
    {
      icon: <Presentation className="w-12 h-12 text-zinc-400 mb-4" />,
      title: 'slides.ai',
      description:
        'AI-powered presentation generator that creates beautiful slides from natural language input.',
      tags: ['OpenAI', 'Next.js', 'Vercel AI SDK'],
    },
    {
      icon: <Newspaper className="w-12 h-12 text-zinc-400 mb-4" />,
      title: 'Dev Blog',
      description:
        'A modern blog platform sharing detailed roadmaps and guides for building full-stack applications.',
      tags: ['MDX', 'Next.js', 'Tailwind'],
    },
  ];

  const posts: Post[] = [
    {
      icon: <FileCode className="w-8 h-8 text-zinc-400" />,
      title: 'Building a Full-Stack Next.js App',
      description:
        'A comprehensive guide to building and deploying a modern web application with Next.js 13+.',
    },
    {
      icon: <Brain className="w-8 h-8 text-zinc-400" />,
      title: 'React Design Patterns',
      description:
        'Essential patterns and best practices for building scalable React applications.',
    },
    {
      icon: <PenTool className="w-8 h-8 text-zinc-400" />,
      title: 'API Design Guidelines',
      description:
        'Learn how to design and implement robust APIs that developers love to use.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black to-black" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500 mb-6"
            >
              Building the Future, One Project at a Time
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto"
            >
              Exploring the intersection of code, design, and innovation through hands-on projects and comprehensive guides.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex justify-center gap-4"
            >
              <a
                href="https://github.com/yourusername"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 transition-all duration-300 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                GitHub
              </a>
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 px-6 py-3 rounded-lg hover:scale-105"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Contact
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Featured Projects Section */}
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-16">
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group bg-zinc-900/50 rounded-xl overflow-hidden hover:bg-zinc-900/70 transition-all duration-300 border border-zinc-800 hover:border-zinc-700"
            >
              <div className="p-6">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800/50 rounded-full hover:bg-zinc-700/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Blog Section */}
      <div className="bg-zinc-900/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50" />
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-16">
            Project Roadmaps & Guides
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group bg-black/20 rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300 p-6 border border-zinc-800 hover:border-zinc-700"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {post.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-200 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400">{post.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 py-6">
        <div className="text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
