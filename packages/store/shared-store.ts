import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './src/counter/counterSlice';
import mulreducer from './src/multipl/mul';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        multiple: mulreducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch