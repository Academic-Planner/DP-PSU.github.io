import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReviewModal from "./ReviewModal";
import ViewRatingsModal from "./ViewRatingsModal";

export default function CLEPOption({ darkMode }: Readonly<{ darkMode: boolean }>) {
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
        <Card.Header>Transfer Option #4</Card.Header>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CLEP_logo_%282017%29.svg/1200px-CLEP_logo_%282017%29.svg.png"
          alt="CLEP image"
          style={{ width: "15%" }}
          className="mt-2 ms-2"
        />
        <Card.Body>
          <Card.Title>CLEP</Card.Title>
          <Card.Text>
            <a
              target="blank_"
              rel="noreferrer noopener"
              href="https://clep.collegeboard.org/"
            >
              College-Level Examination Program (CLEP)
            </a>{" "}
            offers a set of exams that allow you to gain college credit for your
            bachelor&apos;s degree, bypassing the need to take longer courses.
            These CLEP tests encompass various fields such as history and social
            sciences, literature and composition, mathematics and science,
            business, as well as world languages.
            <br />
            <br />
            <strong>
              Good for Foreign Language: Spanish, French, and German
            </strong>
            <br />
            <br />
            <strong>Good for Certain General Education Coursework</strong>
            <br />
            <br />
            <strong>Type: Exam (Pass / Fail) </strong>
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
      <CLEPModal visible={visible} handleClose={handleClose} />
      <ViewRatingsModal
        option="clep"
        visible={ratingsVisible}
        handleClose={handleRatingsClose}
        setVisible={setRatingsVisible}
        darkMode={darkMode}
      />
      <ReviewModal
        option="clep"
        visible={reviewVisible}
        handleClose={handleReviewClose}
        setVisible={setReviewVisible}
        darkMode={darkMode}
      />
    </>
  );
}

function CLEPModal({
  visible,
  handleClose,
}: Readonly<{
  visible: boolean;
  handleClose: () => void;
}>) {
  return (
    <Modal show={visible} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>CLEP details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Cost</h2>
        <p>
          {" "}
          CLEP exams are administered year-round on a flexible schedule. Exams
          cost $93 plus your test center or remote proctoring administration
          fee. Unlike Sophia though, CLEP exams can be free. Modern States is an
          organization that offers free online courses to help you prepare for
          CLEP exams. These courses are designed to provide comprehensive
          content review and test preparation materials, allowing you to learn
          the material that will be tested on the CLEP exams. The courses are
          delivered through videos, reading materials, practice questions, and
          other resources. After you finish the course, they offer free vouchers
          to cover the cost of CLEP exam fees for you. These vouchers can be
          obtained by completing the corresponding Modern States course and
          passing the associated practice exam. Once you have completed the
          course and demonstrated their readiness through the practice exam, you
          can use the voucher to register for the corresponding CLEP exam for
          free.
        </p>
        <h2>Transfer</h2>
        <p>
          You can explore other course equivalencies{" "}
          <a
            target="blank_"
            rel="noreferrer noopener"
            href="https://admissions.psu.edu/academics/credit/clep/"
          >
            here
          </a>
          .
        </p>
        <h2>Notes</h2>
        <p>
          You can potentially earn 12 credits of a foreign language. This is
          great for students who have a major program that requires a level 3
          proficiency in a singular foreign language. Also, the microeconomics
          exam transfers as ECON 102 unlike Sophia.
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
