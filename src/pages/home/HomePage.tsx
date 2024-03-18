/* eslint-disable @typescript-eslint/no-explicit-any */

import {useEffect, useState} from "react";
import HeroSection from "../../components/home/HeroSection";
import TrendingMusicSection from "../../components/home/TrendingMusicSection";
import {TMusic} from "../../types";
import { playlistData } from "../../data/playlist";

const HomePage = () => {
  const [playlists, setPlayLists] = useState<TMusic[]>([])

  useEffect(() => {
    setPlayLists(playlistData)
  }, [playlists])

  console.log(playlists)

  return (
    <div>
      <HeroSection />
      <div className="pt-8 mb-20">
        {/* <form onSubmit={handleSearchSubmit}>
          <div className="max-w-[70%] mx-auto flex">
            <input onChange={(e) => setSearchItem(e.target.value)} className="border border-gray-200 rounded-md py-3 px-4 w-full" type="search" placeholder="Search for artists, bands, tracks" />
            <button className="search-btn">Search</button>
          </div>
        </form> */}
      </div>

      {
        playlists?.map(item => <div key={item.id}>
        <audio src={item.src} controls></audio>
        </div>)
      }
  

      <TrendingMusicSection />
    </div>
  );
};

export default HomePage;