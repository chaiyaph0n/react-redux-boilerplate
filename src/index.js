import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleWare from "redux-saga"

import "./styles/webStyle.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const sagaMiddleware = createSagaMiddleWare()
// const store = createStore()

// sagaMiddleware.run()

ReactDOM.render(
  // <Provider store={}>
    <h1>
      Hello World
    </h1>
  //</Provider>
  ,document.getElementById("app")
)

module.hot.accept()
