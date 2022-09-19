import React, { useState, useEffect } from 'react'


const Baseball = (props) => {
  const apiKey = '1f8894fe9ad6afe5171b0ff58f0738aa'
  const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
  const [baseball, setBaseball] = useState([])
  
  const getBaseball = async () => {
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
    setBaseball(data)
  }
  useEffect(() => {getBaseball()}, []);
  return (
    <>
      <h1 className='league'>MLB</h1>
    <section>
      {baseball.map((bases, index) => {
        return(
          <div className='teams'>
          <h3 className='home-teams'>{bases.home_team}</h3>
          vs.
          <h3 className='away-teams'>{bases.away_team}</h3>
          <p>{bases.bookmakers}</p>
          

          </div>
        )
      })}
   </section>
    </>
  )
}

export default Baseball