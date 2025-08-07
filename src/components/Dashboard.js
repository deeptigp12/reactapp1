import React from 'react';

function Dashboard() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Dashboard - Image Carousel</h2>
            <div style={{ display: 'flex', overflowX: 'scroll', gap: '10px' }}>
                <img src="https://th.bing.com/th/id/OIP.mMWuzEPKzws6n-oi_7pAyQHaEo?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="1" />
                <img src="https://th.bing.com/th/id/OIP.k1U-SFSZlXTccE5WvQzDFQHaEo?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="2" />
                <img src="https://th.bing.com/th/id/OIP.p2fHMMCFuzpOR1dZpOvmOAHaNJ?w=115&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="3" />
                <img src="https://th.bing.com/th/id/OIP.WPbIjTVzybLkt-gTPKC8SQHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="4" />
            </div>
        </div>
    );
}

export default Dashboard;
