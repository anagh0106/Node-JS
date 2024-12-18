const validationSchema = (schema) => async (req, res, next) => {

    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next()
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }

}

module.exports = {
    validationSchema
}