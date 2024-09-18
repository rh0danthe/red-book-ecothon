import React from 'react';

interface ReviewProps {
  review: {
    id: number;
    user: string;
    text: string;
    image: string;
  };
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="bg-[#d8d8d8] p-4 rounded-lg shadow-lg max-w-[400px]">
      <div className="flex items-center">
        <div className="bg-gray-400 w-[150px] h-[150px] rounded-lg flex items-center justify-center">
          <img src={review.image} alt="Изображение" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold">{`Пользователь ${review.user}`}</h3>
          <p className="text-sm text-gray-700">{review.text}</p>
        </div>
      </div>
    </div>
);
};

export default ReviewCard;