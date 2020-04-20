import React from 'react'
import VideoDetails from './VideoDetail';
import VideoList from './VideoList';

export default function Main() {
    return (
        <>
            <main className="main-view">
                <VideoDetails />
                <VideoList />
            </main>
        </>
    )
}
