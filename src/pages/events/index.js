import Card from "../card";
import Footer from "../footer";
import Header from "../header";

export default function Home({ data }) {
  return (
    <div style={styles.container}>
      <Header heading='Ongoing Events' headerImg='https://th.bing.com/th/id/R.365019e12c34f80b7c9a1900120e4e44?rik=irvFEyFp253kFQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f11%2fParty-4K.jpeg&ehk=bTLC4ycKbk%2bfatHcGL9RZh2T1OBKJsESYBQ8T9DX%2bAU%3d&risl=&pid=ImgRaw&r=0' />
      <div style={styles.cards}>
        <h2 style={styles.subHeading}>Discover The Best Tours</h2>
        <div style={styles.cardsInner}>
          {data.map((event) => {
            return <Card event={event} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fefefe",
    width: "100vw",
    height: "100vh",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
    flexWrap: 'wrap'
  },
  cardsInner: {
    display: "flex",
    // justifyContent: "space-between",
    width: "80%",
    flexWrap: 'wrap',
  },
  subHeading: {
    fontSize: 40,
    color: "#000",
    margin: "20px 0 40px 0",
  },
};

export const getServerSideProps = async () => {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
};
