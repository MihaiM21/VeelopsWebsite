"use client";

import { motion } from "framer-motion";
import { 
  Check,
  X,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Headphones,
  Globe,
  Database,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient overlay - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-800/10"></div>
      
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
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="/pricing" className="text-blue-400 font-medium">Pricing</Link>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <Link href="#get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Simple, transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                {" "}pricing
              </span>
            </h1>
            
            {/* Coming Soon Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/40 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-300 font-semibold text-lg">
                Coming Soon - ETA Q2 2026
              </span>
            </motion.div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the right service type and instance for your needs. Start free, scale as you grow.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium">50% cheaper than competitors</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Save up to <span className="text-green-400">50%</span> compared to competitors
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50"
            >
              <div className="text-center">
                <h3 className="font-bold text-white mb-2">Heroku</h3>
                <div className="text-2xl font-bold text-red-400 mb-2">$25/mo</div>
                <p className="text-gray-400 text-sm">Basic Dyno + Database</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg p-6 border border-blue-500/50 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Best Value</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white mb-2">Veelops</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">$10/mo</div>
                <p className="text-gray-300 text-sm">Same resources + More features</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50"
            >
              <div className="text-center">
                <h3 className="font-bold text-white mb-2">Vercel</h3>
                <div className="text-2xl font-bold text-red-400 mb-2">$20/mo</div>
                <p className="text-gray-400 text-sm">Limited to serverless only</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-16 px-6">
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
                <p className="text-gray-400 text-sm">Perfect for testing</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-gray-700/50 px-2 py-1 rounded">0.1 CPU</span>
                  <span className="bg-gray-700/50 px-2 py-1 rounded ml-1">512MB RAM</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>1 application</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Community support</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Basic monitoring</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>SSL certificates</span>
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <X className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span>Custom domains</span>
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg cursor-not-allowed opacity-75 font-medium">
                Coming Soon
              </button>
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
                <h3 className="text-xl font-bold text-white mb-2">Hobby</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">$3<span className="text-lg text-gray-400">/mo</span></div>
                <p className="text-gray-400 text-sm">For small projects</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-gray-700/50 px-2 py-1 rounded">0.5 CPU</span>
                  <span className="bg-gray-700/50 px-2 py-1 rounded ml-1">512MB RAM</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Up to 3 applications</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Email support</span>
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
              <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg cursor-not-allowed opacity-75 font-medium">
                Coming Soon
              </button>
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
                <div className="text-3xl font-bold text-blue-400 mb-2">$14<span className="text-lg text-gray-400">/mo</span></div>
                <p className="text-gray-400 text-sm">For growing teams</p>
                <div className="mt-4 text-xs text-gray-500">
                  <span className="bg-blue-700/30 px-2 py-1 rounded">1 CPU</span>
                  <span className="bg-blue-700/30 px-2 py-1 rounded ml-1">2GB RAM</span>
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
              <button className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg cursor-not-allowed opacity-75 font-medium">
                Coming Soon
              </button>
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
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors font-medium">
                Contact Sales
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Database Pricing */}
      <section className="py-16 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Database <span className="text-blue-400">add-ons</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Managed databases for your applications. PostgreSQL and MySQL support included.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Basic DB</h3>
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-4">$5<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 1GB storage</li>
                <li>• 100 concurrent connections</li>
                <li>• Daily backups</li>
                <li>• PostgreSQL or MySQL</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black/80 rounded-lg p-6 border border-blue-500/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Standard DB</h3>
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-4">$25<span className="text-lg text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 10GB storage</li>
                <li>• 500 concurrent connections</li>
                <li>• Hourly backups</li>
                <li>• High availability</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-black/80 rounded-lg p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Pro DB</h3>
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Custom</div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Custom storage</li>
                <li>• Unlimited connections</li>
                <li>• Real-time backups</li>
                <li>• Dedicated instances</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently asked <span className="text-blue-400">questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Is Veelops really free to use?",
                answer: "Yes! Our free tier includes 1 application with basic monitoring and SSL certificates. Perfect for personal projects and testing."
              },
              {
                question: "How does Veelops compare to Heroku pricing?",
                answer: "We're up to 50% cheaper than Heroku while offering the same or better performance. Our Basic plan at $3/mo provides similar resources to Heroku's $25/mo plan."
              },
              {
                question: "Can I migrate from other platforms?",
                answer: "Absolutely! We provide migration tools and guides to help you move from Heroku, Vercel, Netlify, and other platforms with minimal downtime."
              },
              {
                question: "What's included in the database add-ons?",
                answer: "All database plans include managed PostgreSQL or MySQL with automated backups, monitoring, and security patches. No maintenance required on your part."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-black/80 rounded-lg p-6 border border-gray-700/50"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/10 to-blue-800/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already using our platform to deploy their applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                Start Free Trial
                <ChevronRight className="w-4 h-4" />
              </button>
              <Link href="/features" className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                View Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900/50 border-t border-gray-800">
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