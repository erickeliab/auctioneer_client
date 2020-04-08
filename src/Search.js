import React from 'react';

var Search = () => (
<div class="container mt-3 mb-3">
<div class="md-form mt-0 col-md-6 ml-auto container row">
<input class="form-control col-md-7 col-sm-7 col-xs-7" style={herestyle} type="text" placeholder="Search" aria-label="Search" />
<input class="btn btn-dark col-md-4 col-sm-4 col-xs-7" style={herestyle} type="submit" placeholder="Search" aria-label="Search" />
</div>
</div>
);

var herestyle = {

  borderColor : 'red'
}
export default Search;
