const NinjaController = require("../controllers/ninja.controller");
// const { findAllNinjas } = require("../controllers/ninja.controller");


module.exports = (app) =>{
    app.get("/api/ninjas", NinjaController.findAllNinjas);
    app.post("/api/ninjas", NinjaController.createNewNinja);
    app.get("/api/ninjas/:id", NinjaController.findOneNinja);
    app.put("/api/ninjas/:id", NinjaController.updateOneNinja);
    app.delete ("/api/ninjas/:id", NinjaController.deleteNinja);
}