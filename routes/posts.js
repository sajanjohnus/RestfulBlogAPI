module.exports = {
    getPosts(req, res) {
      //res.status(200).send(req.store.posts)
      res.status(200).send(req.store.posts);
    },
    addPost(req, res) {
      let newPost = req.body
      let id=req.store.posts.length
      req.store.posts.push(newPost)
      res.status(201).send({id:id})
    },
    updatePost(req, res) {
   
        req.store.posts[req.params.postId]= Object.assign(req.store.posts[req.params.postId],req.body);
        res.status(200).send(req.store.posts[req.params.postId])
    
  
    },
    removePost(req, res) {
      req.store.posts.splice(req.params.id,1)
      res.status(204).send()
    }
  }