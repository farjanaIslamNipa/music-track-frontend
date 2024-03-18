import {BaseQueryApi} from "@reduxjs/toolkit/query";

export type TError = {
  data : {
    message: string;
    success?: boolean;
  },
  status: number
}

export type TResponse<T> = {
  data?: T;
  error?: TError;
  success?: boolean;
  message: string;
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi

export type TMusic = {
  id: number;
  singer: string;
  title: string;
  album: string;
  coverImg: string;
  isTrending: boolean;
  isRecommended: boolean;
  src:string;
}

