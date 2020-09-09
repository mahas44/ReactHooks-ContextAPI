import React, {
  useContext,
  useEffect,
  Fragment,
  Suspense,
  useState,
} from "react";
import { Store } from "../context/Store";
import { fetchMovie, fetchSeries } from "../common/Actions";
import { IProps } from "../common/interfaces";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const MovieList = React.lazy<any>(() => import("./MovieList"));
const SeriesList = React.lazy<any>(() => import("./SeriesList"));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.movies.length === 0 && fetchMovie(dispatch);
    state.series.length === 0 && fetchSeries(dispatch);
  }, []);

  const props: IProps = {
    movies: state.movies,
    series: state.series,
    store: { state, dispatch },
  };

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Suspense fallback={<div>loading</div>}>
      <Fragment>
        <Nav>
          <NavItem><p>Online : {state.onlineCount}</p></NavItem>
          <Nav tabs>
            <NavItem>
              <NavLink
                active={activeTab === "1"}
                onClick={() => {
                  toggle("1");
                }}
              >
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={activeTab === "2"}
                onClick={() => {
                  toggle("2");
                }}
              >
                Series
              </NavLink>
            </NavItem>
          </Nav>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <section className="item-layout">
              <MovieList {...props} />
            </section>
          </TabPane>
          <TabPane tabId="2">
            <section className="item-layout">
              <SeriesList {...props} />
            </section>
          </TabPane>
        </TabContent>
      </Fragment>
    </Suspense>
  );
}
