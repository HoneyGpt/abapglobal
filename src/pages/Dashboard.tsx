import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, Wallet, CreditCard, Activity } from 'lucide-react';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="mb-2">Admin Dashboard</h1>
          <p className="text-muted">Welcome back! Here's an overview of the Spazehive network.</p>
        </div>
        <button className="btn btn-primary">
          Generate Report
        </button>
      </div>

      <div className="stat-grid">
        <div className="card stat-card delay-1">
          <div className="stat-icon-wrapper">
            <Wallet size={24} />
          </div>
          <div className="stat-value text-gradient">₹24,50,000</div>
          <div className="stat-label">Total Revenue (YTD)</div>
          <div className="stat-trend trend-up">
            <ArrowUpRight size={16} />
            <span>+12.5% from last month</span>
          </div>
        </div>
        
        <div className="card stat-card delay-2">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(236, 72, 153, 0.1)', color: 'var(--accent-tertiary)' }}>
            <Users size={24} />
          </div>
          <div className="stat-value">12,450</div>
          <div className="stat-label">Total Subscribed Members</div>
          <div className="stat-trend trend-up">
            <ArrowUpRight size={16} />
            <span>+4.2% from last month</span>
          </div>
        </div>

        <div className="card stat-card delay-3">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>
            <CreditCard size={24} />
          </div>
          <div className="stat-value">₹3,20,000</div>
          <div className="stat-label">Recent Donations</div>
          <div className="stat-trend trend-up">
            <ArrowUpRight size={16} />
            <span>+18.1% from last month</span>
          </div>
        </div>

        <div className="card stat-card delay-3">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>
            <Activity size={24} />
          </div>
          <div className="stat-value">845</div>
          <div className="stat-label">Active POS Transactions</div>
          <div className="stat-trend trend-down">
            <ArrowDownRight size={16} />
            <span>-2.4% from last week</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mb-8" style={{ flexWrap: 'wrap' }}>
        <div className="card flex-1" style={{ minWidth: '600px' }}>
          <div className="card-header">
            <h3>Income vs Expense</h3>
            <div className="badge badge-primary">Current Year</div>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-tertiary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-tertiary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: '12px' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Area type="monotone" dataKey="income" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorIncome)" />
                <Area type="monotone" dataKey="expense" stroke="var(--accent-tertiary)" fillOpacity={1} fill="url(#colorExpense)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card" style={{ flex: '0 0 350px' }}>
          <div className="card-header">
            <h3>Recent Activity</h3>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { t: 'Donation Received', p: '₹5,000 from Rajesh K.', time: '10 mins ago', c: 'success' },
              { t: 'POS Transaction', p: 'Terminal: Kochi Branch', time: '1 hour ago', c: 'primary' },
              { t: 'Stock Updated', p: '50x T-Shirts Added', time: '3 hours ago', c: 'warning' },
              { t: 'New Member', p: 'Guest upgraded to Subscribed', time: '5 hours ago', c: 'primary' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center" style={{ paddingBottom: '16px', borderBottom: i !== 3 ? '1px solid var(--border-color)' : 'none' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: `var(--${item.c})` }}></div>
                <div style={{ flex: 1 }}>
                  <div className="font-semibold" style={{ fontSize: '0.95rem' }}>{item.t}</div>
                  <div className="text-muted" style={{ fontSize: '0.85rem' }}>{item.p}</div>
                </div>
                <div className="text-muted" style={{ fontSize: '0.8rem' }}>{item.time}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-outline" style={{ width: '100%', marginTop: '16px' }}>View All Activity</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
