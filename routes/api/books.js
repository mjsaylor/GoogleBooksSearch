const router = require("express").Router();
const models = require("../../models");
const gba = require("../../utils/googlebooksapi")

// Matches with "/api/books"
router.route("/")
  .get(models.book.findAll)
  .post(models.book.create);

// Matches with "/api/books/search"
router.route("/search")
  .get((req, res) => {
    console.log(req.query)
    gba.searchByTitle(req.query.title)
      .then(bookData => {
        res.json(bookData)
      }).catch(err => {
        res.json({ error: err.message })
      })
  })

// Matches with "/api/books/:id"
router.route("/:id")
  .delete(models.book.remove);



module.exports = router;
