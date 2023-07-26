import Clipboard from "../assets/Clipboard.png";
import { Todo } from "./Todo";

const todos = true;

export function TodoList() {
  return (
    <>
      <section className="mx-auto min-h-[287px] max-w-[736px] text-gray-300 mt-16">
        <div className="flex justify-between items-center h-5">
          <p className="flex gap-2 justify-center items-center text-sm font-bold text-blue">
            Tarefas criadas
            <strong className="flex justify-center items-center w-6 h-5 text-xs text-gray-200 bg-gray-400 rounded-full">
              0
            </strong>
          </p>
          <p className="flex gap-2 justify-center items-center text-sm font-bold text-blue">
            Concluídas
            <strong className="flex justify-center items-center w-6 h-5 text-xs text-gray-200 bg-gray-400 rounded-full">
              0
            </strong>
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center mt-6 w-full max-w-full h-56 text-gray-300 rounded-lg border-t border-gray-400">
          {todos ? (
            <>
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
            </>
          ) : (
            <>
              <img src={Clipboard} />
              <div className="flex flex-col mt-4 h-11">
                <strong className="text-base font-bold">
                  Você ainda não tem tarefas cadastradas
                </strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </>
          )}
        </div>
      </section>
      <section></section>
    </>
  );
}
