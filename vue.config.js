module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/dist' : '/'
    //For docker 
    //baseUrl: process.env.NODE_ENV === 'production' ? '' : '/'
};
