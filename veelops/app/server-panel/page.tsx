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
  Zap,
  Mail,
  Key,
  Monitor,
  Cloud,
  Wifi,
  Layers,
  Code2,
  Package,
  GitBranch,
  CloudLightning,
  Smartphone,
  Tablet,
  Laptop,
  Calendar,
  PieChart,
  TrendingUp,
  UserCheck,
  UserX,
  Filter,
  SortDesc,
  MoreVertical,
  Power,
  PowerOff
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServerInstance {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'maintenance' | 'error';
  region: string;
  type: string;
  cpu: number;
  memory: number;
  storage: number;
  ip: string;
  uptime: string;
  cost: string;
}

interface DomainRecord {
  id: string;
  name: string;
  type: 'A' | 'CNAME' | 'MX' | 'TXT' | 'NS';
  value: string;
  ttl: number;
  status: 'active' | 'pending' | 'error';
}

interface SSLCertificate {
  id: string;
  domain: string;
  issuer: string;
  validFrom: string;
  validTo: string;
  status: 'valid' | 'expiring' | 'expired' | 'pending';
  autoRenew: boolean;
}

export default function ServerManagement() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [servers] = useState<ServerInstance[]>([
    {
      id: '1',
      name: 'production-web-01',
      status: 'running',
      region: 'US East 1',
      type: 'VPS-4',
      cpu: 34,
      memory: 67,
      storage: 45,
      ip: '192.168.1.10',
      uptime: '99.9%',
      cost: '$29/mo'
    },
    {
      id: '2',
      name: 'staging-web-01',
      status: 'running',
      region: 'EU West 1',
      type: 'VPS-2',
      cpu: 12,
      memory: 23,
      storage: 18,
      ip: '192.168.1.11',
      uptime: '99.7%',
      cost: '$15/mo'
    },
    {
      id: '3',
      name: 'db-primary',
      status: 'maintenance',
      region: 'US East 1',
      type: 'DB-8',
      cpu: 0,
      memory: 0,
      storage: 78,
      ip: '192.168.1.20',
      uptime: '99.8%',
      cost: '$59/mo'
    }
  ]);

  const [domains] = useState<DomainRecord[]>([
    {
      id: '1',
      name: '@',
      type: 'A',
      value: '192.168.1.10',
      ttl: 300,
      status: 'active'
    },
    {
      id: '2',
      name: 'www',
      type: 'CNAME',
      value: 'veelops.com',
      ttl: 300,
      status: 'active'
    },
    {
      id: '3',
      name: 'mail',
      type: 'MX',
      value: 'mail.veelops.com',
      ttl: 300,
      status: 'active'
    }
  ]);

  const [sslCertificates] = useState<SSLCertificate[]>([
    {
      id: '1',
      domain: 'veelops.com',
      issuer: 'Lets Encrypt',
      validFrom: '2024-01-15',
      validTo: '2024-04-15',
      status: 'valid',
      autoRenew: true
    },
    {
      id: '2',
      domain: '*.api.veelops.com',
      issuer: 'DigiCert',
      validFrom: '2024-01-01',
      validTo: '2025-01-01',
      status: 'valid',
      autoRenew: false
    }
  ]);

  const statusColors = {
    running: 'text-green-400 bg-green-400/20',
    stopped: 'text-red-400 bg-red-400/20',
    maintenance: 'text-yellow-400 bg-yellow-400/20',
    error: 'text-red-500 bg-red-500/20',
    active: 'text-green-400 bg-green-400/20',
    pending: 'text-yellow-400 bg-yellow-400/20',
    valid: 'text-green-400 bg-green-400/20',
    expiring: 'text-orange-400 bg-orange-400/20',
    expired: 'text-red-400 bg-red-400/20'
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Server Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Servers', value: '3', icon: <Server className="w-6 h-6" />, change: '+0 this week' },
          { title: 'Total Bandwidth', value: '1.2 TB', icon: <Network className="w-6 h-6" />, change: '+340 GB' },
          { title: 'Uptime Average', value: '99.8%', icon: <Activity className="w-6 h-6" />, change: '+0.1%' },
          { title: 'Monthly Cost', value: '$103', icon: <BarChart3 className="w-6 h-6" />, change: '+$15' }
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { title: 'New Server', icon: <Plus className="w-5 h-5" />, action: () => setActiveTab('servers') },
            { title: 'DNS Settings', icon: <Globe className="w-5 h-5" />, action: () => setActiveTab('dns') },
            { title: 'SSL Certificates', icon: <Shield className="w-5 h-5" />, action: () => setActiveTab('ssl') },
            { title: 'File Manager', icon: <Folder className="w-5 h-5" />, action: () => setActiveTab('files') },
            { title: 'Email Accounts', icon: <Mail className="w-5 h-5" />, action: () => setActiveTab('email') },
            { title: 'Backup & Restore', icon: <Download className="w-5 h-5" />, action: () => setActiveTab('backups') }
          ].map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/80 transition-colors"
            >
              <div className="text-blue-400 mb-2">{action.icon}</div>
              <span className="text-sm text-white text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Resource Usage Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">CPU Usage (24h)</h3>
          <div className="h-32 bg-gray-800/50 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <span className="text-gray-400 ml-2">Chart visualization</span>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Bandwidth Usage</h3>
          <div className="h-32 bg-gray-800/50 rounded-lg flex items-center justify-center">
            <PieChart className="w-8 h-8 text-green-400" />
            <span className="text-gray-400 ml-2">Chart visualization</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Server Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Server production-web-01 restarted', time: '10 minutes ago', status: 'success' },
            { action: 'SSL certificate renewed for veelops.com', time: '2 hours ago', status: 'success' },
            { action: 'Database maintenance started on db-primary', time: '4 hours ago', status: 'warning' },
            { action: 'New DNS record added for api.veelops.com', time: '1 day ago', status: 'success' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-b-0">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-400' : 
                  activity.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                }`}></div>
                <span className="text-gray-300">{activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderServerManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Server Management</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Deploy New Server
        </button>
      </div>

      <div className="grid gap-6">
        {servers.map((server) => (
          <motion.div
            key={server.id}
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
                  <h3 className="text-lg font-semibold text-white">{server.name}</h3>
                  <p className="text-gray-400">{server.type} • {server.region}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[server.status]}`}>
                  {server.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Terminal className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mb-4">
              <div>
                <span className="text-gray-400">IP Address:</span>
                <p className="text-white">{server.ip}</p>
              </div>
              <div>
                <span className="text-gray-400">Uptime:</span>
                <p className="text-white">{server.uptime}</p>
              </div>
              <div>
                <span className="text-gray-400">CPU:</span>
                <p className="text-white">{server.cpu}%</p>
              </div>
              <div>
                <span className="text-gray-400">Memory:</span>
                <p className="text-white">{server.memory}%</p>
              </div>
              <div>
                <span className="text-gray-400">Cost:</span>
                <p className="text-white">{server.cost}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-green-600/20 text-green-400 border border-green-600/30 px-4 py-2 rounded-lg hover:bg-green-600/30 transition-colors flex items-center gap-2">
                <Power className="w-4 h-4" />
                Start
              </button>
              <button className="bg-red-600/20 text-red-400 border border-red-600/30 px-4 py-2 rounded-lg hover:bg-red-600/30 transition-colors flex items-center gap-2">
                <PowerOff className="w-4 h-4" />
                Stop
              </button>
              <button className="bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 px-4 py-2 rounded-lg hover:bg-yellow-600/30 transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Restart
              </button>
              <button className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-colors flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Console
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderDNSManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">DNS Management</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Add Record
        </button>
      </div>

      <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden">
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-4 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">DNS Records for veelops.com</h3>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700/50 bg-black/40">
                <th className="text-left p-4 text-gray-300">Name</th>
                <th className="text-left p-4 text-gray-300">Type</th>
                <th className="text-left p-4 text-gray-300">Value</th>
                <th className="text-left p-4 text-gray-300">TTL</th>
                <th className="text-left p-4 text-gray-300">Status</th>
                <th className="text-left p-4 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {domains.map((record) => (
                <tr key={record.id} className="border-b border-gray-700/30 hover:bg-gray-800/30">
                  <td className="p-4 text-white">{record.name}</td>
                  <td className="p-4 text-gray-300">{record.type}</td>
                  <td className="p-4 text-gray-300">{record.value}</td>
                  <td className="p-4 text-gray-300">{record.ttl}s</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[record.status]}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSSLManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">SSL Certificates</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Generate Certificate
        </button>
      </div>

      <div className="grid gap-6">
        {sslCertificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.domain}</h3>
                  <p className="text-gray-400">Issued by {cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[cert.status]}`}>
                  {cert.status}
                </span>
                <label className="flex items-center gap-2 text-sm text-gray-300">
                  <input 
                    type="checkbox" 
                    checked={cert.autoRenew}
                    className="rounded border-gray-600 bg-gray-800 text-blue-600"
                  />
                  Auto-renew
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Valid From:</span>
                <p className="text-white">{cert.validFrom}</p>
              </div>
              <div>
                <span className="text-gray-400">Valid To:</span>
                <p className="text-white">{cert.validTo}</p>
              </div>
              <div>
                <span className="text-gray-400">Days Until Expiry:</span>
                <p className="text-white">89 days</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <button className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="bg-green-600/20 text-green-400 border border-green-600/30 px-4 py-2 rounded-lg hover:bg-green-600/30 transition-colors flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Renew
              </button>
              <button className="bg-red-600/20 text-red-400 border border-red-600/30 px-4 py-2 rounded-lg hover:bg-red-600/30 transition-colors flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Revoke
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderEmailManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Email Management</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Create Email Account
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Email Accounts</h3>
          </div>
          <div className="space-y-3">
            {['admin@veelops.com', 'support@veelops.com', 'noreply@veelops.com'].map((email, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">{email}</span>
                </div>
                <button className="p-1 hover:bg-gray-700 rounded">
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Security Settings</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">SPF Record</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">DKIM</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-300">DMARC</span>
              <AlertCircle className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Usage Statistics</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Emails Sent Today</span>
              <span className="text-white">247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Storage Used</span>
              <span className="text-white">1.2 GB / 10 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Bounce Rate</span>
              <span className="text-white">0.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black select-text">
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
              <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-full">Server Panel</span>
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
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-black/60 backdrop-blur-sm border-r border-blue-500/20 p-6 min-h-screen">
            <div className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
                { id: 'servers', label: 'Servers', icon: <Server className="w-5 h-5" /> },
                { id: 'dns', label: 'DNS Management', icon: <Globe className="w-5 h-5" /> },
                { id: 'ssl', label: 'SSL Certificates', icon: <Shield className="w-5 h-5" /> },
                { id: 'email', label: 'Email', icon: <Mail className="w-5 h-5" /> },
                { id: 'files', label: 'File Manager', icon: <Folder className="w-5 h-5" /> },
                { id: 'databases', label: 'Databases', icon: <Database className="w-5 h-5" /> },
                { id: 'backups', label: 'Backups', icon: <Download className="w-5 h-5" /> },
                { id: 'monitoring', label: 'Monitoring', icon: <Activity className="w-5 h-5" /> },
                { id: 'security', label: 'Security', icon: <Lock className="w-5 h-5" /> },
                { id: 'users', label: 'Users', icon: <Users className="w-5 h-5" /> },
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
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 pb-12 min-h-full">
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'servers' && renderServerManagement()}
              {activeTab === 'dns' && renderDNSManagement()}
              {activeTab === 'ssl' && renderSSLManagement()}
              {activeTab === 'email' && renderEmailManagement()}
              {activeTab === 'files' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">File Manager</h2>
                  <p className="text-gray-400">Coming Soon - Advanced file management capabilities</p>
                </div>
              )}
              {activeTab === 'databases' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Database Management</h2>
                  <p className="text-gray-400">Coming Soon - Complete database administration tools</p>
                </div>
              )}
              {activeTab === 'backups' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Backup Management</h2>
                  <p className="text-gray-400">Coming Soon - Automated backup and restore functionality</p>
                </div>
              )}
              {activeTab === 'monitoring' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Advanced Monitoring</h2>
                  <p className="text-gray-400">Coming Soon - Real-time system monitoring and alerts</p>
                </div>
              )}
              {activeTab === 'security' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Security Center</h2>
                  <p className="text-gray-400">Coming Soon - Comprehensive security management</p>
                </div>
              )}
              {activeTab === 'users' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">User Management</h2>
                  <p className="text-gray-400">Coming Soon - Team collaboration and access control</p>
                </div>
              )}
              {activeTab === 'settings' && (
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Server Settings</h2>
                  <p className="text-gray-400">Coming Soon - Global server configuration options</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}