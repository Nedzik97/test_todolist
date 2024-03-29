import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './components/app/app'
import store from './store/index'
import './index.css'

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLDivElement,
)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
