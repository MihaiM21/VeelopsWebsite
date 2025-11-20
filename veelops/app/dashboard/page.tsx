"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  FileText, 
  Settings, 
  BarChart3, 
  Users, 
  Shield, 
  Terminal,
  Folder,
  Plus,
  Search,
  Bell,
  Download,
  Upload,
  Trash2,
  Play,
  Square,
  RefreshCw,
  Eye,
  Edit,
  Copy,
  ExternalLink,
  Globe,
  Lock,
  Cpu,
  HardDrive,
  MemoryStick,
  Network,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Application {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'building' | 'error';
  url?: string;
  framework: string;
  lastDeploy: string;
  cpu: number;
  memory: number;
}

interface Database {
  id: string;
  name: string;
  type: 'postgresql' | 'mysql' | 'redis' | 'mongodb';
  size: string;
  status: 'running' | 'stopped';
  connections: number;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [applications] = useState<Application[]>([
    {
      id: '1',
      name: 'my-nextjs-app',
      status: 'running',
      url: 'https://my-nextjs-app.veelops.app',
      framework: 'Next.js',
      lastDeploy: '2 hours ago',
      cpu: 12,
      memory: 45
    },
    {
      id: '2',
      name: 'api-backend',
      status: 'building',
      framework: 'Node.js',
      lastDeploy: 'Building...',
      cpu: 0,
      memory: 0
    },
    {
      id: '3',
      name: 'react-portfolio',
      status: 'stopped',
      framework: 'React',
      lastDeploy: '1 day ago',
      cpu: 0,
      memory: 0
    }
  ]);

  const [databases] = useState<Database[]>([
    {
      id: '1',
      name: 'production-db',
      type: 'postgresql',
      size: '2.4 GB',
      status: 'running',
      connections: 12
    },
    {
      id: '2',
      name: 'cache-redis',
      type: 'redis',
      size: '156 MB',
      status: 'running',
      connections: 5
    },
    {
      id: '3',
      name: 'analytics-db',
      type: 'mysql',
      size: '890 MB',
      status: 'stopped',
      connections: 0
    }
  ]);

  const statusColors = {
    running: 'text-green-400 bg-green-400/20',
    stopped: 'text-red-400 bg-red-400/20',
    building: 'text-yellow-400 bg-yellow-400/20',
    error: 'text-red-500 bg-red-500/20'
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Applications', value: '3', icon: <Server className="w-6 h-6" />, change: '+1 this week' },
          { title: 'Databases', value: '3', icon: <Database className="w-6 h-6" />, change: '+0 this week' },
          { title: 'Total Storage', value: '3.4 GB', icon: <HardDrive className="w-6 h-6" />, change: '+200 MB' },
          { title: 'Monthly Cost', value: '$29', icon: <BarChart3 className="w-6 h-6" />, change: 'Starter Plan' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-blue-400">{stat.icon}</div>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <h3 className="text-sm text-gray-400 mb-1">{stat.title}</h3>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'New App', icon: <Plus className="w-5 h-5" />, action: () => window.location.href = '/deploy' },
            { title: 'Add Database', icon: <Database className="w-5 h-5" />, action: () => setActiveTab('databases') },
            { title: 'File Manager', icon: <Folder className="w-5 h-5" />, action: () => setActiveTab('files') },
            { title: 'Server Panel', icon: <Server className="w-5 h-5" />, action: () => window.location.href = '/server-panel' }
          ].map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors"
            >
              <div className="text-blue-400 mb-2">{action.icon}</div>
              <span className="text-sm text-white">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Deployed my-nextjs-app', time: '2 hours ago', status: 'success' },
            { action: 'Started building api-backend', time: '5 minutes ago', status: 'pending' },
            { action: 'Database backup completed', time: '1 day ago', status: 'success' },
            { action: 'SSL certificate renewed', time: '2 days ago', status: 'success' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-b-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                <span className="text-gray-300">{activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderApplications = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Applications</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          New Application
        </button>
      </div>

      <div className="grid gap-6">
        {applications.map((app) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{app.name}</h3>
                  <p className="text-gray-400">{app.framework}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[app.status]}`}>
                  {app.status}
                </span>
                <div className="flex gap-2">
                  {app.url && (
                    <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Last Deploy:</span>
                <p className="text-white">{app.lastDeploy}</p>
              </div>
              <div>
                <span className="text-gray-400">URL:</span>
                <p className="text-blue-400 truncate">{app.url || 'Not deployed'}</p>
              </div>
              <div>
                <span className="text-gray-400">CPU Usage:</span>
                <p className="text-white">{app.cpu}%</p>
              </div>
              <div>
                <span className="text-gray-400">Memory:</span>
                <p className="text-white">{app.memory}%</p>
              </div>
            </div>

            {app.status === 'running' && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                <button className="bg-red-600/20 text-red-400 border border-red-600/30 px-4 py-2 rounded-lg hover:bg-red-600/30 transition-colors flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Stop
                </button>
                <button className="bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 px-4 py-2 rounded-lg hover:bg-yellow-600/30 transition-colors flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Restart
                </button>
                <button className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-colors flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Logs
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderDatabases = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Databases</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          New Database
        </button>
      </div>

      <div className="grid gap-6">
        {databases.map((db) => (
          <motion.div
            key={db.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{db.name}</h3>
                  <p className="text-gray-400">{db.type.toUpperCase()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[db.status]}`}>
                  {db.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Size:</span>
                <p className="text-white">{db.size}</p>
              </div>
              <div>
                <span className="text-gray-400">Connections:</span>
                <p className="text-white">{db.connections}</p>
              </div>
              <div>
                <span className="text-gray-400">Type:</span>
                <p className="text-white">{db.type}</p>
              </div>
            </div>

            {db.status === 'running' && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                <button className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-colors flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Console
                </button>
                <button className="bg-green-600/20 text-green-400 border border-green-600/30 px-4 py-2 rounded-lg hover:bg-green-600/30 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Backup
                </button>
                <button className="bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 px-4 py-2 rounded-lg hover:bg-yellow-600/30 transition-colors flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Restart
                </button>
                <button className="bg-red-600/20 text-red-400 border border-red-600/30 px-4 py-2 rounded-lg hover:bg-red-600/30 transition-colors flex items-center gap-2">
                  <Square className="w-4 h-4" />
                  Stop
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderFileManager = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">File Manager</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Upload className="w-4 h-4" />
            Upload
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            New Folder
          </button>
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20">
        <div className="p-4 border-b border-gray-700/50">
          <div className="flex items-center gap-2 text-gray-300">
            <Folder className="w-4 h-4" />
            <span>/var/www/apps</span>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-2">
            {[
              { name: 'my-nextjs-app', type: 'folder', size: '-', modified: '2 hours ago' },
              { name: 'api-backend', type: 'folder', size: '-', modified: '1 day ago' },
              { name: 'react-portfolio', type: 'folder', size: '-', modified: '1 day ago' },
              { name: 'docker-compose.yml', type: 'file', size: '2.1 KB', modified: '3 days ago' },
              { name: 'nginx.conf', type: 'file', size: '1.8 KB', modified: '1 week ago' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  {item.type === 'folder' ? (
                    <Folder className="w-5 h-5 text-blue-400" />
                  ) : (
                    <FileText className="w-5 h-5 text-gray-400" />
                  )}
                  <span className="text-white">{item.name}</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span>{item.size}</span>
                  <span>{item.modified}</span>
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMonitoring = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">System Monitoring</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'CPU Usage', value: '34%', icon: <Cpu className="w-6 h-6" />, color: 'text-green-400' },
          { title: 'Memory', value: '67%', icon: <MemoryStick className="w-6 h-6" />, color: 'text-yellow-400' },
          { title: 'Disk Usage', value: '23%', icon: <HardDrive className="w-6 h-6" />, color: 'text-green-400' },
          { title: 'Network', value: '12 MB/s', icon: <Network className="w-6 h-6" />, color: 'text-blue-400' }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={metric.color}>{metric.icon}</div>
              <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
            </div>
            <h3 className="text-sm text-gray-400">{metric.title}</h3>
          </motion.div>
        ))}
      </div>

      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
        <div className="space-y-4">
          {[
            { service: 'Web Server', status: 'running', uptime: '99.9%' },
            { service: 'Database', status: 'running', uptime: '99.8%' },
            { service: 'Load Balancer', status: 'running', uptime: '100%' },
            { service: 'SSL Certificate', status: 'valid', uptime: 'Expires in 89 days' }
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white">{service.service}</span>
              </div>
              <div className="text-sm text-gray-400">
                <span>{service.uptime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Settings</h2>
      
      <div className="grid gap-6">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                value="user@example.com" 
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                value="John Doe" 
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Change Password
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              Enable 2FA
            </button>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">API Keys</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div>
                <p className="text-white">Personal Access Token</p>
                <p className="text-sm text-gray-400">vp_•••••••••••••••••••••••••••</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 bg-red-600 hover:bg-red-700 rounded-lg">
                  <Trash2 className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Generate New Key
            </button>
          </div>
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
            <div className="flex items-center gap-4">
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
                { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
                { id: 'applications', label: 'Applications', icon: <Server className="w-5 h-5" /> },
                { id: 'databases', label: 'Databases', icon: <Database className="w-5 h-5" /> },
                { id: 'files', label: 'File Manager', icon: <Folder className="w-5 h-5" /> },
                { id: 'monitoring', label: 'Monitoring', icon: <Activity className="w-5 h-5" /> },
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
              {activeTab === 'applications' && renderApplications()}
              {activeTab === 'databases' && renderDatabases()}
              {activeTab === 'files' && renderFileManager()}
              {activeTab === 'monitoring' && renderMonitoring()}
              {activeTab === 'settings' && renderSettings()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}