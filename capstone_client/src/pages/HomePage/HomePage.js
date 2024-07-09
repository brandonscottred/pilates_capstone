import "./HomePage.scss"
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'
import HeroExercise from "../../components/HeroExercise/HeroExercise";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import Comments from "../../components/Comments/Comments";

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = sessionStorage.getItem("authToken");

function HomePage() {

    const { username } = useParams()
    const [exerciseId, setExerciseId] = useState(null)
    const [mainExercise, setMainExercise] = useState({});
    const [exerciseList, setExerciseList] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMainExercise = (exerciseId) => {
        axios.get(`${baseUrl}/exercises/${exerciseId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response)
            setMainExercise(response.data)
            setExerciseId(response.data.exercise_id)
            setLoading(false)
        })
        return exerciseId;
    }



    useEffect(() => {

        const fetchExerciseList = () => {
            axios.get(`${baseUrl}/exercises`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                console.log(response)
                setExerciseList(response.data);
                const heroId = response.data[0].exercise_id;
                if (heroId) {
                    fetchMainExercise(heroId);
                } else {
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching exercises:', error);
                setError('Error fetching exercises. Please try again later.');
                setLoading(false);
            })
        }

        fetchExerciseList();
    }, [username]);


    useEffect(() => {
        if(exerciseId) {
            fetchMainExercise(exerciseId); 
        }
    }, [exerciseId]);

    useEffect(() => {
        if (mainExercise.length > 1) {
            setLoading(false);
        }
    }, [exerciseId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h1>Welcome {username}</h1>
            <HeroExercise mainExercise={mainExercise} />
            <Comments />
            <ExerciseList exerciseList={exerciseList} />
        </>
    )
}

export default HomePage;