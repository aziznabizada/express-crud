const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).send({ err: err });
}

module.exports = errorHandlerMiddleware