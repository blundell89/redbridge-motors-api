export default Object.seal({
    data: {
        mongoUrl: process.env.mongoUrl || 'mongodb://localhost/redbridge-motors',
        listingCollection: 'listings'
    }
});