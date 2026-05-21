export default class ProductsController {
  constructor() {}

  async getProductById(req, res, next) {
    try {
      const {id} = req.params; // Captura o "id" da URL
      const product = {id: 1, nome: "Teclado", disponivel: true}; // simulação de acesso ao BD

      if (!product) {
        return res.status(404).json({message: "Produto não encontrado"});
      }

      res.json(product);
    } catch (error) {
      next(error);
    }
  }

}