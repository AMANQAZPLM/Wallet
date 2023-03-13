import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // card space is  necessary

  return <div className={classes}>{props.children}</div>;
}

export default Card;
