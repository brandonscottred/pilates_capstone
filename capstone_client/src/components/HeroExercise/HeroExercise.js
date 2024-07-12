import "./HeroExercise.scss"

function HeroExercise(props) {

    const mainExercise = props.mainExercise[0];

    return (
        <>
        <section className="exercise">
                <div className="exercise__info">
                <p className='exercise__info--name'>{mainExercise.exercise}</p>
                <p className='exercise__info--type'>{mainExercise.type}</p>
                <p className='exercise__info--description'>{mainExercise.description}</p>
            </div>
            <div className="exercise__hero">
                <img src={mainExercise.image} alt='' className="exercise__hero--img" />
            </div>
        </section>
        </>
    )
}

export default HeroExercise;