import React from 'react';
import Header from '../components/Header';
import Arts from '../containers/ArtsContainer';
import Opinion from '../containers/OpinionsContainer';
import Politics from '../containers/PoliticsContainer';
import Sports from '../containers/SportsContainer';
import Tech from '../containers/TechContainer';

function MainPage() {
    return (
        <div className='main-body'>
            <div className="nyt-main-header">
                <Header />
            </div>
            <div className="section-container-mainpage">
                <div className='horizontal-sections'>
                    <Arts />
                    <Opinion />
                    <Sports />
                    <Tech />
                </div>
                <div className='vertical-section'>
                    <Politics /> 
                </div>
            </div>
        </div>
    )
}

export default MainPage