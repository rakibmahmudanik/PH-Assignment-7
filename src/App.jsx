import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import BannerCards from "./components/BannerCards/BannerCards";
import CustomarTickets from "./components/CustomarTickets/CustomarTickets";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/loader/Loader";

const fetchTicketsData = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const getTicketsData = fetchTicketsData();

function App() {
  const [inProgress, setInProgress] = useState([]);
  const [resolvedtasks, setResolvedTasks] = useState([]);
  const completeTask = (task) => {
    const remainingtasks = inProgress.filter((e) => e.id !== task.id);
    setInProgress(remainingtasks);
    setResolvedTasks([...resolvedtasks, task]);
  };

  return (
    <>
      <Navbar></Navbar>
      <BannerCards
        inProgress={inProgress}
        resolvedtasks={resolvedtasks}
      ></BannerCards>
      <Suspense fallback={<Loader></Loader>}>
        <CustomarTickets
          getTicketsData={getTicketsData}
          setInProgress={setInProgress}
          inProgress={inProgress}
          completeTask={completeTask}
          resolvedtasks={resolvedtasks}
        ></CustomarTickets>
      </Suspense>

      <ToastContainer stacked></ToastContainer>
    </>
  );
}

export default App;
