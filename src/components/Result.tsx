const Result = () => {
  return (
    <div className="text-center result-bg rounded-b-3xl p-2 md:w-[364px] md:rounded-3xl">
      <h1 className="font-bold text-xl mt-5">Your Result</h1>
      <div
        className="flex flex-col justify-center items-center rounded-full circle-bg aspect-square w-32 mx-auto my-5
      md:w-48 md:my-10"
      >
        <p className="text-white font-extrabold text-5xl mb-2 md:text-6xl">
          76
        </p>
        <p className="text-gray-500 font-extrabold"> of 100</p>
      </div>
      <h2 className="text-white font-bold text-2xl">Great</h2>
      <p className="text-white text-[16px] text-opacity-80 pt-2 pb-10 px-10 text-center md:px-12">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
