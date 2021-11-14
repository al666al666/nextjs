import React, { useState } from 'react'
import {useRouter} from 'next/router'
function index() {
    const route = useRouter() 
    // GET
    const [comments, getComments] = useState([]);
    const handleGet = async () => {
        const res = await fetch('api/comments');
        const data = await res.json();
        getComments(data)
    }
    // POST
    const [post, getPost] = useState('')
    const handlePost = async () => {
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post })
        })
        const data = await res.json();
        handleGet()

    }


    //DELETE
    const handleDelete = async commentId => {
        const res = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        handleGet()

    }

    //GET DETAIL

    const handleDetail =(id) =>{
        route.push(`/info/${id}`)
    }


    return (
        <div>
            <div className="">
                <input className="h-30 pl-5 py-5 text-2xl m-5 border-2 border-black " type="text" placeholder="enter post..." value={post} onChange={e => getPost(e.target.value)} />
                <button className="p-10 bg-black text-white text-2xl cursors-pointer mr-10 " onClick={handlePost}>
                    POST COMMENTS
                </button>
              
                <button className="p-10 bg-black text-white text-2xl cursors-pointer" onClick={handleGet}>
                    GET COMMENTS
                </button>
                <div className="comment w-full h-full bg-red-300 border-black border-2">
                  
                    <div className="comment-list">
                        {comments.map(ele => {
                            return (
                                <div key={ele.id}>
                                    <h1> <span> {ele.id} </span> - {ele.text} </h1>
                                    <button className="p-10 bg-black text-white text-2xl cursors-pointer mr-10 " onClick={handleDelete}>
                                        DELETE
                                    </button>
                                    <button className="p-10 bg-black text-white text-2xl cursors-pointer mr-10 " value={ele.id} onClick={e=>handleDetail(e.target.value)}>
                                        DETAIL
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
