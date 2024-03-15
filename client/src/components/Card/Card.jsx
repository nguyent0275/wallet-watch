//React Imports
import Button from 'react-bootstrap/Button';

//CSS Imports
import "./card.css";
import Card from "react-bootstrap/Card";

// https://react-bootstrap.netlify.app/docs/components/cards/

const InfoCard = () => {
  return (
    <div className="card-container">
      <Card className="card">
        <Card.Body>
          <Card.Title>Take charge of your finances</Card.Title>
          <Card.Text class=".card-text">
          Saving money in today's world is tough. Monthly subscriptions and memberships can quickly add up, leaving you stressed about your finances. With Wallet Watch, we make it easy. Our app lets you effortlessly track all your daily expenses, ensuring you're always in control of your finances.
          </Card.Text>
          <Card.Text class=".card-text">
          Wallet Watch allows you to set up monthly budgets tailored to your needs. Whether you're saving for a vacation or simply want to cut back on expenses, Wallet Watch helps you stay on track. Say hello to stress-free budgeting!
          </Card.Text>
          <Button variant="dark">Get Started!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCard;