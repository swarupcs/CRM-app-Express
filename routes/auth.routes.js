const res = require("express/lib/response");
const authController = require("../controllers/auth.controller");

module.exports = function(app){
    console.log("got the requesttt in routes");
    app.post("/crmapp/api/v1/auth/signup", authController.signup);
    app.post("/crmapp/api/v1/auth/signin", authController.signin);
    app.get("/crmapp/api/v1/auth/Test", (req, res) => {
        res.send("Hello from auth route");
    });
}