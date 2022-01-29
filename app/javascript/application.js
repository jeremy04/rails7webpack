// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  return (<div className="alert alert-primary" role="alert">Hello, Rails 7 112!!</div>)
}

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('app')
  ReactDOM.render(<App />, rootEl)
})
