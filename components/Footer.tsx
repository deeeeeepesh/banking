import React from 'react';

const Footer = ({ user, type }: { user: any; type: string }) => {
  return (
    <footer className={`footer ${type}`}>
      <p>Logged in as {user.firstName} {user.lastName}</p>
    </footer>
  );
};

export default Footer;