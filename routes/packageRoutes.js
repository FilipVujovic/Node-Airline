const express = require("express");
const router = express.Router();
const controllerImports = require("../util/controllerImports");
const { valiadteToken, isAdmin } = require("../controllers/authController");
const { check } = require("express-validator");

router.post(
  "/add-package",
  check("class").notEmpty().not(),
  check("classPackage").notEmpty().not(),
  controllerImports.packageController.addPackage
);
router.get("/packages", controllerImports.packageController.getPackages);
router.put(
  "/packages/:packageId",

  controllerImports.packageController.updatePackage
);
router.delete(
  "/packages/:packageId",

  controllerImports.packageController.deletePackage
);

module.exports = router;