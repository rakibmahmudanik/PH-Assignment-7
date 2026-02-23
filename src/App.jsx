import "./App.css";
import BannerCards from "./components/BannerCards/BannerCards";
import CustomarTickets from "./components/CustomarTickets/CustomarTickets";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BannerCards></BannerCards>
      <CustomarTickets></CustomarTickets>
    </>
  );
}

export default App;
