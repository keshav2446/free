import "./admin.css";

const AdminUsers = () => {
  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-header">
        <h1>Photographer Management</h1>
        <p className="muted">
          Manage photographers, their status, and platform access
        </p>
      </div>

      {/* PHOTOGRAPHERS TABLE */}
      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Verified</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Vishu Verma</td>
              <td>vishuverma@example.com</td>
              <td>Lahore</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>12 Jan 2025</td>
              <td>
                <button className="admin-btn small danger">
                  Suspend
                </button>
              </td>
            </tr>

            <tr>
              <td>Keshav Singh</td>
              <td>keshavsingh@example.com</td>
              <td>Moradabad</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>
                <span className="status muted">Inactive</span>
              </td>
              <td>02 Dec 2024</td>
              <td>
                <button className="admin-btn small success">
                  Activate
                </button>
              </td>
            </tr>

            <tr>
              <td>Mika</td>
              <td>mika@example.com</td>
              <td>Rampur</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>
                <span className="status muted">Inactive</span>
              </td>
              <td>02 Dec 2024</td>
              <td>
                <button className="admin-btn small success">
                  Activate
                </button>
              </td>
            </tr>

            <tr>
              <td>Vaibhav Gupta</td>
              <td>vaibhavgupta@example.com</td>
              <td>Delhi</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>18 Jan 2025</td>
              <td>
                <button className="admin-btn small danger">
                  Suspend
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
