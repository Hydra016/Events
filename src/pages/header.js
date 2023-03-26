import React from "react";
import Link from "next/link";

function Header({ heading, headerImg }) {
  return (
    <div style={styles.navbar}>
      <img
        src={`${headerImg}`}
        style={styles.navImage}
      />
      <h1 style={styles.navbarHeading}>{heading}</h1>
      <div style={styles.navbarInner}>
        <div style={styles.navbarInnerContainer}>
          <Link passHref style={styles.navbarButton} href="/">
            Home
          </Link>
          <Link passHref style={styles.navbarButton} href="/events">
            Events
          </Link>
          <Link passHref style={styles.navbarButton} href="/AboutUs">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
    navbar: {
        height: 700,
        display: "flex",
        justifyContent: "center",
        position: 'relative',
        background: "linear-gradient(#e66465, #9198e5)"
      },
      navbarInner: {
        background: "linear-gradient(326deg, #1d1045 50%, #090517 50%)",
        height: "fit-content",
        width: '100%',
        padding: '30px 0',
        display: "flex",
        justifyContent: "center",
      },
      navbarInnerContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: 700,
        zIndex: 999,
      },
      navbarButton: {
        fontSize: 25,
        height: 50,
        width: 150,
        color: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        textDecoration: 'none',
        fontWeight: 600
      },
      navImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.5,
        position: "absolute",
      },
      
      navbarHeading: {
        zIndex: 999,
        position: 'absolute',
        top: '55%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        fontSize: 150,
        fontFamily: 'Delicious Handrawn',
        textTransform: 'capitalize',
        width: '70%'
      },
      logo: {
        width: 100,
        height: 100,
        zIndex: 9999
      }
}

export default Header;
