import { configureStore } from '@reduxjs/toolkit';
import userReducer, { fetchUserProfile, setUser } from './userSlice/userSlice';
import { thunk } from 'redux-thunk';
import { getUserProfileFromLocalStorage } from '@/shared/lib/localStorage/localStorage.ts';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const initializeStore = async () => {
  const storedProfile = getUserProfileFromLocalStorage();
  if (storedProfile) {
    store.dispatch(setUser(storedProfile));
  } else {
    await store.dispatch(fetchUserProfile() as any);
  }
};

initializeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
