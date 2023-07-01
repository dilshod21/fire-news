import BorderBar from "../border-bar/BorderBar";
import VideoCardRow from "../video-card-row/VideoCardRow";
import NewsList from "../news-list/NewsList";
import FilterNav from "../filter-nav/FilterNav";
import Header from "../header/Header";

function HomePage({homeData, shortSportData, shortTexnoData, homeData2}) {
    return (
        <div className="d-container">
            <FilterNav />

            <Header />
            <BorderBar word={"So'ngi yangiliklar"} />
            <VideoCardRow data={homeData}/>

            <div className="row">
                <NewsList data={shortSportData} word={"Sport"} />
                <NewsList data={shortTexnoData} word={"Texnologiya"} />
            </div>

            <BorderBar word={"Video yangiliklar"} />
            <VideoCardRow data={homeData2}/>
        </div>
    );
}

export default HomePage;