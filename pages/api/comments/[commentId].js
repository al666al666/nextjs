import {comments} from '../../../data/comments'


export default function handler(req,res){

    const {commentId} =req.query ; 
    const indexId = comments.find(ele=>ele.id === parseInt(commentId))
    comments.splice(indexId ,1) ; 
    res.status(201).json(comments)
}