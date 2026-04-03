import React from 'react';
import logoImg from '../../src/assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img src={logoImg} alt="ZapShift Logo" />
      </div>
    </Link>
  );
};

export default Logo;
