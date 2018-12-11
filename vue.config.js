module.exports = {
    //baseUrl: process.env.NODE_ENV === 'production' ? '/dist' : '/'
    //For docker 
    //baseUrl: process.env.NODE_ENV === 'production' ? '' : '/'

    baseUrl: process.env.NODE_ENV === 'production'
    ? '/disappearing_market/'
    : '/',
    //outputDir Default: 'dist'
    outputDir: 'disappearing_market'
};
