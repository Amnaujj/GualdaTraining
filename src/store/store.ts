import { configureStore } from '@reduxjs/toolkit';
import { filmsSlice } from './slices/filmsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore ({
    reducer: {
        films: filmsSlice.reducer
    },
})

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector