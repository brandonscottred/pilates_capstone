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

    const { username, exerciseId } = useParams()
    const [mainExercise, setMainExercise] = useState({ mainExercise: null });
    const [exerciseList, setExerciseList] = useState({ exerciseList: [] })
    const [comments, setComments] = useState({ comments: [] })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchExerciseList = () => {
        axios.get(`${baseUrl}/exercises`, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
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

    const fetchMainExercise = (exerciseId) => {
        axios.get(`${baseUrl}/exercises/${exerciseId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            setMainExercise({ mainExercise: response.data })
        })
    }

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${baseUrl}/exercises/${exerciseId}/comments`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching comments:', error);
            setError('Error fetching comments. Please try again later.');
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchExerciseList();
    }, [token]);


    useEffect(() => {
        if(exerciseId) {
            fetchMainExercise(exerciseId); 
            fetchComments(exerciseId)
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
            <Comments comments={comments.comments} />
            <ExerciseList exerciseList={exerciseList.exerciseList} />
        </>
    )
}

export default HomePage;