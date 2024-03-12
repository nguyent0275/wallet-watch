import Card from "react-bootstrap/Card";

// https://react-bootstrap.netlify.app/docs/components/cards/

const InfoCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Feature 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Feature 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
        </Card.Body>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Feature 3</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Feature 4</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </>
  );
};

export default InfoCard;
