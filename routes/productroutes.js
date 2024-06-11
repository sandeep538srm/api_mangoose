const express = require("express");
const router = express.Router();
const productApi = require("../apis/productapis");
router.get("/fetch", productApi.products_all);
//insert a record
router.post("/insert", productApi.insert_product);
//update a record
router.put("/update", productApi.update_product);
//delete a record
router.delete("/delete", productApi.delete_product);

module.exports = router;
