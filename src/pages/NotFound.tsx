import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary inline-flex">
          <Home className="w-5 h-5" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
