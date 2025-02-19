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
