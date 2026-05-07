export const notFound = (req, res, next) => {
    res.status(404).json({
        message: "Esta rota nao existe na API!",
        method: req.nethod,
        path: req.originalUrl,
        status: 404,
    });
};

export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({
       message: "Erro interno do servidor!",
       error: err.message,
    });
};