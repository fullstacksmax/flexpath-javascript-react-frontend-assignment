import React from "react"
export default function Cards({avgAge, avgInstalledApps, avgScreenTime, avgAppUsage, medAge,
    medInstalledApps, medScreenTime, medAppUsage, count}) {
        if(count === undefined) {
            return (
                <div className="card-group">
                    <div className="card">

                        <div className="card-body">
                            <h5 className="card-title">App Usage Time (min/day)</h5>
                            <p className="card-text"> N/A </p>
                            <p className="card-text"><small className="text-muted">N/A</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Screen On Time (hours/day)</h5>
                            <p className="card-text"> N/A </p>
                            <p className="card-text"><small className="text-muted"> N/A </small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Number of Apps Installed</h5>
                            <p className="card-text"> N/A </p>
                            <p className="card-text"><small className="text-muted"> N/A </small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Age</h5>
                            <p className="card-text"> N/A </p>
                            <p className="card-text"><small className="text-muted"> N/A </small></p>
                        </div>
                    </div>
                </div>
            )
        }
    return (
        <div className="card-group">
  <div className="card">
    
    <div className="card-body">
      <h5 className="card-title">App Usage Time (min/day)</h5>
      <p className="card-text">Average - {avgAppUsage} Minutes</p>
      <p className="card-text"><small className="text-muted">Median - {medAppUsage} minutes</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Screen On Time (hours/day)</h5>
      <p className="card-text">Average - {avgScreenTime} Hours </p>
      <p className="card-text"><small className="text-muted">Median - {medScreenTime} Hours </small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Number of Apps Installed</h5>
      <p className="card-text">Average - {avgInstalledApps} Apps</p>
      <p className="card-text"><small className="text-muted">Median - {medInstalledApps} Apps</small></p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
    <h5 className="card-title">Age</h5>
      <p className="card-text">Average {avgAge} Years Old</p>
      <p className="card-text"><small className="text-muted">Median {medAge} years old</small></p>
    </div>
  </div>
</div>


      );
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
</div> */}
