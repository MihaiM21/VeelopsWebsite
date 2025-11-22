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
  ChevronRight,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
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
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      
      {/* Navigation Header */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-blue-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/Veelops logo.png"
                alt="Veelops Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white">Veelops</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Deploy Apps
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-pulse">
                {" "}Effortlessly
              </span>
            </h1>
            
            {/* Coming Soon Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/40 rounded-full px-6 py-3 mb-8"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-300 font-semibold text-lg">
                Coming Soon - ETA Q2 2026
              </span>
            </motion.div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The modern platform for seamless application deployment. 
              Choose between self-hosted freedom or our fully managed cloud infrastructure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/auth" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Deploying
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/features" className="border border-blue-500/30 hover:border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-gray-200 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              View Features
            </Link>
          </motion.div>

          {/* Animated Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-500/10">
              <div className="bg-black/80 px-6 py-4 border-b border-blue-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                  <span className="ml-4 text-gray-400 text-sm">app.veelops.com/dashboard</span>
                </div>
              </div>
              <div className="p-0 h-96 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
                <div className="text-gray-400 text-lg text-center">
                  <img src="/Dashboard_Image.png" alt="Dashboard Preview" className="mx-auto w-full mt-10" />
                  {/* <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-blue-700/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30 backdrop-blur-sm">
                    <Image
                      src="/Veelops logo.png"
                      alt="Veelops Logo"
                      width={48}
                      height={48}
                      className="object-contain opacity-80"
                    />
                  </div> */}
                  {/* Dashboard Preview
                  <br />
                  <span className="text-sm text-blue-400">Beautiful interface for easy deployment</span> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Veelops</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built for developers who want powerful deployment without the complexity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Deploy your apps in seconds, not minutes. Optimized infrastructure for maximum speed."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure by Default",
                description: "Built-in security features, SSL certificates, and isolated containers keep your apps safe."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Auto Scaling",
                description: "Automatically scale your applications based on demand. Available on our managed plans."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Git Integration",
                description: "Connect your GitHub, GitLab, or Bitbucket. Deploy automatically on every push."
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Flexible Hosting",
                description: "Self-host for full control or use our managed infrastructure for zero maintenance."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global CDN",
                description: "Serve your apps from edge locations worldwide. Included in our managed plans."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 hover:border-blue-400/40 group hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Compare</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See why developers are switching to Veelops
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-black/60 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-500/20 bg-black/40">
                    <th className="text-left p-6 text-gray-300">Feature</th>
                    <th className="text-center p-6">
                      <div className="text-white font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Veelops</div>
                    </th>
                    <th className="text-center p-6 text-gray-400">Coolify</th>
                    <th className="text-center p-6 text-gray-400">Dokploy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["One-click deployment", true, true, true],
                    ["Auto SSL certificates", true, true, false],
                    ["Built-in monitoring", true, false, false],
                    ["Advanced scaling", true, false, false],
                    ["Team collaboration", true, false, true],
                    ["24/7 support", true, false, false]
                  ].map(([feature, veelops, coolify, dokploy], index) => (
                    <tr key={index} className="border-b border-blue-500/10 hover:bg-blue-500/5 transition-colors duration-200">
                      <td className="p-6 text-gray-200">{feature}</td>
                      <td className="text-center p-6">
                        {veelops ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-gray-500">-</span>}
                      </td>
                      <td className="text-center p-6">
                        {coolify ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <span className="text-gray-500">-</span>}
                      </td>
                      <td className="text-center p-6">
                        {dokploy ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <span className="text-gray-500">-</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">$0</div>
                <p className="text-gray-400 text-sm">Self-Hosted</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-gray-700/50 px-2 py-1 rounded">Bring your own server</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Full Veelops platform</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Deployments & pipelines</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Monitoring dashboard</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Integrations & webhooks</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span>Managed hosting</span>
                </li>
              </ul>
              <Link href="/auth" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium text-center inline-block">
                Get Started Free
              </Link>
            </motion.div>

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">$4<span className="text-lg text-gray-400">/mo</span></div>
                <p className="text-gray-400 text-sm">For small projects</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-gray-700/50 px-2 py-1 rounded">0.5 CPU</span>
                  <span className="bg-gray-700/50 px-2 py-1 rounded ml-1">512MB RAM</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Fully managed hosting</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Automated SSL</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Advanced monitoring</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Custom domains</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Automatic backups</span>
                </li>
              </ul>
              <Link href="/auth" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium text-center inline-block">
                Start Trial
              </Link>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-6 border border-blue-500/50 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">$10<span className="text-lg text-gray-400">/mo</span></div>
                <p className="text-gray-400 text-sm">For growing teams</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-blue-700/30 px-2 py-1 rounded">1 CPU</span>
                  <span className="bg-blue-700/30 px-2 py-1 rounded ml-1">1GB RAM</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Up to 10 applications</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Auto-scaling</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Database included</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Global CDN</span>
                </li>
              </ul>
              <Link href="/auth" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-medium text-center inline-block">
                Start Trial
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">Custom</div>
                <p className="text-gray-400 text-sm">For large organizations</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-gray-700/50 px-2 py-1 rounded">Custom resources</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Unlimited applications</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>SOC 2 compliance</span>
                </li>
              </ul>
              <Link href="/auth" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors font-medium text-center inline-block">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 via-black to-blue-800/20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Deploy?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Start with our free self-hosted option or jump straight to our managed cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Try Managed Hosting
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/auth" className="border border-blue-500/30 hover:border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-gray-200 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Get Started Free
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/80 border-t border-blue-500/20 relative z-10">
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
