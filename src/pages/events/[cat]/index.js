import React from "react";
import Card from "@/pages/card";
import Header from "@/pages/header";
import Footer from "@/pages/footer";

function Category({ data }) {
  return (
    <div style={styles.container}>
      <Header
        heading={`events in ${data[0].city}`}
        headerImg="https://th.bing.com/th/id/R.365019e12c34f80b7c9a1900120e4e44?rik=irvFEyFp253kFQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f11%2fParty-4K.jpeg&ehk=bTLC4ycKbk%2bfatHcGL9RZh2T1OBKJsESYBQ8T9DX%2bAU%3d&risl=&pid=ImgRaw&r=0"
      />
      <div style={styles.cards}>
        <div style={styles.cardsInner}>
          {data.map((event) => {
            return <Card key={event.id} event={event} comingFrom="cat" />;
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
    flexWrap: "wrap",
  },
  cardsInner: {
    display: "flex",
    width: "80%",
    flexWrap: "wrap",
  },
};

export default Category;

export const getStaticPaths = async () => {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: {
      data,
    },
  };
};
