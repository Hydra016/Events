import React from 'react'

function Footer() {
  return (
    <div style={styles.container}>
        <h2>Website made with Next.JS</h2>
        <h2>By Haider Mansoor</h2>
    </div>
  )
}

const styles = {
    container: {
        background: "linear-gradient(#663a82, #7c5295)",
        color: '#FFF',
        padding: 50,
        marginTop: 30
    }
}

export default Footer