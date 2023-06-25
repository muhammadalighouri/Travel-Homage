module.exports = {
    plugins: ['react'],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off',
    },
    globals: {
        google: 'readonly',
    },
};
