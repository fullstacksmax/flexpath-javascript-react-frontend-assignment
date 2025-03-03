import React, { useEffect, useContext} from "react"
import SearchContextProvider, { SearchContext } from './Context'
export default function Cards({ count }) {
      const {searchContext, dataContext, setDataContext} = useContext(SearchContext)  
      const {avgAge, setAvgAge} = useContext(SearchContext)
      const {avgInstalledApps, setAvgInstalledApps} = useContext(SearchContext)
      const {avgScreenTime, setAvgScreenTime} = useContext(SearchContext)
      const {avgAppUsage, setAvgAppUsage} = useContext(SearchContext)
      const {medAge, setMedAge} = useContext(SearchContext)
      const {medInstalledApps, setMedInstalledApps } = useContext(SearchContext)
      const {medScreenTime, setMedScreenTime } = useContext(SearchContext)
      const {medAppUsage, setMedAppUsage } = useContext(SearchContext)

  useEffect(() => {

    const makeCards = () => {
      if(count === undefined) {
        
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
        
    }
  
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
  
}
makeCards()
}, [dataContext])
}

    


  
        


      





{/* <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>  */}
