const rateLimit = require("express-rate-limit")
const { logEvents } = require("./logger")

const loginLimiter = rateLimit({
  windowMs: 60 * 100,
  max: 5, // limit each IP address to 5 login request per minute
  message: {
    message:
      "Too many login attempts from this IP, please try again after a 60 second pause",
  },
  handler: (req, res, next, options) => {
    logEvents(
      `Too Many Requests: ${options.message.message}\t${req.method}\t{req.url}\t${req.headers.origin}`,
      "errLog.log"
    )
    res.status(options.statusCode).send(options.message)
  },
  standardHeaders: true, // return the rate limit info
  legacyHeaders: false, //Disable the `X-RateLimit` headers
})

module.exports = loginLimiter
