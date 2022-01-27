import './loading.css';

export const Loading = ({ textLineCount = 2, textCount = 1, textLineHeight = 20 }) => {

  const temporaryArray = (arrayLength) => {
    return Array(arrayLength).fill(0);
  };

  return (
    <div className="wrapper">
      {
        temporaryArray(textCount).map(() => (
          <div className={textCount > 1 && 'text'}>
            {
              temporaryArray(textLineCount).map(() => (
                <div className={`text-line ${textLineCount && 'multiple-text-line'}`}
                     style={{ height: textLineHeight }}>
                </div>
              ))
            }
          </div>
        ))})
      }
    </div>
  );
};
