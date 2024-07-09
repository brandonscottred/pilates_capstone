import "./Comments.scss"
import { useState, useEffect, useRef } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'

function formatDate(timestamp) {
    let toDate = new Date(timestamp).getDate();
    let toMonth = new Date(timestamp).getMonth()+1;
    let toYear = new Date(timestamp).getFullYear();
    let original_date = toMonth+'/'+toDate+'/'+toYear;
    return(original_date)
}

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = sessionStorage.getItem("authToken");

function Commments({ comments }) {
     const { username, exerciseId } = useParams();

     const postComment = (exerciseId) => {
        axios.post(`${baseUrl}/exercises/${exerciseId}/comments`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {

        })
    }


    return(
        <>
        <div className='comments'>
            <form className="comments__form" id="commentsForm" action="" >
                <label className="comments__form--label" htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea className="comments__form--comment" name="comment" id="comment" placeholder=" Add a new comment" type="text"></textarea>
                <div className='comments__form--cta'>
                    <input className="comments__form--cta-comment" type="submit" value="COMMENT"/>
                </div>
            </form>
        </div>
        <div>
            <h1>Comments for Exercise</h1>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.comment_id}>{comment.comment_text}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet. Be the first to post!</p>
            )}
        </div>
        </>
    )
}

export default Commments;