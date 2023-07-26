import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {

  return (
    <div className="h-screen bg-gray-600">
      <Header/>
      {/* <TodoForm/> */}
      <TodoList />
    </div>
  )
}

export default App;
