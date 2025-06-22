// components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { auth } from './firebase.config';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!user) return <h2>Please log in to view your profile.</h2>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phoneNumber || 'Not provided'}</p>
      <p>Email Verified: {user.emailVerified ? 'Yes' : 'No'}</p>
      {!user.emailVerified && <p>Please verify your email to access all features.</p>}
    </div>
  );
};

export default UserProfile;
