// number 543 -> 543
// number 1543 -> 1.5k
// number 1543333 -> 1.5M

const FormatNumber = ({ number }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    } else {
      return num;
    }
  };

  return <>{formatNumber(number)}</>;
};

export default FormatNumber;