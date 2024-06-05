import React from 'react';
import ReactDOM from 'react-dom';
import '../components/SignUpStylesModal.css';

const SignUpModal = ({ handleModal }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={handleModal}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default SignUpModal;
