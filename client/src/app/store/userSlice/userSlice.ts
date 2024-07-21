import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/user/User';
import axios from '@/shared/api';
import { saveUserProfileToLocalStorage } from '@/shared/lib/localStorage/localStorage.ts';

export interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
};

interface FetchUserProfileResponse {
  user: User;
}

export const fetchUserProfile = createAsyncThunk<User, void, {}>(
  'user/fetchUserProfile',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (_, thunkAPI) => {
    try {
      // Попытка получения профиля
      const response =
        await axios.get<FetchUserProfileResponse>('/auth/profile');
      localStorage.setItem('profile', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      // Если получение профиля не удалось, попробуем обновить токен
      await thunkAPI
        .dispatch(refreshToken())
        .unwrap()
        .catch((err) => {
          // Если обновление токена также не удалось, возвращаем ошибку
          return thunkAPI.rejectWithValue(err);
        });

      // Попробуем получить профиль снова после обновления токена
      try {
        const response =
          await axios.get<FetchUserProfileResponse>('/auth/profile');
        localStorage.setItem('profile', JSON.stringify(response.data));
        return response.data;
      } catch (secondError) {
        return thunkAPI.rejectWithValue(secondError);
      }
    }
  },
);

export const refreshToken = createAsyncThunk<void, void, {}>(
  'user/refreshToken',
  async (_, thunkAPI) => {
    try {
      await axios.post('/auth/refresh');
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    clearUser(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setError(state) {
      state.status = 'failed';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isAuthenticated = true;
          state.user = action.payload;
          state.status = 'idle';
          saveUserProfileToLocalStorage(action.payload);
        },
      )
      .addCase(fetchUserProfile.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setUser, clearUser, setError } = userSlice.actions;
export default userSlice.reducer;
