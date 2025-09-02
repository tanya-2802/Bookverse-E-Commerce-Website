import React, { useState } from "react";
import "./UserAuth.css";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../index";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { showToast } = useToast();
    const navigate = useNavigate();

    function handlePasswordReset(event) {
        event.preventDefault();

        // Always show success and redirect
        showToast("success", "", "Password changed successfully");
        setTimeout(() => navigate("/login"), 1000); // Delay so toast shows
    }

    return (
        <div className="user-auth-content-container">
            <form onSubmit={handlePasswordReset} className="user-auth-form">
                <h2>Reset Password</h2>

                <div className="user-auth-input-container">
                    <label htmlFor="reset-email"><h4>Email address</h4></label>
                    <input
                        id="reset-email"
                        className="user-auth-form-input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="user-auth-input-container">
                    <label htmlFor="reset-password"><h4>New Password</h4></label>
                    <input
                        id="reset-password"
                        className="user-auth-form-input"
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="solid-success-btn form-user-auth-submit-btn">
                    Reset Password
                </button>

                <div className="existing-user-container">
                    <Link to="/login" className="links-with-blue-underline existing-user-link">
                        Back to Login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export { ForgotPassword };