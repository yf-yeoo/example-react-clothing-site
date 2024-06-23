module.exports = { 
    devServer: { 
        headers: {
            'Cross-Origin-Embedder-Policy': 'unsafe-none', 
            'Cross-Origin-Opener-Policy': 'unsafe-none',
            'Cross-Origin-Resource-Policy': 'credentialess',
        }, 
    }, 
};