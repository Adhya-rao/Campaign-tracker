import React, { useState, useEffect } from "react";
import { register, login } from "../api";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.style.height = '100vh';
    html.style.margin = '0';
    html.style.padding = '0';
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.height = '100%';
    body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/image.png)`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    return () => {
      html.style.height = '';
      html.style.margin = '';
      html.style.padding = '';
      body.style.margin = '';
      body.style.padding = '';
      body.style.height = '';
      body.style.backgroundImage = '';
      body.style.backgroundSize = '';
      body.style.backgroundPosition = '';
      body.style.backgroundRepeat = '';
      body.style.display = '';
      body.style.justifyContent = '';
      body.style.alignItems = '';
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(formData.name, formData.password);
        setError("âœ… Registration successful! Please login.");
        setIsRegister(false);
      } else {
        const data = await login(formData.name, formData.password);
        localStorage.setItem("token", data.token);
        onLogin();
      }
    } catch (err) {
      setError(err.message || "âŒ Something went wrong!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card glass-effect">
        <h2>{isRegister ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isRegister
            ? "Join our platform in seconds"
            : "Login to continue tracking your campaigns"}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}

        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Donâ€™t have an account?"}{" "}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => {
              setError("");
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

