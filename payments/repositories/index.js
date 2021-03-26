let makeRedisClient = (config) => {

    const redis = require("async-redis")
    const options = {
        host: config.redis_host,
        port: config.redis_port,
        password: process.env.REDIS_PASSWORD
    }

    return redis.createClient(options)
}

module.exports = (config, logger) => {

    //console.log('Entering payments.repositories.index.js')
    // logger.info('Entering payments.repositories.index.js')
    //logger.info(`Payment repository process.env.REDIS_PASSWORD = ${process.env.REDIS_PASSWORD}.`)

    const client = makeRedisClient(config)
    const paymentsRepo = require('./PaymentsRepository')(client)

    return {paymentsRepository: paymentsRepo}
}
