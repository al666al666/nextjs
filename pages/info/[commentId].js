import { comments } from '../../data/comments'

import React from 'react'

function postDetail({ comment }) {
    return (
        <div key={comment.id}>
            <h1> {comment.id}- {comment.text}</h1>
        </div>
    )
}

export default postDetail

export async function getStaticPaths() {


    return {
        paths:[
            {params:{commentId:'1'}},
            {params:{commentId:'2'}},
            {params:{commentId:'3'}},
        ],
        fallback:false
        
    }
}

export function getStaticProps(context) {
    const { params } = context;
    const { commentId } = params
    const comment = comments.find((ele) => ele.id === parseInt(commentId))

    return {
        props: {
            comment,
        }
    }

}


// import React from 'react'

// function Info() {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Info
