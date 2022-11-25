import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home">
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
