import { Suspense } from "react";
import "./App.css";
import BannerCards from "./components/BannerCards/BannerCards";
import CustomarTickets from "./components/CustomarTickets/CustomarTickets";
import Navbar from "./components/Navbar/Navbar";

const fetchTicketsData = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const getTicketsData = fetchTicketsData();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BannerCards></BannerCards>
      <Suspense fallback="Tickets are loading...">
        <CustomarTickets getTicketsData={getTicketsData}></CustomarTickets>
      </Suspense>
    </>
  );
}

export default App;
