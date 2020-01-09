const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth_routes");
const BookmarkRoutes = require("./bookmark_routes");
const passport = require("passport");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/auth", AuthRoutes);
router.use("/bookmarks", passport.authenticate("jwt", { session: false }), BookmarkRoutes);

module.exports = router;