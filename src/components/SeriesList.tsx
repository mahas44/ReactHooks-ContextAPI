import React, { useState, useContext } from "react";
import { ISeries } from "../common/interfaces";
import {
  Button,
  Collapse,
  Card,
  CardBody,
  Container,
  Badge,
} from "reactstrap";
import { Store } from "../context/Store";
import MyModal from "./MyModal";

export default function SeriesList(props: any): Array<JSX.Element> {
  const { dispatch } = useContext(Store);
  const { series } = props;
  const [index, setIndex] = useState<number[]>([]);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const toggle = (i: number) => {
    const idInIndex = index.includes(i);
    if (idInIndex) {
      const indexes = index.filter((id) => id !== i);
      setIndex(indexes);
      return;
    }
    setIndex([...index, i]);
  };

  const selectedSeries = (series: ISeries) => {
    setModal(!modal);
    setModalIndex(series.id);
    dispatch({
      type: "SET_CURRENT_MOVIE",
      payload: series,
    });
  };

  const toggleModal = () => {
    setModalIndex(0);
    setModal(false);
  };

  return series.map((item: ISeries) => {
    return (
      <Container key={item.id} fluid={true} className="col-3">
        <section className="item-box">
          <a style={{ cursor: "pointer" }} onClick={() => selectedSeries(item)}>
            <img
              src={"https://image.tmdb.org/t/p/w400" + item.posterPath}
              alt={item.name}
            />
          </a>
          {modalIndex === item.id && (
            <MyModal
              modalIndex={modalIndex}
              isOpen={modalIndex === item.id}
              toggle={toggleModal}
              item={item}
            ></MyModal>
          )}
          <div>
            <p
              className="text-center"
              style={{ fontSize: 18, color: "Blue", marginTop: ".5rem" }}
            >
              {item.originalName}
            </p>
          </div>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Badge color="warning">{item.genres}</Badge>
            </div>
            <div>{item.firstAirDate}</div>
          </section>

          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Vote Count <Badge>{item.voteCount}</Badge>
            </div>
            <div>
              Vote Average <Badge>{item.voteAverage}</Badge>
            </div>
          </section>
          <div>
            <Button
              color="dark"
              block
              onClick={() => toggle(item.id)}
              style={{ marginBottom: ".5rem", marginTop: ".5rem" }}
            >
              Overview
            </Button>
            <Collapse isOpen={index.includes(item.id)}>
              <Card>
                <CardBody>{item.overview}</CardBody>
              </Card>
            </Collapse>
          </div>
        </section>
      </Container>
    );
  });
}
