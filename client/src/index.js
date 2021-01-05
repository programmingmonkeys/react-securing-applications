import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'
import config from './auth_config.json'
import history from './history'

const onRedirectCallback = appState => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname)
}

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    audience={config.audience}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
