import React, { useEffect } from 'react';
import Header from '../components/Header';
import Arts from '../containers/ArtsContainer';
import Opinion from '../containers/OpinionsContainer';
import Politics from '../containers/PoliticsContainer';
import Sports from '../containers/SportsContainer';
import Tech from '../containers/TechContainer';
import axios from 'axios'

const key = process.env.REACT_APP_API_KEY;

function MainPage() {

    const [arts, setArts] = React.useState(null);
    const [tech, setTech] = React.useState(null);
    const [opinion, setOpinion] = React.useState(null);
    const [us, setUS] = React.useState(null);

    useEffect(() => {
        Promise.all([
            axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${key}`),
            axios.get(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${key}`),
            axios.get(`https://api.nytimes.com/svc/topstories/v2/sundayreview.json?api-key=${key}`),
            axios.get(`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${key}`),
            axios.get(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${key}`)
        ]).then(data => {
            setArts(data[0].data.results);
            setTech(data[1].data.results);
            setOpinion(data[2].data.results);
            setUS(data[3].data.results);
            console.log(data[4].data)
        })
    }, []);


    return (
        <div className='main-body'>
            <div className="nyt-main-header">
                <Header />
            </div>
            <div className="section-container-mainpage">
                <div className='horizontal-sections'>
                    {arts && <Arts articles={arts} />}
                    {opinion && <Opinion articles={opinion} />}
                    {tech && <Tech articles={tech} />}
                </div>
                <div className='vertical-section'>
                    {us && <Politics articles={us} />}
                </div>
            </div>
        </div>
    )
}

export default MainPage