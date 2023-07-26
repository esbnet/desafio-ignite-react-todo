import { BiListPlus } from "react-icons/bi";

interface TodoProps {
  id: string;
  task: string;
  done: boolean;
}

export function TodoForm() {
  return (
    <div className="flex h-[54px] max-w-[736px] items-center justify-center mx-auto gap-2 mt-[-27px]">
      <input
        type="text"
        className="flex-1 h-[54px] bg-gray-500 text-gray-300 placeholder:text-gray-300 p-4 rounded-lg "
        placeholder="Adicione uma nova tarefa"
      />
      <button className=" flex gap-2 items-center justify-center bg-blue-500 h-[54px] w-24 rounded-lg bg-bluedark text-gray-100 hover:opacity-90 hover:transition-opacity">
        Criar
        <BiListPlus />
      </button>
    </div>
  );
}
