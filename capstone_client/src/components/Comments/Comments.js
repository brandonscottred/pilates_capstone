import "./Comments.scss"
import { useState, useEffect, useRef } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = sessionStorage.getItem("authToken");
const user_id = sessionStorage.getItem("user_id");

function Commments(props) {

    const comment = props.comments

    const { exerciseId, username } = useParams();

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const comment = form.comment.value;

        const data = {
            "comment_text": comment,
            "exercise_id": exerciseId,
            "user_id": user_id
        }

        axios.post(`${baseUrl}/exercises/${exerciseId}/comments`, data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        .then((response) => {
            console.log(response.data)
        })
    }



    return(
        <>
        <div className='comment'>
            <form className="comment__form" id="commentsForm" method="POST" >
                <label className="comment__form--label" htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea className="comment__form--comment" name="comment" id="comment" placeholder=" Add a new comment" type="text"></textarea>
                <div className='comment__form--cta'>
                    <input onClick={handleSubmit} className="comment__form--cta-comment" type="submit" value="COMMENT"/>
                </div>
            </form>
        </div>
        <div className="comments">
            <h1 className="comments__title">Comments for Exercise</h1>
            {comment.length > 0 ? (
            <div className='comments__list' >
                {comment.map((comments) => (
                    <div key={comments.comment_id} className='comments__list--container'>
                        <p>{username}</p>
                        <p>{comments.comment_text}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p className='comments__list' >No comments yet. Be the first to post!</p>
        )}
        </div>
        </>
    )
}

export default Commments;