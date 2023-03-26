import React from "react";
import Link from "next/link";

function Card({ event, comingFrom }) {

  return (
    <div style={styles.card}>
      <img src={event.image} style={styles.img} />
      <div style={styles.cardContent}>
        <div style={styles.cardText}>
          <h1 style={styles.cardHeading}>{event.id}</h1>
          <h3>{event.title}</h3>
          <h4>{event.description}</h4>
        </div>
        {comingFrom ? <Link passHref style={styles.cardButton} href={`/events/${event.city}/${event.id}`}>
          View Event
        </Link> : <Link passHref style={styles.cardButton} href={`/events/${event.id}`}>
          View Event
        </Link>}
        
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#DEDEDE",
    flexBasis: '32%',
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
    marginRight: 5
  },
  cardButton: {
    textDecoration: "none",
    width: "fit-content",
  },
  cardText: {
    color: "#000",
  },
  cardHeading: {
    textTransform: "capitalize",
    marginBottom: 20,
  },
  cardContent: {
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  img: {
    width: "100%",
    height: 250,
    objectFit: 'cover'
  },
};

export default Card;
