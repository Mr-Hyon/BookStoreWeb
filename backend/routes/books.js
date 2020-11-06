const express = require('express');
const router = express.Router();
const Book = require('../models/book.model');

// get all books
router.get('/', async (req, res) => {
    try{
        const books = await Book.find();
        res.json(books);
    }catch(err){
        res.json({message: err});
    }
});

// get a specific book by id
router.get('/:bookId', async (req, res) => {
    try{
        const book = await Book.findById(req.params.bookId);
        res.json(book);
    }catch(err){
        res.json({message: err});
    }
});

// add a new book
router.post('/add', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
        price: req.body.price
    });
    try {
        const savedBook = await book.save();
        res.json(savedBook);
    } catch( err ){
        res.json( {message: err} );
    }
});

// update a book
router.patch("/:bookId", async (req,res) => {
    try{
        const updatedBook = await Book.updateOne(
            {_id: req.params.bookId},
            {$set:{title: req.body.title}}
        );
        res.json(updatedBook);
    }catch(err){
        res.json({message:err});
    }
});

// delete a book
// CAUTION: HARD DELETE!
router.delete('/:bookId', async (req, res) => {
    try{
        const removedBook = await Book.remove({_id: req.params.bookId});
        res.json(removedBook);
    }catch(err){
        res.json( {message: err} );
    }
});


module.exports = router;