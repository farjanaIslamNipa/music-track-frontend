/* eslint-disable @typescript-eslint/no-explicit-any */

import {useEffect, useState} from "react";
import HeroSection from "../../components/home/HeroSection";
import TrendingMusicSection from "../../components/home/TrendingMusicSection";
import {TMusic} from "../../types";
import { playlistData } from "../../data/playlist";
import audio from '../../../public/audio/A_Moment_in_Time_-_Graham_Coe.mp3'
import Audio from "../../components/ui/Audio";


const HomePage = () => {
  const [playlists, setPlayLists] = useState<TMusic[]>([])

  useEffect(() => {
    setPlayLists(playlistData)
  }, [playlists])

 
  return (
    <div>
      <HeroSection />
      <div className="pt-8 mb-20">
        <form>
          <div className="max-w-[70%] mx-auto flex">
            <input className="border border-gray-200 rounded-md py-3 px-4 w-full" type="search" placeholder="Search for artists, bands, tracks" />
            <button className="search-btn">Search</button>
          </div>
        </form>
      </div>
      <div className="custom-container">
        <div className="grid grid-cols-5 gap-4">
          {
            playlists?.map(item => <div key={item.id}>
              <Audio audio={item} />
            </div>)
          }
        </div>
      </div>
      <TrendingMusicSection />
    </div>
  );
};

export default HomePage;