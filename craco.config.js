module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];
            return webpackConfig;
        },
    },
};
