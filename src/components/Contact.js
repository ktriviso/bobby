import React, { Component } from 'react'
import Recaptcha from 'react-google-recaptcha'
import axios from 'axios'

class App extends Component {
  state = {
    response: '',
    post: '',
    recaptcha: ''
  }
  handleSubmit = async e => {
    e.preventDefault()
    // console.log(this.state.recaptcha)

    const dataRes = await axios
      .post('https://bobby-be.now.sh/api/email', {
        email: this.state.post
      })
      .then(function(response) {
        console.log(response)
        return response
      })
      .catch(function(error) {
        console.log(error)
      })

    console.log('TCL: App -> dataRes', dataRes)
    // await fetch('https://bobby-be.now.sh/api/email', {
    //   method: 'POST',

    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ email: this.state.post })
    // })
  }
  handleRecaptcha = value => {
    this.setState({ recaptcha: value })
  }
  render() {
    return (
      <section
        className='latest latest-posts about-content-wrapper'
        id='contact'
      >
        <p className='small-uppercase'>251 West 30th street, New York, NY</p>
        <p className='entry-title'>Tillage Tavern</p>
        <p>
          As we approach our opening, we would love to begin connecting with our
          friends and neightboors. Please enter your email below for a
          personalized invite to our grand opening and future events. We look
          forward to seeing you soon!
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            style={{
              width: '300px',
              margin: 0,
              padding: '0 0 0 20px',
              marginRight: '10px',
              marginBottom: '15px'
            }}
            placeholder='enter your email'
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type='submit' className='submitform'>
            Submit
          </button>
          {/* <Recaptcha ref="recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={this.handleRecaptcha} /> */}
        </form>
      </section>
    )
  }
}
export default App
