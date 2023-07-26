import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {

  return (
    <div className="h-screen bg-gray-600">
      <Header/>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App;
