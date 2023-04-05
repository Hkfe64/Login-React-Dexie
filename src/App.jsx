import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center content-center">
      <Outlet />
    </div>
  );
}

export default App;
