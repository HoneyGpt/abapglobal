import React from 'react';
import { Download, Filter, Plus } from 'lucide-react';

const Donations = () => {
  return (
    <div className="animate-fade-in delay-1">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="mb-2">Donation Management</h1>
          <p className="text-muted">Track and manage monetary and material donations.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-outline">
            <Filter size={18} />
            Filter
          </button>
          <button className="btn btn-primary">
            <Plus size={18} />
            Record Donation
          </button>
        </div>
      </div>

      <div className="card mb-6">
        <div className="card-header">
          <h3>Recent Donations</h3>
          <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
            <Download size={16} />
            Export CSV
          </button>
        </div>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Receipt ID</th>
                <th>Donor Name</th>
                <th>Type</th>
                <th>Amount / Item</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 'RCP-8091', name: 'Anonymous', type: 'Monetary', amount: '₹10,000', date: 'Oct 24, 2026', status: 'Completed', c: 'success' },
                { id: 'RCP-8090', name: 'John Doe', type: 'Material', amount: '50x Blankets', date: 'Oct 23, 2026', status: 'Pending Receipt', c: 'warning' },
                { id: 'RCP-8089', name: 'Priya Sharma', type: 'Monetary', amount: '₹5,000', date: 'Oct 22, 2026', status: 'Completed', c: 'success' },
                { id: 'RCP-8088', name: 'Global Tech', type: 'Monetary (POS)', amount: '₹25,000', date: 'Oct 21, 2026', status: 'Completed', c: 'success' },
                { id: 'RCP-8087', name: 'Amit Kumar', type: 'Material', amount: 'Food Supplies', date: 'Oct 21, 2026', status: 'Completed', c: 'success' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="font-semibold">{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td className="font-semibold">{row.amount}</td>
                  <td className="text-muted">{row.date}</td>
                  <td>
                    <span className={`badge badge-${row.c}`}>{row.status}</span>
                  </td>
                  <td>
                    <button className="btn btn-outline" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donations;
