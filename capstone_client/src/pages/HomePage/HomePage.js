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
    const [mainExercise, setMainExercise] = useState(null);
    const [exerciseList, setExerciseList] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);

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
                console.log(heroId)
                fetchMainExercise(heroId)
                return
            })
            .catch((error) => {
                console.error('Error fetching exercises:', error);

            })
        }
        fetchExerciseList();
    }, []);


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
                setLoading(false)
                return
            })
        }

        const fetchExerciseComments = (exerciseId) => {
            axios.get(`${baseUrl}/exercises/${exerciseId}/comments`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })  
                .then((response) => {
                    console.log('comments',response)
                    if (response.data.length > 1) {
                        setCommentList(response.data)
                        return
                    }
                })      
            }

    useEffect(() => {
        if (exerciseId) {
            fetchMainExercise(exerciseId)
            // fetchExerciseComments(exerciseId)
        }
    }, [exerciseId])

    if (loading) {
        return <p>...Loading</p>
    }


    return (
        <>
            <h1>Welcome {username}</h1>
            <HeroExercise mainExercise={mainExercise} />
            <Comments comments={commentList} />
            <ExerciseList exerciseList={exerciseList} />
        </>
    )
}

export default HomePage;