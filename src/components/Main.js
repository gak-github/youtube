import React, { useContext } from 'react'
import VideoDetails from './VideoDetail';
import VideoList from './VideoList';
import SideNav from './SideNav';
import { GlobalContext } from '../context/GlobalState';

export default function Main() {
  const { isTestData } = useContext(GlobalContext);

    return (
        <>
            { isTestData && <header className='warning'>
                <p>The daily data limit for youtube API has exceeded now so your search may not yield new results. Please try again tomorrow to search other videos.</p>
                </header>
            }
            <main className="main-view">
                <SideNav />
                <VideoDetails />
                <VideoList />
            </main>
        </>
    );
}
