export default class ProductsController {
  constructor() {}

  async getProducts(req, res, next) {
    try {
      const products = [
        {id: 1, nome: "Teclado", disponivel: true},
        {id: 2, nome: "Mouse", disponivel: true},
        {id: 3, nome: "Monitor", disponivel: false},
        {id: 4, nome: "Caixa de Som", disponivel: false},
      ];
      res.json({productsList: products});
    } catch (error) {
      next(error);
    }
  }
}