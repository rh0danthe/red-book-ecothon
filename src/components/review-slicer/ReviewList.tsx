// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import ReviewsSlice from "./ReviewsSlice.ts";

// const ReviewsList: React.FC = () => {
//   const reviews = useSelector((state: RootState) => state.reviews.reviews);

//   if (!reviews) return null;

//   return (
//     <div>
//       {reviews.map(review => {
//         return (
//         <div key={review.id}>
//           <p>{review.user}</p>
//           <p>{review.text}</p>
//         </div>
//         )
//       }
//       )}
//     </div>
//   );
// };

// export default ReviewsList;