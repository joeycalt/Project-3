import React, { useState, useEffect } from 'react'


const Hockey = () => {
//   const apiKey = 'c0a8ee56109127183ad45d57c7fe6577'
//   const urlThree = `https://api.the-odds-api.com/v4/sports/hockey_nhl/odds/?apiKey=${apiKey}&regions=us&markets=h2h,spreads&oddsFormat=american`
  
//   const [hockey, setHockey] = useState([])
  
//   const getHockey = async () => {
//         try {
// //     const response =await fetch(urlThree)
// //     const data = await response.json()
// //     console.log(data)
// //     setHockey(data)
//         } catch (err){
//             console.log(err)
//         }
// //   }
//   useEffect(() => {getHockey()}, []);
  return (
    <>
      <h1 className='league'>Hockey</h1>
    {/* <section className='show-section'>
      {hockey.map((pucks, index) => {
        return(
          <div className='teams'>
          <h3 className='home-teams'>{pucks.home_team}</h3>
          vs.
          {pucks.scores}
          <h3 className='away-teams'>{pucks.away_team}</h3>
          

          </div>
        )
      })}
   </section> */}
    </>
  )

}

export default Hockey