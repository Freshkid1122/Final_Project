import React from 'react';

const Dashboard = () => {
  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-success d-flex flex-column align-items-center py-4 shadow-sm">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4 fw-bold">Dashboard</span>
          </a>
          <ul className="nav nav-pills flex-column mb-auto mt-4 w-100">
            <li className="nav-item">
              <a href="#" className="nav-link text-white active" aria-current="page">
                <i className="bi bi-house me-2"></i>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-person me-2"></i>
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-gear me-2"></i>
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="col py-3">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Welcome to Your Dashboard</h2>
            <div>
              <span className="badge bg-success fs-6">Buyer</span>
            </div>
          </div>
          {/* Cards */}
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">View and edit your profile information.</p>
                  <a href="#" className="btn btn-outline-success btn-sm">Go to Profile</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Orders</h5>
                  <p className="card-text">Check your recent and past orders.</p>
                  <a href="#" className="btn btn-outline-success btn-sm">View Orders</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">Settings</h5>
                  <p className="card-text">Manage your account settings and preferences.</p>
                  <a href="#" className="btn btn-outline-success btn-sm">Settings</a>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive Table Example */}
          <div className="mt-5">
            <h4 className="mb-3">Recent Activity</h4>
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Activity</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025-05-30</td>
                    <td>Signed up</td>
                    <td><span className="badge bg-success">Success</span></td>
                  </tr>
                  <tr>
                    <td>2025-05-31</td>
                    <td>Placed an order</td>
                    <td><span className="badge bg-info">Pending</span></td>
                  </tr>
                  <tr>
                    <td>2025-06-01</td>
                    <td>Updated profile</td>
                    <td><span className="badge bg-warning text-dark">In Review</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;