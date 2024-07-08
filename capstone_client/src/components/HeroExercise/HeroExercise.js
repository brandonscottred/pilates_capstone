import "./HeroExercise.scss"
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'

function HeroExercise({ mainExercise }) {
    const { exerciseId } = useParams()
    const image = mainExercise.image;
    console.log(image)

    return (
        <>
        <section className="exercise">
                <div className="exercise__info">
                <p className='exercise__info--name'>{mainExercise.exercise}</p>
                <p className='exercise__info--type'>{mainExercise.type}</p>
                <p className='exercise__info--description'>{mainExercise.description}</p>
            </div>
            <div className="exercise__hero">
                <img src={image} alt='' className="exercise__hero--img" />
            </div>

            <div className="exercise__comments">

            </div>
        </section>
        </>
    )
}

export default HeroExercise;