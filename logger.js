const logger = (req, res, next) => {
    console.log(req.method, req.originalUrl)
    next()
}

module.exports = logger

// we will be able to see on the npm run dev when someone uses the app and records what they do. eg GET /fruits/ when someone goes onto the /fruits browser or refreshes that page