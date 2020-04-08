const React = require('react');

var TopBar = function(){
  return(
    <React.Fragment>
      <nav className="pt-1 pb-4 col-md-12" style={{backgroundColor:'black'}}>
        <small className="float-right text-danger text-strong " style={{height:'80%'}}>+255 754 385 888</small>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-4">
            <a className="navbar-brand" href="#">Madalali</a>
            <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarColor03"
    aria-controls="navbarColor03"
    aria-expanded="false"
    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
    className="collapse navbar-collapse"
    id="navbarColor03" >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
    Bidhaa <span className="sr-only">(current)</span>
    </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Mahali</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Wasiliana Nasi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Kuhusu sisi</a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <a className="nav-link" href="#">Jiunge</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Ingia</a>
                </li>

              </ul>


            </div>

          </nav>

    </React.Fragment>


  );
}

export default TopBar;
