import "./HomePage.scss"
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'
import HeroExercise from "../../components/HeroExercise/HeroExercise";
import ExerciseList from "../../components/ExerciseList/ExerciseList";

const baseUrl = process.env.REACT_APP_BASE_URL;

function HomePage() {

    const { username, exerciseId } = useParams()
    const token = sessionStorage.getItem("authToken");
    const [mainExercise, setMainExercise] = useState({ mainExercise: null });
    const [exerciseList, setExerciseList] = useState({ exerciseList: [] })
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
            setMainExercise({ mainExercise: response.data })
        })
    }
    

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
            setExerciseList({ exerciseList: response.data });
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
        })
    }

    useEffect(() => {
        fetchExerciseList();
    }, [token]);


    useEffect(() => {
        if(exerciseId) {
            console.log(exerciseId)
            fetchMainExercise(exerciseId); 
        }
    }, [exerciseId, token]);

    useEffect(() => {
        if (mainExercise.mainExercise !== null) {
            setLoading(false);
        }
    }, [mainExercise]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }


    return (
        <>
            <h1>Welcome {username}</h1>
            <HeroExercise mainExercise={mainExercise.mainExercise} />
            
            <ExerciseList exerciseList={exerciseList.exerciseList} />
        </>
    )
}

export default HomePage;