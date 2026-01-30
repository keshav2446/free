import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Messages.css";

const Messages = () => {
  const navigate = useNavigate();

  // demo data (later backend se aayega)
  const messages = [
    {
      id: 1,
      from: "Amit Sharma",
      username: "amit-sharma",
      project: "Wedding Shoot – Assistant Photographer",
      message: "Hi, I’m interested in joining your wedding shoot.",
      date: "30 Jan 2026"
    },
    {
      id: 2,
      from: "Neha Kapoor",
      username: "neha-kapoor",
      project: "Pre-Wedding Video Project",
      message: "Can you share more details about the shoot?",
      date: "29 Jan 2026"
    }
  ];

  /* 🔥 REPLY MODAL STATE */
  const [activeMessage, setActiveMessage] = useState(null);
  const [replyText, setReplyText] = useState("");

  const sendReply = () => {
    if (!replyText.trim()) return alert("Please type a message");

    console.log("REPLY SENT 👉", {
      to: activeMessage.from,
      message: replyText
    });

    alert("Reply sent (frontend only)");
    setReplyText("");
    setActiveMessage(null);
  };

  return (
    <div className="messages-page">
      {/* HEADER */}
      <div className="messages-header">
        <h1>Messages</h1>
        <p>All inquiries from crew members will appear here</p>
      </div>

      {messages.length === 0 ? (
        <p className="empty">No messages yet.</p>
      ) : (
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className="message-card">
              <div className="message-top">
                <strong>{msg.from}</strong>
                <span className="date">{msg.date}</span>
              </div>

              <p className="project">{msg.project}</p>
              <p className="text">{msg.message}</p>

              <div className="message-actions">
                <button
                  className="primary-btn"
                  onClick={() => setActiveMessage(msg)}
                >
                  Reply
                </button>

                <button
                  className="secondary-btn"
                  onClick={() =>
                    navigate(`/photographers/${msg.username}`)
                  }
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔥 REPLY MODAL */}
      {activeMessage && (
        <div className="crew-modal-overlay">
          <div className="crew-modal">
            <h3>Reply to {activeMessage.from}</h3>

            <p className="project">{activeMessage.project}</p>

            <textarea
              rows="4"
              placeholder="Type your reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />

            <div className="modal-actions">
              <button className="primary-btn" onClick={sendReply}>
                Send Reply
              </button>

              <button
                className="danger-btn"
                onClick={() => setActiveMessage(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
