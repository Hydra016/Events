import Footer from '@/pages/footer';
import Header from '@/pages/header';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

function SinglePage({ data }) {
  const inputEmail = useRef()
  const router = useRouter()
  const [msg, setMsg] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!emailValue.match(validRegex)) {
      setMsg('Please enter a valid email!')
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailValue, eventId })
      })
      if(!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      setMsg(data.message)
      inputEmail.current.value = '';
    } catch (err) {
      inputEmail.current.value = '';
      console.log(err)
    }
    setTimeout(() => {
      setMsg('')
    }, 5000);
  }

  return (
    <div style={styles.container}>
      <Header heading={data.title} headerImg={`${data.image}`} />
      <div style={styles.cards}>
        <div style={styles.cardsInner}>
        <h1 style={styles.cardHeading}>City: <span style={styles.city}>{data.city}</span></h1>
        <h1 style={styles.paragraph}>Description: {data.description}</h1>

        <form onSubmit={onSubmit} style={styles.form}>
          <label style={styles.formLabel}>Get Registered to {data.title}!</label>
          <input ref={inputEmail} placeholder='Please enter your email' type='email' style={styles.formInput} />
          <input type='submit' style={styles.formSubmit} />
        </form>
        <span style={styles.indicator}>{msg}</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SinglePage

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
  },
  cardHeading: {
    fontSize: 50,
    color: '#000',
    marginTop: 40
  },
  paragraph: {
    fontSize: 30,
    color: '#000'
  },
  city: {
    textTransform: 'capitalize'
  },
  formLabel: {
    color: '#000',
    fontWeight: 600
  },
  form: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column'
  },
  formInput: {
    width: 400,
    marginTop: 10,
    padding: 10,
    fontSize: 20,
    border: '1px solid #d3d3d3',
    borderRadius: 5
  },
  formSubmit: {
    width: 100,
    marginTop: 10,
    padding: 10,
    border: 'none',
    fontSize: 15,
    cursor: 'pointer',
    backgroundColor: '#7c5295',
    color: '#FFF',
    letterSpacing: 2,
    textTransform: 'uppercase',
    borderRadius: 5
  },
  indicator: {
    color: '#000',
    paddingTop: 10
  }
}

export const getStaticPaths = async () => {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map(ev => {
    return {
      params: {
        cat: ev.city,
        id: ev.id
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context?.params.id
  const { allEvents } = await import('/data/data.json')

  const data = allEvents.find(ev => ev.id === id)

  return {
    props: {
      data
    }
  }
}