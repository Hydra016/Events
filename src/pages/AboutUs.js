/* eslint react/no-unescaped-entities */

import React from 'react'
import Footer from './footer'
import Header from './header'

function AboutUs() {
  return (
    <div style={styles.container}>
      <Header
        heading="About Us"
        headerImg="https://th.bing.com/th/id/R.365019e12c34f80b7c9a1900120e4e44?rik=irvFEyFp253kFQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f11%2fParty-4K.jpeg&ehk=bTLC4ycKbk%2bfatHcGL9RZh2T1OBKJsESYBQ8T9DX%2bAU%3d&risl=&pid=ImgRaw&r=0"
      />
    <div>
    <h2 style={styles.heading}>What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).
</h2>
    </div>
    <Footer />
</div>
  )
}

const styles = {
  container: {
    backgroundColor: "#fefefe",
    width: "100vw",
    height: "100vh",
  },
  heading: {
    color: '#000',
    padding: '30px 50px'
  }
}

export default AboutUs