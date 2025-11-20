"use client";

import { motion } from "framer-motion";
import { 
  Book, 
  Code, 
  Terminal, 
  Rocket, 
  Settings, 
  Database,
  Shield,
  Globe,
  ArrowRight,
  Copy,
  CheckCircle,
  ExternalLink,
  FileText,
  GitBranch,
  Server,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Documentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    dockerCompose: `version: '3.8'
services:
  veelops:
    image: veelops/veelops:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/veelops
      - JWT_SECRET=your-secret-key
    volumes:
      - ./data:/app/data
      - /var/run/docker.sock:/var/run/docker.sock
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=veelops
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`,
    
    deployConfig: `# veelops.yml
name: my-nextjs-app
type: nodejs

build:
  command: npm run build
  output: .next

environment:
  NODE_ENV: production
  API_URL: https://api.myapp.com

domains:
  - myapp.com
  - www.myapp.com

resources:
  cpu: 1
  memory: 512M

scaling:
  min: 1
  max: 10
  target_cpu: 70`,

    cliInstall: `# Install Veelops CLI
npm install -g veelops-cli

# Login to your account
veelops login

# Deploy your app
veelops deploy

# Check app status
veelops status my-app`,

    apiExample: `// Deploy via API
const response = await fetch('https://api.veelops.com/v1/deployments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'my-app',
    github_repo: 'username/my-app',
    branch: 'main',
    environment: {
      NODE_ENV: 'production'
    }
  })
});

const deployment = await response.json();
console.log('Deployment created:', deployment.id);`
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-blue-500/20">
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
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/docs" className="text-blue-400 font-medium">Docs</Link>
              <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-black/60 backdrop-blur-sm border-r border-blue-500/20 p-6 min-h-screen">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Getting Started</h3>
                <div className="space-y-2">
                  <a href="#introduction" className="block text-blue-400 hover:text-blue-300 transition-colors">Introduction</a>
                  <a href="#installation" className="block text-gray-300 hover:text-white transition-colors">Installation</a>
                  <a href="#quick-start" className="block text-gray-300 hover:text-white transition-colors">Quick Start</a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Deployment</h3>
                <div className="space-y-2">
                  <a href="#docker" className="block text-gray-300 hover:text-white transition-colors">Docker Apps</a>
                  <a href="#nodejs" className="block text-gray-300 hover:text-white transition-colors">Node.js Apps</a>
                  <a href="#static" className="block text-gray-300 hover:text-white transition-colors">Static Sites</a>
                  <a href="#databases" className="block text-gray-300 hover:text-white transition-colors">Databases</a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Configuration</h3>
                <div className="space-y-2">
                  <a href="#environment" className="block text-gray-300 hover:text-white transition-colors">Environment Variables</a>
                  <a href="#domains" className="block text-gray-300 hover:text-white transition-colors">Custom Domains</a>
                  <a href="#ssl" className="block text-gray-300 hover:text-white transition-colors">SSL Certificates</a>
                  <a href="#monitoring" className="block text-gray-300 hover:text-white transition-colors">Monitoring</a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">API Reference</h3>
                <div className="space-y-2">
                  <a href="#api-auth" className="block text-gray-300 hover:text-white transition-colors">Authentication</a>
                  <a href="#api-deployments" className="block text-gray-300 hover:text-white transition-colors">Deployments</a>
                  <a href="#api-apps" className="block text-gray-300 hover:text-white transition-colors">Applications</a>
                  <a href="#api-webhooks" className="block text-gray-300 hover:text-white transition-colors">Webhooks</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl mx-auto p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Documentation
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Everything you need to know to get started with Veelops. Deploy your applications with ease using our comprehensive platform.
                </p>
              </div>

              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Book className="w-6 h-6 text-blue-400" />
                  Introduction
                </h2>
                
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20 mb-6">
                  <p className="text-gray-300 mb-4">
                    Veelops is a modern application deployment platform that simplifies the process of deploying, managing, and scaling your applications. Whether you're deploying a simple static website or a complex microservices architecture, Veelops provides the tools and infrastructure you need.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Easy Deployment</h3>
                        <p className="text-gray-400 text-sm">Deploy from Git in seconds with automatic builds and zero-downtime deployments.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Secure by Default</h3>
                        <p className="text-gray-400 text-sm">Automatic SSL certificates, isolated containers, and enterprise-grade security.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-blue-400" />
                  Installation
                </h2>

                <div className="space-y-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden">
                    <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
                      <h3 className="text-white font-medium">Self-Hosted Installation</h3>
                      <button
                        onClick={() => copyToClipboard(codeExamples.dockerCompose, 'docker-compose')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'docker-compose' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        Copy
                      </button>
                    </div>
                    <div className="p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{codeExamples.dockerCompose}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden">
                    <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
                      <h3 className="text-white font-medium">CLI Installation</h3>
                      <button
                        onClick={() => copyToClipboard(codeExamples.cliInstall, 'cli')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'cli' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        Copy
                      </button>
                    </div>
                    <div className="p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{codeExamples.cliInstall}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Start */}
              <section id="quick-start" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-400" />
                  Quick Start
                </h2>

                <div className="space-y-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Deploy Your First App</h3>
                    <div className="space-y-4">
                      {[
                        { step: '1', title: 'Connect your repository', desc: 'Link your GitHub, GitLab, or Bitbucket account' },
                        { step: '2', title: 'Configure your app', desc: 'Set environment variables and deployment settings' },
                        { step: '3', title: 'Deploy', desc: 'Push your code and watch your app go live instantly' }
                      ].map((item) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden">
                    <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
                      <h3 className="text-white font-medium">App Configuration (veelops.yml)</h3>
                      <button
                        onClick={() => copyToClipboard(codeExamples.deployConfig, 'config')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'config' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        Copy
                      </button>
                    </div>
                    <div className="p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{codeExamples.deployConfig}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* API Reference */}
              <section id="api-auth" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-400" />
                  API Reference
                </h2>

                <div className="space-y-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-white mb-4">Authentication</h3>
                    <p className="text-gray-300 mb-4">
                      All API requests require authentication using an API key. Include your API key in the Authorization header:
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
                    </div>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden">
                    <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
                      <h3 className="text-white font-medium">Deploy via API</h3>
                      <button
                        onClick={() => copyToClipboard(codeExamples.apiExample, 'api')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === 'api' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        Copy
                      </button>
                    </div>
                    <div className="p-4">
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{codeExamples.apiExample}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Support Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-semibold">Community Forum</h3>
                    </div>
                    <p className="text-gray-300 mb-4">Join our community to get help from other developers and share your experiences.</p>
                    <a href="https://forum.veelops.com" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                      Visit Forum <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <GitBranch className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white font-semibold">GitHub Issues</h3>
                    </div>
                    <p className="text-gray-300 mb-4">Report bugs, request features, or contribute to the Veelops project.</p>
                    <a href="https://github.com/veelops/veelops" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                      View on GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-blue-900/20 via-black to-blue-800/20 rounded-2xl p-8 border border-blue-500/20">
                  <h2 className="text-2xl font-bold text-white mb-4">Ready to Deploy?</h2>
                  <p className="text-gray-300 mb-6">Start deploying your applications with Veelops today.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/auth" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href="https://github.com/veelops/examples" className="border border-blue-500/30 hover:border-blue-400 bg-blue-500/10 hover:bg-blue-500/20 text-gray-200 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2">
                      View Examples
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}