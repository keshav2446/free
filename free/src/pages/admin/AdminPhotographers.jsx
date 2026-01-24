import { useEffect, useState } from "react";
import "./admin.css";

const AdminPhotographers = () => {
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchPending = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/photographers/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Unauthorized or failed request");
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid response format");
      }

      setPhotographers(data);
    } catch (err) {
      console.error(err);
      setError("Admin authentication required");
    } finally {
      setLoading(false);
    }
  };

  const approvePhotographer = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/admin/photographers/${id}/approve`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPhotographers((prev) =>
        prev.filter((p) => p._id !== id)
      );
    } catch (err) {
      console.error("Approve failed", err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  if (loading) return <p className="muted">Loading...</p>;
  if (error) return <p className="muted">{error}</p>;

  return (
    <div className="admin-page">
      <h1>Photographer Approvals</h1>
      <p className="muted">
        Review and approve photographer applications
      </p>

      {photographers.length === 0 ? (
        <p className="muted">No pending photographers 🎉</p>
      ) : (
        <div className="admin-table-card">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {photographers.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.email}</td>
                  <td>{p.city}</td>
                  <td>
                    <button
                      className="admin-btn success"
                      onClick={() => approvePhotographer(p._id)}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPhotographers;
