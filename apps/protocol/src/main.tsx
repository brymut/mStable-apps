import * as ReactDOM from 'react-dom'

import { Base } from '@apps/base'

import { ProtocolApp } from './app'

ReactDOM.render(
  <Base>
    <ProtocolApp />
  </Base>,
  document.getElementById('root'),
)
