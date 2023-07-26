import { Switch } from "@headlessui/react";
import { BsTrash3Fill } from "react-icons/bs";

interface TodoProps {
  id: string;
  task: string;
  done: boolean;
}

export function Todo({id, task, done}: TodoProps) {
  return (
    <div
    key={todo.id}
    className="flex gap-3 items-center p-4 w-full h-16 text-gray-100 bg-gray-400 rounded-lg"
  >
    <Switch
      checked={!todo.done}
      onChange={() => handleDoneCheckTask(todo.id)}
      className={`${
        !todo.done ? "bg-orange" : "bg-gray-500"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          !todo.done ? "translate-x-6 bg-gray-100" : "translate-x-1 "
        } inline-block h-4 w-4 transform rounded-full bg-gray-300 transition`}
      />
    </Switch>

    <div className="flex-1 text-sm text-gray-100">
      <p
        className={`${
          todo.done ? "line-through text-gray-300" : ""
        }`}
      >
        {todo.task}
      </p>
    </div>
    <div>
      <button
        disabled={todo.done}
        onClick={() => handleDeleteTask(todo.id)}
        className="hover:rotate-12 hover:text-danger disabled:opacity-20"
        title="Remover esta tarefa"
      >
        <BsTrash3Fill />
      </button>
    </div>
  </div>
))}

  );
}
