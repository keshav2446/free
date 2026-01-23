import "./admin.css";

const AdminPhotographers = () => {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Photographers</h1>
        <p className="muted">
          Review, approve or reject photographer applications
        </p>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>jane@example.com</td>
              <td>Delhi</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>
                <button className="admin-btn small primary">
                  Approve
                </button>
                <button className="admin-btn small danger">
                  Reject
                </button>
              </td>
            </tr>

            <tr>
              <td>Alex Smith</td>
              <td>alex@example.com</td>
              <td>Mumbai</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="admin-btn small">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPhotographers;
