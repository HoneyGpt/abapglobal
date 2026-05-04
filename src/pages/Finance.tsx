import React from 'react';
import { Download, Plus } from 'lucide-react';

const Finance = () => {
  return (
    <div className="animate-fade-in delay-1">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="mb-2">Income & Expense</h1>
          <p className="text-muted">Manage opening & closing balances and track financial health.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-outline">
            <Download size={18} />
            Export Report
          </button>
          <button className="btn btn-primary">
            <Plus size={18} />
            New Entry
          </button>
        </div>
      </div>

      <div className="stat-grid mb-8">
        <div className="card">
          <div className="text-muted mb-2 font-semibold text-sm">Opening Balance</div>
          <div className="text-2xl font-bold">₹12,45,000</div>
        </div>
        <div className="card">
          <div className="text-muted mb-2 font-semibold text-sm">Total Income</div>
          <div className="text-2xl font-bold text-success">+ ₹3,50,000</div>
        </div>
        <div className="card">
          <div className="text-muted mb-2 font-semibold text-sm">Total Expenses</div>
          <div className="text-2xl font-bold text-danger">- ₹1,20,000</div>
        </div>
        <div className="card" style={{ background: 'var(--gradient-primary)', color: 'white', border: 'none' }}>
          <div className="mb-2 font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Closing Balance</div>
          <div className="text-2xl font-bold">₹14,75,000</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Recent Transactions</h3>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: 'Oct 24, 2026', desc: 'Server Hosting (Hostinger)', cat: 'IT Operations', type: 'Expense', amount: '₹3,499', bal: '₹14,75,000', c: 'danger' },
                { date: 'Oct 23, 2026', desc: 'General Donation Fund', cat: 'Donations', type: 'Income', amount: '₹10,000', bal: '₹14,78,499', c: 'success' },
                { date: 'Oct 22, 2026', desc: 'Event Setup - Kochi', cat: 'Events', type: 'Expense', amount: '₹25,000', bal: '₹14,68,499', c: 'danger' },
                { date: 'Oct 21, 2026', desc: 'Membership Renewals', cat: 'Subscriptions', type: 'Income', amount: '₹12,500', bal: '₹14,93,499', c: 'success' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="text-muted">{row.date}</td>
                  <td className="font-semibold">{row.desc}</td>
                  <td>{row.cat}</td>
                  <td>
                    <span className={`badge badge-${row.c}`}>{row.type}</span>
                  </td>
                  <td className={`font-semibold text-${row.c}`}>
                    {row.type === 'Income' ? '+' : '-'} {row.amount}
                  </td>
                  <td className="font-semibold">{row.bal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;
