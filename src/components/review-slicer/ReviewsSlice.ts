// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Review {
//   id: number;
//   user: string;
//   text: string;
//   image: string;
// }

// interface ReviewsState {
//   count: 0;
//   reviews: Review[];
// }

// const initialState: ReviewsState = {
//   reviews: [
//     {
//       id: 1,
//       user: 'Ирина',
//       text: 'Здравствуйте! Сегодня мне довелось встретить редкую орхидею в Измайловском лесу...',
//       image: '/path/to/image1.jpg',
//     },
//     {
//       id: 2,
//       user: 'Николай',
//       text: 'Добрый день! Сегодня, 18 сентября 2024 года, я заметил ладожскую нерпу...',
//       image: '/path/to/image2.jpg',
//     },
//   ],
// };

// export const reviewsSlice = createSlice({
//   name: 'reviews',
//   initialState: {
//     count: 0
//   },
//   reducers: {
//     increment(state){
//       state.count = state.count + 1;
//     },
//     decrement(state){
//       state.count = state.count - 1;
//     }
//   },
// });

// export default reviewsSlice.reducer
// export const {increment, decrement } = reviewsSlice.actions