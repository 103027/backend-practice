const asyncHandler = (func) => async (req, resp, next) => {
    try {
        await func(req,resp,next)
    } catch (error) {
        resp.status(err.code || 500 ).json({
            success:false,
            message: err.message
        })
    }
}

export { asyncHandler }