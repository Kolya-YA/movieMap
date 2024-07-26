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
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index} className="relative">
            <LuStar size={24} />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <LuStar size={24} className="fill-yellow-400 stroke-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;