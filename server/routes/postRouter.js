
import PostController from '../controllers/postController.js';
import express from 'express';
import auth from '../middleware/auth.js';

const router = express.Router();

router.route('/posts')
    .post(auth, PostController.createPost)
    .get(auth, PostController.getPosts)

router.route('/post/:id')
    .patch(auth, PostController.updatePost)
    .get(auth, PostController.getPost)
    .delete(auth, PostController.deletePost)

router.patch('/post/:id/like', auth, PostController.likePost)
router.patch('/post/:id/unlike', auth, PostController.unLikePost)
router.get('/user_posts/:id', auth, PostController.getUserPosts)
router.get('/post_discover', auth, PostController.getPostsDicover)
router.patch('/savePost/:id', auth, PostController.savePost)
router.patch('/unSavePost/:id', auth, PostController.unSavePost)
router.get('/getSavePosts', auth, PostController.getSavePosts)

export default router;