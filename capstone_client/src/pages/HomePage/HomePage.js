import "./HomePage.scss"
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import axios from 'axios'

function HomePage() {
    const { username } = useParams()

    return (
        <>
        </>
    )
}

export default HomePage;