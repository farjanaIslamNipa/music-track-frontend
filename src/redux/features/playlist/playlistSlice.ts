import {createSlice} from "@reduxjs/toolkit";
import {TMusic} from "../../../types";

type TInitialState = {
  playlists: TMusic[] | null;
  trending?: TMusic[] | null;
  recommended?: TMusic[] | null;
}

const initialState : TInitialState = {
  playlists: null,
  trending: null,
  recommended: null
}

const playlistSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    getPlaylists: (state, action) => {
      state.playlists = action.payload
    },
    getTrendingPlaylists: (state) => {
      state.trending = state?.playlists?.filter(playlist => playlist.isTrending === true)
    },
    getRecommendedPlaylists: (state) => {
      state.recommended = state?.playlists?.filter(playlist => playlist.isRecommended === true)
    },
  }
})

export const {getPlaylists, getTrendingPlaylists, getRecommendedPlaylists} = playlistSlice.actions;

export default playlistSlice.reducer