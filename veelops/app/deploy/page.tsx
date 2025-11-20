"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GitBranch, 
  Github, 
  Settings, 
  Play, 
  Square, 
  RefreshCw,
  Eye,
  ExternalLink,
  Terminal,
  Database,
  Globe,
  Shield,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  ArrowRight,
  Code,
  Folder,
  FileText,
  Upload,
  Download,
  Copy,
  Edit,
  Trash2,
  Plus,
  Server,
  Cpu,
  MemoryStick,
  HardDrive,
  Zap,
  Users,
  Bell,
  Search,
  Filter,
  MoreVertical,
  BarChart3
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DeploymentStep {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  duration?: string;
  logs?: string[];
}

interface Environment {
  id: string;
  name: string;
  url?: string;
  branch: string;
  status: 'active' | 'building' | 'failed' | 'stopped';
  lastDeploy: string;
  commits: number;
}

interface BuildLog {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'error';
  message: string;
}

export default function DeploymentPlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEnvironment, setSelectedEnvironment] = useState('production');
  
  const [deploymentSteps] = useState<DeploymentStep[]>([
    {
      id: '1',
      name: 'Cloning repository',
      status: 'completed',
      duration: '3s',
      logs: ['git clone https://github.com/user/my-app.git', 'Cloning into "my-app"...', 'remote: Enumerating objects: 1234, done.']
    },
    {
      id: '2',
      name: 'Installing dependencies',
      status: 'completed',
      duration: '45s',
      logs: ['npm install', 'added 1420 packages from 672 contributors']
    },
    {
      id: '3',
      name: 'Building application',
      status: 'completed',
      duration: '1m 23s',
      logs: ['npm run build', 'Creating an optimized production build...', 'Compiled successfully!']
    },
    {
      id: '4',
      name: 'Creating Docker image',
      status: 'running',
      logs: ['Building Docker image...', 'Step 1/8 : FROM node:18-alpine', 'Step 2/8 : WORKDIR /app']
    },
    {
      id: '5',
      name: 'Deploying to production',
      status: 'pending'
    }
  ]);

  const [environments] = useState<Environment[]>([
    {
      id: 'production',
      name: 'Production',
      url: 'https://my-app.veelops.app',
      branch: 'main',
      status: 'active',
      lastDeploy: '2 hours ago',
      commits: 145
    },
    {
      id: 'staging',
      name: 'Staging',
      url: 'https://staging-my-app.veelops.app',
      branch: 'develop',
      status: 'active',
      lastDeploy: '30 minutes ago',
      commits: 23
    },
    {
      id: 'preview-pr-123',
      name: 'Preview (PR #123)',
      url: 'https://pr-123-my-app.veelops.app',
      branch: 'feature/new-auth',
      status: 'building',
      lastDeploy: 'Building...',
      commits: 3
    }
  ]);

  const [buildLogs] = useState<BuildLog[]>([
    { id: '1', timestamp: '14:32:01', level: 'info', message: 'Starting build process...' },
    { id: '2', timestamp: '14:32:02', level: 'info', message: 'Detected Node.js application' },
    { id: '3', timestamp: '14:32:03', level: 'info', message: 'Installing dependencies...' },
    { id: '4', timestamp: '14:32:48', level: 'warn', message: 'npm WARN deprecated some-package@1.0.0' },
    { id: '5', timestamp: '14:33:15', level: 'info', message: 'Dependencies installed successfully' },
    { id: '6', timestamp: '14:33:16', level: 'info', message: 'Running build command: npm run build' },
    { id: '7', timestamp: '14:34:39', level: 'info', message: 'Build completed successfully!' },
    { id: '8', timestamp: '14:34:40', level: 'info', message: 'Creating Docker image...' }
  ]);

  const statusColors = {
    active: 'text-green-400 bg-green-400/20',
    building: 'text-yellow-400 bg-yellow-400/20',
    failed: 'text-red-400 bg-red-400/20',
    stopped: 'text-gray-400 bg-gray-400/20',
    pending: 'text-gray-400 bg-gray-400/20',
    running: 'text-blue-400 bg-blue-400/20',
    completed: 'text-green-400 bg-green-400/20'
  };

  const logColors = {
    info: 'text-blue-400',
    warn: 'text-yellow-400',
    error: 'text-red-400'
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">my-awesome-app</h2>
              <p className="text-gray-400">Connected to github.com/user/my-awesome-app</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" />
              Deploy Now
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Status', value: 'Deployed', color: 'text-green-400' },
            { label: 'Last Deploy', value: '2 hours ago', color: 'text-gray-300' },
            { label: 'Build Time', value: '1m 23s', color: 'text-gray-300' },
            { label: 'Environments', value: '3 active', color: 'text-gray-300' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
              <p className={`text-lg font-semibold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Environments */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Environments</h3>
        <div className="space-y-4">
          {environments.map((env) => (
            <div key={env.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${env.status === 'active' ? 'bg-green-400' : env.status === 'building' ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-white font-medium">{env.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[env.status]}`}>
                      {env.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Branch: {env.branch}</span>
                    <span>•</span>
                    <span>{env.lastDeploy}</span>
                    <span>•</span>
                    <span>{env.commits} commits</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {env.url && (
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </button>
                )}
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Deployments */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Deployments</h3>
        <div className="space-y-3">
          {[
            { commit: 'feat: add new auth system', hash: 'abc1234', time: '2 hours ago', status: 'success' },
            { commit: 'fix: resolve database connection issue', hash: 'def5678', time: '4 hours ago', status: 'success' },
            { commit: 'update: improve performance', hash: 'ghi9012', time: '6 hours ago', status: 'success' },
            { commit: 'feat: add user dashboard', hash: 'jkl3456', time: '1 day ago', status: 'failed' }
          ].map((deployment, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-b-0">
              <div className="flex items-center gap-3">
                {deployment.status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <div>
                  <p className="text-white">{deployment.commit}</p>
                  <p className="text-sm text-gray-400">#{deployment.hash} • {deployment.time}</p>
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBuildLogs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Build Logs</h2>
        <div className="flex gap-2">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Deployment Steps */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Deployment Progress</h3>
        <div className="space-y-4">
          {deploymentSteps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800">
                {step.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-400" />}
                {step.status === 'running' && <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>}
                {step.status === 'failed' && <XCircle className="w-5 h-5 text-red-400" />}
                {step.status === 'pending' && <div className="w-3 h-3 bg-gray-500 rounded-full"></div>}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white">{step.name}</span>
                  {step.duration && <span className="text-sm text-gray-400">{step.duration}</span>}
                </div>
                {step.logs && (
                  <div className="mt-2 bg-gray-900/80 rounded-lg p-3 text-sm">
                    {step.logs.map((log, logIndex) => (
                      <div key={logIndex} className="text-gray-300 font-mono">{log}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Build Output */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden">
        <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
          <h3 className="text-white font-medium">Build Output</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Live</span>
          </div>
        </div>
        <div className="p-4 bg-gray-900/50 h-96 overflow-y-auto font-mono text-sm">
          {buildLogs.map((log) => (
            <div key={log.id} className="flex gap-4 mb-1">
              <span className="text-gray-500 text-xs min-w-20">{log.timestamp}</span>
              <span className={`${logColors[log.level]} text-xs min-w-12`}>{log.level.toUpperCase()}</span>
              <span className="text-gray-300">{log.message}</span>
            </div>
          ))}
          <div className="flex gap-4 mb-1">
            <span className="text-gray-500 text-xs min-w-20">14:34:45</span>
            <span className="text-blue-400 text-xs min-w-12">INFO</span>
            <span className="text-gray-300">Deployment in progress...</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Project Settings</h2>
      
      <div className="grid gap-6">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">General</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Project Name</label>
              <input 
                type="text" 
                value="my-awesome-app" 
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Repository</label>
              <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <Github className="w-5 h-5 text-gray-400" />
                <span className="text-white">github.com/user/my-awesome-app</span>
                <button className="ml-auto text-blue-400 hover:text-blue-300 text-sm">Change</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Build Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Framework Preset</label>
              <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none">
                <option>Next.js</option>
                <option>React</option>
                <option>Vue.js</option>
                <option>Nuxt.js</option>
                <option>Svelte</option>
                <option>Static HTML</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Build Command</label>
              <input 
                type="text" 
                value="npm run build" 
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Output Directory</label>
              <input 
                type="text" 
                value=".next" 
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Environment Variables</h3>
          <div className="space-y-3 mb-4">
            {[
              { key: 'NODE_ENV', value: 'production' },
              { key: 'API_URL', value: 'https://api.myapp.com' },
              { key: 'DATABASE_URL', value: '••••••••••••••••••••' }
            ].map((env, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <input 
                  type="text" 
                  value={env.key} 
                  className="bg-transparent text-white outline-none flex-1"
                  placeholder="KEY"
                />
                <span className="text-gray-400">=</span>
                <input 
                  type="text" 
                  value={env.value} 
                  className="bg-transparent text-white outline-none flex-1"
                  placeholder="value"
                />
                <button className="p-1 text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Variable
          </button>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Custom Domains</h3>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-white">myapp.com</span>
              <span className="ml-auto px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-white">www.myapp.com</span>
              <span className="ml-auto px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Domain
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <Image
                src="/Veelops logo.png"
                alt="Veelops Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white">Veelops</span>
              <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-full">Deploy</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                ← Back to Dashboard
              </Link>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-black/60 backdrop-blur-sm border-r border-blue-500/20 p-6">
            <div className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: <Eye className="w-5 h-5" /> },
                { id: 'deployments', label: 'Deployments', icon: <Activity className="w-5 h-5" /> },
                { id: 'builds', label: 'Build Logs', icon: <Terminal className="w-5 h-5" /> },
                { id: 'functions', label: 'Functions', icon: <Code className="w-5 h-5" /> },
                { id: 'storage', label: 'Storage', icon: <Database className="w-5 h-5" /> },
                { id: 'monitoring', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
                { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'builds' && renderBuildLogs()}
              {activeTab === 'settings' && renderSettings()}
              {activeTab === 'deployments' && <div className="text-white">Deployment History - Coming Soon</div>}
              {activeTab === 'functions' && <div className="text-white">Serverless Functions - Coming Soon</div>}
              {activeTab === 'storage' && <div className="text-white">Storage Management - Coming Soon</div>}
              {activeTab === 'monitoring' && <div className="text-white">Analytics & Monitoring - Coming Soon</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}