import React from 'react';
import { Send, Image as ImageIcon, MessageSquare } from 'lucide-react';

const Communications = () => {
  return (
    <div className="animate-fade-in delay-1">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="mb-2">Messaging & Notifications</h1>
          <p className="text-muted">Broadcast messages and automated wishes to members.</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="card flex-1">
          <div className="card-header">
            <h3>New Broadcast</h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Target Audience</label>
              <select className="form-control">
                <option>All Members (National)</option>
                <option>State Level (Kerala)</option>
                <option>District Level (Ernakulam)</option>
                <option>Branch Level (Kochi)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Message Title</label>
              <input type="text" className="form-control" placeholder="Enter notification title" />
            </div>

            <div className="form-group">
              <label className="form-label">Message Body</label>
              <textarea className="form-control" rows={5} placeholder="Type your message here..."></textarea>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button type="button" className="btn btn-outline">
                <ImageIcon size={18} />
                Attach Media
              </button>
              <button type="submit" className="btn btn-primary">
                <Send size={18} />
                Send Notification
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-6" style={{ flex: '0 0 350px' }}>
          <div className="card">
            <div className="card-header">
              <h3>Automated Wishes</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">Birthdays Today</div>
                  <div className="text-sm text-muted">24 Members</div>
                </div>
                <div className="badge badge-success">Sent</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">Anniversaries Today</div>
                  <div className="text-sm text-muted">8 Members</div>
                </div>
                <div className="badge badge-success">Sent</div>
              </div>
            </div>
            <button className="btn btn-outline" style={{ width: '100%', marginTop: '20px' }}>Manage Templates</button>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Recent Broadcasts</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MessageSquare size={18} className="text-primary mt-1" />
                <div>
                  <div className="font-semibold text-sm">Monthly Meeting Circular</div>
                  <div className="text-xs text-muted">Sent to: Kerala State • 2 days ago</div>
                </div>
              </div>
              <div className="flex gap-3">
                <MessageSquare size={18} className="text-primary mt-1" />
                <div>
                  <div className="font-semibold text-sm">New Pinelabs Integration Live</div>
                  <div className="text-xs text-muted">Sent to: All Members • 1 week ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communications;
