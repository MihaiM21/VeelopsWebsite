"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Shield, 
  Zap, 
  Code, 
  GitBranch, 
  Server, 
  ArrowRight,
  Check,
  Star,
  Users,
  Globe,
  Database,
  Monitor,
  Lock,
  Clock,
  Layers,
  CloudLightning,
  Activity,
  RefreshCw
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden select-text">
      {/* Background gradient overlay - reduced opacity */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div> */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(59 130 246)" strokeWidth="1.5" opacity="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -60,60; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Veelops logo.png"
                alt="Veelops Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white">Veelops</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-blue-400 font-medium">Features</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Everything you need to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                {" "}deploy & scale
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our platform provides all the tools you need to build, deploy, and scale your applications with ease. 
              No complexity, no headaches—just seamless deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-0 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Instant Deployments",
                description: "Deploy your applications in seconds with our streamlined workflow. From git push to live in under 60 seconds.",
                highlight: "< 60 seconds"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "GitHub Integration", 
                description: "Connect your repositories and deploy directly from your GitHub workflow. Automatic deployments on every push.",
                highlight: "Auto-deploy"
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Zero Downtime Deploy",
                description: "Deploy updates without any service interruption for your users. Blue-green deployment strategy included.",
                highlight: "0% downtime"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Database Management",
                description: "Easily manage and scale your databases with our integrated tools. PostgreSQL, MySQL, and Redis support.",
                highlight: "Multiple DBs"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Auto Scaling",
                description: "Automatically scale your applications based on traffic and resource usage. Pay only for what you use.",
                highlight: "Smart scaling"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "SSL Certificates",
                description: "Free SSL certificates for all your domains with automatic renewal. Security by default, always.",
                highlight: "Always secure"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 hover:border-blue-400/40  group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="text-blue-400 text-sm font-medium">{feature.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Security */}
      <section className="py-16 px-6 bg-black opacity-90 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-grade <span className="text-blue-400">performance & security</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built for production workloads with the reliability your business demands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-black/80 rounded-lg p-8 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Performance Monitoring</h3>
                  <p className="text-gray-400">Real-time insights into your apps</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Real-time performance metrics</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Custom dashboards and alerts</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Application logs aggregation</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Error tracking & debugging</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-black/80 rounded-lg p-8 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Security & Compliance</h3>
                  <p className="text-gray-400">Enterprise security standards</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>SOC 2 Type II compliance</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>DDoS protection included</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>WAF & bot protection</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Network isolation & VPCs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Experience */}
      <section className="py-16 px-6 opacity-90">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for <span className="text-blue-400">developers</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every feature designed to make your development workflow smoother
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Multiple Languages",
                description: "Support for Node.js, Python, Go, PHP, Ruby, and more. Deploy any stack.",
                features: ["Node.js & npm/yarn", "Python & pip", "Go modules", "PHP Composer"]
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Framework Agnostic", 
                description: "Works with any framework. React, Vue, Django, Express, Next.js, you name it.",
                features: ["Static sites", "SPAs", "APIs", "Full-stack apps"]
              },
              {
                icon: <CloudLightning className="w-6 h-6" />,
                title: "Edge Computing",
                description: "Deploy to the edge for lightning-fast response times worldwide.",
                features: ["Global edge network", "Smart routing", "Edge functions", "CDN included"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-black/80 rounded-lg p-6 border border-gray-700/50"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/10 to-blue-800/10 opacity-90">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to experience the difference?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who've made the switch to Veelops for faster, more reliable deployments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/dashboard" className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900/50 border-t border-gray-800 pb-16 opacity-90">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/Veelops logo.png"
                alt="Veelops Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-xl font-bold text-white">Veelops</span>
            </Link>
            <div className="text-gray-400 text-sm">
              © 2025 Veelops. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}