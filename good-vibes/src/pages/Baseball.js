import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Baseball = () => {
  const apiKey = '7e20754c759a5f90a38705cb78192dae'

  const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`

  const [baseball, setBaseball] = useState([])
  const [prices, setPrices] = useState([])
  useEffect(() => {

    function getPrice(arr) {
      return arr.map(el => {
        const output = {}
        const outcomes = el.markets.map(o => o.outcomes)
        const price = outcomes?.map(obj => obj.map(p => p.price || 'N/A'))
        output[el.title] = price.flatMap(el => el)
        return output
      })
    }
    const getBaseball = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        const allPrices = data?.map(el => getPrice(el.bookmakers || []))
        setPrices(allPrices)
        setBaseball(data)
      } catch (err) {
        console.log(err)
      }
    }
    getBaseball()
  }, [url]);
  return (
    <>
      <h1 className='league'>MLB</h1>
      <section className='show-section'>
        {baseball.map((bases, index) => {
          return (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className='teams'>
                    <h3 className='home-teams'>{bases.home_team}</h3>
                    vs.
                    <h3 className='away-teams'>{bases.away_team}</h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className='teams'>
                    <div className='books' key={index}><div>{prices[index]?.map(price => {
                      return (
                      <>
                          <p>{price.name}</p>
                          {Object.entries(price)?.map(p => {
                            return (
                              <p>{p[0]}: <span className='lines'>[{p[1]}]</span></p>
                            )
                          })}
                        </>
                      )
                    }
                    )}</div></div>

                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )
        })}
      </section>
    </>
  )
}

export default Baseball