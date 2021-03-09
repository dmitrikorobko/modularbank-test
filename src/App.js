import React from 'react'
import Meta from './components/header/Meta'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'
import data from './data/form'
import flags from './data/flag-emojis'

function App() {
  return (

    <React.Fragment>  
      <Meta 
        sitename="modularbank form"
        title="Dmitri Korobko test for modularbank"
        description="React application that opens a dummy contact form" 
        author="Dmitri Korobko"
        keywords="Modularbank, React create App"
        copyright="Dmitri Korobko" 
        contact="dmitri@burst.ee"
      />
      <Header/>
        <section className="main">
          <div className="container is-widescreen">
            <div className="columns">
              <div className="column is-hidden-touch"></div>
              <div className="column is-three-fifths">
                <h1>Contact us</h1>
              </div>
            </div>
            <div className="columns">
              <div className="column information">
                  <p>
                    Media enquiries:<br/>
                    <a href="mailto:press@modularbank.co">press@modularbank.co</a><br/>
                  </p>
                  <p className="pt-6"> 
                    Career questions:<br/>
                    <a href="mailto:careers@modularbank.co">careers@modularbank.co</a>
                  </p>
                  <p className="pt-6">
                    Our offices:<br/>
                    Tallinn, Estonia<br/>
                    Vabaduse Workland<br/>
                    Pärnu mnt 12, 10146<br/>
                  </p>
                  <p className="pt-6">
                    Berlin, Germany<br/>
                    Bikini Berlin, Scaling Spaces, 2.OG<br/>
                    Budapester Str. 46<br/>
                    10787 Berlin<br/>
                  </p>
              </div>
              <div className="column is-three-fifths">
                  <Form {...data} flags={flags}/>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
