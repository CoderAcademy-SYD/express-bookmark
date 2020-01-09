const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BookmarkController = require("./../controllers/bookmark_controller");

router.post("/", celebrate({
    body: {
        title: Joi.string().required(),
        url: Joi.string().required()
    }
}), BookmarkController.create);

module.exports = router;