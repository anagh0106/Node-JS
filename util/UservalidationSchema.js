const zod = require("zod")

const userValidationSchema = zod.object({
    body: zod.object({
        name: zod.string().min(2).max(30),
        email: zod.string().email(),
        age: zod.number().int().positive().min(18).max(110),
        status: zod.boolean().default(false),
        password:zod.string().min(5).max(15)

    }).strict()
})

module.exports = userValidationSchema
