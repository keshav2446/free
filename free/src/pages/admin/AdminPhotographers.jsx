import { useState } from "react";
import "./admin.css";

const mockPhotographers = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    city: "New York",
    status: "pending",
  },
  {
    id: 2,
    name: "Alex Smith",
    email: "alex@example.com",
    city: "London",
    status: "approved",
  },
];

const AdminPhotographers = () => {
  const [photographers, setPhotographers] = useState(mockPhotographers);

  const updateStatus = (id, status) => {
    setPhotographers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status } : p
      )
    );
  };

  return (
    <div className="admin-page">
      <h1>Photographer Approvals</h1>
      <p className="muted">
        Review and manage photographer applications
      </p>

      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {photographers.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.city}</td>
                <td>
                  <span className={`status ${p.status}`}>
                    {p.status}
                  </span>
                </td>
                <td>
                  {p.status === "pending" && (
                    <>
                      <button
                        className="admin-btn success"
                        onClick={() =>
                          updateStatus(p.id, "approved")
                        }
                      >
                        Approve
                      </button>

                      <button
                        className="admin-btn danger"
                        onClick={() =>
                          updateStatus(p.id, "rejected")
                        }
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPhotographers;
