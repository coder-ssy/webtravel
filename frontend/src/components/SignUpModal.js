import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../components/SignUpStylesModal.css';

const SignUpModal = ({ handleModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={handleModal}>
          &times;
        </span>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </>
          )}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-form">
          {isLogin
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Login'}
        </p>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default SignUpModal;
