import React from 'react';

const SiteUnderProgressAlert = () => {
    return (
        <div className="bg-yellow-400 text-black p-4 text-center">
            Site under progress. Visit our{' '}
            <a
                href="https://your-3d-website-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                3D website
            </a>
        </div>
    );
};

export default SiteUnderProgressAlert;
