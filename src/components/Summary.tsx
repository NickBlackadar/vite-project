import data from "../../data.json";

interface Item {
  category: string;
  score: number;
  icon: string;
}

const Summary = () => {
  return (
    <div className="px-5 w-full md:w-[384px]">
      <h1 className="font-bold text-xl mt-3 text-[#303b5a] text-left">
        Summary
      </h1>
      {data.map((item: Item) => (
        <div
          key={item.category}
          className={` rounded-[10px] flex justify-between py-5 px-3 my-5 ${item.category.toLowerCase()}`}
        >
          <div className="left-block">
            <img className="mr-3" src={item.icon} alt="" />
            <span className="font-bold text-left ">{item.category}</span>
          </div>
          <div className="">
            <span className="font-extrabold text-[#303b5a]">{item.score}</span>
            <span className="text-gray-500 font-extrabold"> / 100</span>
          </div>
        </div>
      ))}
      <button className="bg-[#303b5a] rounded-3xl w-full py-4 text-white mb-5">
        Continue
      </button>
    </div>
  );
};

export default Summary;
