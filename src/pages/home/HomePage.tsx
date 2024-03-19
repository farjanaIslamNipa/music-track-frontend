/* eslint-disable @typescript-eslint/no-explicit-any */

import {useEffect, useState} from "react";
import HeroSection from "../../components/home/HeroSection";
import TrendingMusicSection from "../../components/home/TrendingMusicSection";
import {TMusic} from "../../types";
import { playlistData } from "../../data/playlist";
import Audio from "../../components/ui/Audio";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getPlaylists} from "../../redux/features/playlist/playlistSlice";


const HomePage = () => {
  // const [playlists, setPlayLists] = useState<TMusic[]>([])
  const [searchItem, setSearchItem] = useState('')
  const [filteredPlayLists, setFilteredPlayLists] = useState<TMusic[]>([])

  const dispatch = useAppDispatch()

  const { playlists } = useAppSelector(state => state.playlists);


  useEffect(() => {
    dispatch(getPlaylists(playlistData))
    // setPlayLists(playlistData)
  }, [dispatch])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = playlists?.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredPlayLists(filteredItems);
  }
 
  return (
    <div>
      <HeroSection />
      <div className="pt-8 mb-20">
        <form>
          <div className="max-w-[70%] mx-auto flex">
            <input onChange={handleInputChange} className="border border-gray-200 rounded-md py-3 px-4 w-full" type="search" placeholder="Search for artists, bands, tracks" />
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
      <div className="custom-container">
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <TrendingMusicSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;