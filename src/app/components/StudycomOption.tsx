import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import ViewRatingsModal from "./ViewRatingsModal";

export default function StudycomOption({ darkMode }: Readonly<{ darkMode: boolean }>) {
  const [visible, setVisible] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleClose = () => setVisible(false);
  const handleReviewClose = () => setReviewVisible(false);

  const [ratingsVisible, setRatingsVisible] = useState(false);
  const handleRatingsClose = () => setRatingsVisible(false);

  useEffect(() => {
    const modalContent = document.querySelector(
      ".modal-content"
    ) as HTMLDivElement | null;
    if (darkMode && modalContent) {
      modalContent.style.backgroundColor = " #d3d3d3";
    }
  }, [darkMode, visible]);

  return (
    <>
      <Card className={`mb-4 ${darkMode ? "bg-dark text-light" : ""}`}>
        <Card.Header>Transfer Option #7</Card.Header>
        <Card.Img
          variant="top"
          src="https://images.ctfassets.net/a7hvy8sclsq6/115KJfTy7cOqoxv52EvpeF/1f78746b783fa2e600eb4c8a806a9e35/Study-dot-com-logo.png"
          alt="Study.com Image"
          style={{ width: "25%" }}
          className="mt-2 ms-2"
        />
        <Card.Body>
          <Card.Title>Study.com</Card.Title>
          <Card.Text>
            <a
              target="blank_"
              rel="noreferrer noopener"
              href="https://study.com/college/index.html"
            >
              Study.com
            </a>{" "}
            offers a service that allows students to earn college credit for
            completing their courses. Study.com boasts the most courses, however
            most of them are not listed in the Transfer Option tool. <br />
            <br />
            <strong>Good for ENGL 15 </strong>
            <br />
            <br />
            <strong>Type: Self-Paced Course (Pass / Fail)</strong>
          </Card.Text>
          <Button
            variant="outline-info"
            className="me-2"
            onClick={() => setVisible(true)}
          >
            Details
          </Button>
          <Button
            variant="outline-primary"
            className="me-2"
            onClick={() => setRatingsVisible(true)}
          >
            View Ratings
          </Button>
          <Button
            variant="outline-success"
            onClick={() => setReviewVisible(true)}
          >
            Rate or review this option
          </Button>
        </Card.Body>
      </Card>
      <StudycomModal visible={visible} handleClose={handleClose} />
      <ViewRatingsModal
        option="studycom"
        visible={ratingsVisible}
        handleClose={handleRatingsClose}
        setVisible={setRatingsVisible}
        darkMode={darkMode}
      />
      <ReviewModal
        option="studycom"
        visible={reviewVisible}
        handleClose={handleReviewClose}
        setVisible={setReviewVisible}
        darkMode={darkMode}
      />
    </>
  );
}

function StudycomModal({
  visible,
  handleClose,
}: Readonly<{
  visible: boolean;
  handleClose: () => void;
}>) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Study.com details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          {" "}
          Study.com&apos;s plan costs $235 per month. With this plan you are
          able to take 2 exams. Each subsequent exam afterwards is $70 up to a
          total of 5 exams.{" "}
        </p>
        <h2>Transfer</h2>
        <p>You can explore other course equivalencies on Study.com by:</p>
        <ol>
          <li>Searching Google for Penn State Transfer Credit Tool </li>
          <li>Click on the Transfer Credit Tool</li>
          <li>Opt for Search by Institution.</li>
          <li>
            Under Institution, enter: American Council on Education (DC):
            100138677.
          </li>
          <li>For Course, enter: SDCM - STUDYCOM (ALL Courses).</li>
          <li>Finally, click on Search </li>
        </ol>
        <h2>How to Send Transcript</h2>
        <p>
          First, you must send your transcript through Credly. You can create an
          account through credly. In your credly account, you should see your
          badge appear once you accept your badge. You can follow this{" "}
          <a
            target="blank_"
            rel="noreferrer noopener"
            href="https://support.credly.com/hc/en-us/articles/360054195272-How-can-I-send-my-ACE-Transcript"
          >
            link
          </a>{" "}
          for steps on how to send your transcript to admissions@psu.edu. It
          would also be helpful to put your psu email (in case you did not sign
          up with your psu email) and student id number in the custom message to
          ease the transfer process.
        </p>
        <h2>Notes</h2>
        <p>
          Under most certain circumstance, you will want want to take the
          StraighterLine ENGL 15 course instead of the Study.com course. You
          must take both ENGLISH 104 COLLEGE COMP I and ENGLISH 105 COLLEGE COMP
          II for ENGL 15 credit to be awarded. Although COMM 101: PUBLIC
          SPEAKING transfers as CAS XFR100, this is not CAS 100A/CAS100B. Thus,
          the{" "}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
