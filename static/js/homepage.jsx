"use strict";

function Homepage() {
  return (
    <div>
      <p>Hello user</p>

      <p><a href="/cards">Cards</a> </p>

      <p><img src="/static/img/balloonicorn.jpg"></img> </p>

    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
