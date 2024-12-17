import { useState } from 'react';
import './Link-website.css';
import logo from '../../assets/TrispiderLogo.avif';

function TrispiderPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiLink] = useState('https://web.ezykam.com/login'); // Your API link

  const handleApiLinkClick = () => {
    setShowLogin(true); // Show login form when API button is clicked
  };

  const handleLogin = () => {
    // Simple authentication logic (can be replaced with real authentication)
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      // After login, open the API link directly
      window.open(apiLink, '_blank');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="trispider-container">
      {/* Trispider Logo */}
      <img src={logo} alt="Trispider Logo" className="trispider-logo" />

      {/* API Link Registration Button */}
      <button onClick={handleApiLinkClick} className="api-link-btn">API Link Registration</button>

      {showLogin && !isAuthenticated && (
        <div className="login-form">
          {/* Username input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          {/* Login Button */}
          <button onClick={handleLogin} className="login-btn">Login</button>
        </div>
      )}
    </div>
  );
}

export default TrispiderPage;
