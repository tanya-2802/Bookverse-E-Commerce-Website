import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  const renderStars = () => {
    return [...Array(5)].map((_, i) => {
      const starValue = i + 1;
      return (
        <span key={i}>
          {value >= starValue ? (
            <FaStar className="text-yellow-400 inline-block text-lg" />
          ) : value >= starValue - 0.5 ? (
            <FaStarHalfAlt className="text-yellow-400 inline-block text-lg" />
          ) : (
            <FaRegStar className="text-yellow-400 inline-block text-lg" />
          )}
        </span>
      );
    });
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">{renderStars()}</div>
      {text && <span className="text-gray-400 text-sm">{text}</span>}
    </div>
  );
};

export default Rating;
