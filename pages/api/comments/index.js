import {comments} from '../../../data/comments'

export default function handler(req,res){
  if(req.method === 'GET') {
    res.status(200).json(comments)
  }
  if(req.method === 'POST'){
    const post = req.body.post ; 
    const newPost = {
      id:Date.now() , 
      text :post
    }
    comments.push(newPost)
  }
}