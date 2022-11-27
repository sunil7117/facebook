import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home">
        <Feed />
      </div>
    </>
  );
};

export default Home;
