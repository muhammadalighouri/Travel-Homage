import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../scss/EmailConfirmation.css'; // Assuming you'll create this

function EmailConfirmation() {
    const { token } = useParams(); // Extract the token from the URL
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5000/confirm_email/${token}`)
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    }, [token]);

    return (
        <div className="confirmation-container">
            {error ? (
                <div className="alert error">{error}</div>
            ) : (
                <div className="alert success">{message}</div>
            )}
        </div>
    );
}

export default EmailConfirmation;
