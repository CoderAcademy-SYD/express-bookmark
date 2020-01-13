async function create(req, res) {
    req.user.bookmarks.push(req.body);
    await req.user.save();
    res.json(req.user.bookmarks);
}

function index(req, res) {
    return res.json(req.user.bookmarks);
}

module.exports = {
    create,
    index
}