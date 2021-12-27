const Author = require("../models/author");

// Display list of all authors
exports.author_list = (req, res) => {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec(function (err, list_authors) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};

// Display detail page for a specific author
exports.author_detail = (req, res) => {
  res.send("NOT IMPLEMENTED: Author detail: " + req.params.id);
};

// Display author create form on GET
exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Display author create on POST
exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display author delete form on GET
exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Display author delete on POST
exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display author update form on GET
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Display author update on POST
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
