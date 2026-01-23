import "./admin.css";

const AdminUsers = () => {
  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-header">
        <h1>User Management</h1>
        <p className="muted">
          View, verify, or suspend platform users
        </p>
      </div>

      {/* USERS TABLE */}
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>jane@example.com</td>
              <td>Photographer</td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>12 Jan 2025</td>
              <td>
                <button className="admin-btn small">Suspend</button>
              </td>
            </tr>

            <tr>
              <td>Alex Smith</td>
              <td>alex@example.com</td>
              <td>User</td>
              <td>
                <span className="status blocked">Blocked</span>
              </td>
              <td>02 Dec 2024</td>
              <td>
                <button className="admin-btn small danger">
                  Reactivate
                </button>
              </td>
            </tr>

            <tr>
              <td>Rahul Verma</td>
              <td>rahul@example.com</td>
              <td>User</td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>18 Jan 2025</td>
              <td>
                <button className="admin-btn small">Suspend</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
