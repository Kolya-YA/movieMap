import { LuStar } from 'react-icons/lu';

// 0~10 number -> 0~5 stars
const StarRating = ({ rating }) => {

  const normalizedRating = Math.max(0, Math.min(5, rating / 2));
  
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const fillPercentage = Math.min(100, Math.max(0, (normalizedRating - index) * 100));
        
        return (
          <div key={index} className="relative">
            <LuStar className="text-gray-300" size={24} />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <LuStar className="text-yellow-400" size={24} fill="currentColor" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;