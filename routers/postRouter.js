const { Router } = require('express');
const {
    getPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/postController')


// Routers
Router.get('/', getPosts)
Router.post('/', createPost)
Router.get('/:id', getSinglePost)
Router.put('/:id', updatePost)
Router.delete('/:id', deletePost)

// Export Routers
module.exports = Router