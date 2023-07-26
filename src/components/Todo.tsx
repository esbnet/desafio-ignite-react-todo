import { BsTrash3Fill } from "react-icons/bs";
import checkImg from "../assets/check.png";
import UncheckImg from "../assets/uncheck.png";

const isChecked = true;

export function Todo() {
  return (
    <div className="flex gap-3 justify-center items-center p-4 w-full h-16 text-gray-100 bg-gray-400 rounded-lg" >
      <div>
        {isChecked ? (
          <img src={checkImg} />
        ) : (
          <img src={UncheckImg} />
        )}
      </div>
      <div className="flex-1 text-sm text-gray-100">
        <p>Ipsum dolor sit amet consectetur adipisicing elit j sdfç lasdf jkasdf jasdç fças fas jsad jfsf jlkasfj lkafj alskfsdal jkf</p>
      </div>
      <div>
        <BsTrash3Fill/>
      </div>
    </div>
  );
}
