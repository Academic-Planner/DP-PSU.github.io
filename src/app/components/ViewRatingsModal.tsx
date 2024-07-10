import { Card, CardContent, CardHeader, Rating } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";

export default function ViewRatingsModal({
  option,
  visible,
  handleClose,
  setVisible,
}: Readonly<{
  option:
    | "sophia"
    | "tesu"
    | "straighterline"
    | "westcott"
    | "clep"
    | "dsst"
    | "coursera"
    | "studycom"
    | "studyhall";
  visible: boolean;
  handleClose: () => void;
  setVisible: (visible: boolean) => void;
}>) {
  const [ratings, setRatings] = useState<JSX.Element[]>([
    <p key={0}>Loading...</p>,
  ]);

  useEffect(() => {
    const fetchRatings = async () => {
      const response = await fetch("api/reviews/getreviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ option }),
      });

      const r = await response.json();
      //  (r as Array<Object>).map(rating => Object.entries(rating))
      // for (Object obj in r) {

      // }
      const rText = (r as Array<any>).length
        ? (r as Array<any>).map((rating, index) => (
            <Fragment key={index}>
              <Card variant="outlined" className="mb-2 bg-secondary">
                <CardContent>
                  <Rating
                    disabled={true}
                    precision={0.5}
                    value={Number(rating.rating)}
                  />{" "}
                  Rated {rating.rating}/5 by{" "}
                  {rating.name.length ? rating.name : "Anonymous"}
                  <br />
                  {rating.reviewText.length ? rating.reviewText : ""}
                </CardContent>
              </Card>
            </Fragment>
          ))
        : [
            <Card variant="outlined" className="mb-2 bg-secondary" key={0}>
              <CardContent>No reviews yet.</CardContent>
            </Card>,
          ];
      setRatings(rText);
    };
    fetchRatings();
  }, [option, visible]);

  return (
    <Modal show={visible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Reviews for {option[0].toLocaleUpperCase() + option.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{ratings}</Modal.Body>
    </Modal>
  );
}
