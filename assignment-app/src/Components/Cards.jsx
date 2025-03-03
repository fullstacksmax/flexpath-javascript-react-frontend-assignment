import React, { useEffect, useContext, useState} from "react"
import SearchContextProvider, { SearchContext } from './Context'
export default function Cards({ keyword, count }) {
    const {searchContext, dataContext, setDataContext , avgAge, avgInstalledApps , avgScreenTime, avgAppUsage , medAge, medInstalledApps, medScreenTime, medAppUsage} = useContext(SearchContext)  
    const [cards, setCards] = useState("")

  console.log(count)
  useEffect(() => {
    
    const makeCards = () => {
      if(count === undefined) {
        setCards(
          <div className="container  ">
          <div className="card-group ">
            <div className="row">
  
              <div className="col-3 ">
                <div className="card mb-3 border-dark h-100 "  >
                  <div className="card-body text-center " >
                    <h5 className="card-title ">App Usage Time (min/day)</h5>
                    <p className="card-text ">Average - N/A </p>
                    <p className="card-text "><small className="text-muted">Median - N/A </small></p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-3 border-dark h-100 " >
                  <div className="card-body text-center">
                    <h5 className="card-title">Screen On Time (hours/day)</h5>
                    <p className="card-text">Average - N/A </p>
                    <p className="card-text"><small className="text-muted">Median - N/A </small></p>
                  </div>
                </div>
              </div>
  
              <div className="col-3">
                <div className="card mb-3 border-dark h-100" >
                  <div className="card-body text-center">
                    <h5 className="card-title">Number of Apps Installed</h5>
                    <p className="card-text">Average - N/A </p>
                    <p className="card-text"><small className="text-muted">Median - N/A </small></p>
                  </div>
                </div>
              </div>
  
              <div className="col-3">
                <div className="card mb-3 border-dark h-100" >
                  <div className="card-body text-center">
                    <h5 className="card-title">Age</h5>
                    <p className="card-text">Average - N/A </p>
                    <p className="card-text"><small className="text-muted">Median - N/A </small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
        
    }
  setCards(
  <div className="container ">
    <div className="card-group">
      <div className="row">
        <div className="col-3">
          <div className="card mb-3 border-dark h-100"  >
            <div className="card-body text-center" >
              <h5 className="card-title">App Usage Time (min/day)</h5>
              <p className="card-text">Average - {avgAppUsage} Minutes</p>
              <p className="card-text">Median - {medAppUsage} minutes</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-3 border-dark h-100" >
            <div className="card-body text-center">
              <h5 className="card-title">Screen On Time (hours/day)</h5>
              <p className="card-text">Average - {avgScreenTime} Hours </p>
              <p className="card-text">Median - {medScreenTime} Hours </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-3 border-dark h-100" >
            <div className="card-body text-center">
              <h5 className="card-title">Number of Apps Installed</h5>
              <p className="card-text">Average - {avgInstalledApps} Apps</p>
              <p className="card-text">Median - {medInstalledApps} Apps</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card mb-3 border-dark h-100" >
            <div className="card-body text-center">
              <h5 className="card-title">Age</h5>
              <p className="card-text">Average - {avgAge} Years Old</p>
              <p className="card-text">Median - {medAge} years old</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
  
  
  
}
makeCards()
}, [searchContext, dataContext, setDataContext , avgAge, avgInstalledApps , avgScreenTime, avgAppUsage , medAge, medInstalledApps, medScreenTime, medAppUsage])

return(
  <div>
  {cards}
  </div>
)
}




  
        


      






