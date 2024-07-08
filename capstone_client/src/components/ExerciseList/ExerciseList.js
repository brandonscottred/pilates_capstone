import "./ExerciseList.scss"
import { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

function ExerciseList({ exerciseList }) {
    const { username } = useParams()


    return (
        <>
            <h1 className='title'>EXERCISES</h1>
            <div className="exercise-container">
                {exerciseList.map((exerciseList) => {
                return (
                    <div className='exerciselist' key={exerciseList.exercise_id}  >
                        <Link className='link' to={`/${username}/${exerciseList.exercise_id}`} onClick={window.scroll(0,0)}>
                            <img alt='' className='exerciselist__image' src={exerciseList.image} />
                        </Link>
                        <div className='exerciselist__info'>
                            <p className='exerciselist__info--name'>{exerciseList.exercise}</p>
                            <p className='exerciselist__info--type'>{exerciseList.type}</p>
                            <p className='exerciselist__info--description'>{exerciseList.description}</p>
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}

export default ExerciseList;