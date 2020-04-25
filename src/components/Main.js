import React from 'react'
import VideoDetails from './VideoDetail';
import VideoList from './VideoList';
import SideNav from './SideNav';

export default function Main() {
    return (
        <>
            <main className="main-view">
                <SideNav />
                <VideoDetails />
                <VideoList />
            </main>
        </>
    )
}
