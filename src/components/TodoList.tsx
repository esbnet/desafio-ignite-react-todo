import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import clipboardImg from "../assets/Clipboard.png";
// import { Todo } from "./Todo";

import { BsTrash3Fill } from "react-icons/bs";
import { MdOutlineAddTask } from "react-icons/md";

import { Switch } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

interface TodoProps {
  id: string;
  task: string;
  done: boolean;
}


export function TodoList() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [task, setTask] = useState("");

  const taskSumary = todos.length;
  const taskDone = todos.filter((todo) => todo.done === true).length;

  // useEffect(() => {}, [todos]);

  function handleAddTask() {
    if (task === "" || task.length < 6) {
      toast.error("Informar a tarefa! Mínimo de 6 caracteres.");
      return;
    }
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: task,
        done: false,
      },
    ]);
    setTask("");
    toast.success("Tarefa adicionada!");
  }

  function handleTaskInsert(e: any) {
    setTask(e.target.value);
  }

  function handleDeleteTask(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    toast.error("Tarefa removida!");
  }

  function handleDoneTask(id: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        if (todo.done) {
          toast.success("Tarefa concluída!");
        } else {
          toast.warning("Tarefa ficou pendente!");
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <div className="flex h-[54px] max-w-[736px] items-center justify-center mx-auto gap-2 mt-[-27px]">
        <input
          type="text"
          className="flex-1 h-[54px] bg-gray-500 text-gray-300 placeholder:text-gray-300 p-4 rounded-lg "
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={handleTaskInsert}
        />
        <button
          onClick={handleAddTask}
          className=" flex gap-2 items-center justify-center h-[54px] w-24 rounded-lg bg-orangedark text-gray-500 hover:opacity-90 hover:transition-opacity hover:animate-pulse"
        >
          Criar
          <MdOutlineAddTask />
        </button>
      </div>

      <section className="mx-auto min-h-[287px] max-w-[736px] text-gray-300 mt-16">
        <div className="flex justify-between items-center h-5">
          <p className="flex gap-2 justify-center items-center text-sm font-bold text-">
            Tarefas criadas
            <strong className="flex justify-center items-center px-2 h-5 text-xs font-thin text-gray-200 bg-gray-400 rounded-full min-w-6">
              {taskSumary}
            </strong>
          </p>
          <p className="flex gap-2 justify-center items-center text-sm font-bold text-orange">
            Concluídas
            <strong className="flex justify-center items-center px-2 h-5 text-xs font-thin text-gray-200 bg-gray-400 rounded-full w-min-6">
              {taskDone} de {taskSumary}
            </strong>
          </p>
        </div>

        {/* List todos */}
        <div className=" flex flex-col gap-3 items-center mt-6 w-full  min-w-[287px] max-w-full h-56 text-gray-300 rounded-lg border-t border-gray-400">
          {todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                // <Todo key={todo.id} task={todo.task} done={todo.done} />
                <div
                  key={todo.id}
                  className="flex gap-3 items-center p-4 w-full h-16 text-gray-100 bg-gray-400 rounded-lg"
                >
                  <Switch
                    checked={!todo.done}
                    onChange={() => handleDoneTask(todo.id)}
                    className={`${
                      !todo.done ? "bg-orange/60" : "bg-gray-500"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        !todo.done ? "translate-x-6 bg-gray-200" : "translate-x-1 "
                      } inline-block h-4 w-4 transform rounded-full bg-gray-400 transition`}
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
            </>
          ) : (
            <div className="flex flex-col gap-4 items-center mt-16">
              <div>
                <img src={clipboardImg} />
              </div>
              <div className="flex flex-col mt-4 h-11">
                <strong className="text-base font-bold">
                  Você ainda não tem tarefas cadastradas
                </strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          )}
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
