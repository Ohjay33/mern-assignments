const ProductController = require("../controllers/product.controller");
// const { findAllNinjas } = require("../controllers/ninja.controller");


module.exports = (app) =>{
    app.get("/api/products", ProductController.findAllNinjas);
    app.post("/api/products", ProductController.createNewNinja);
    app.get("/api/products/:id", ProductController.findOneNinja);
    app.put("/api/products/:id", ProductController.updateOneNinja);
    app.delete ("/api/products/:id", ProductController.deleteNinja);
}