import { Provider } from 'react-redux'
import './App.css'

import store from './redux/store'
import UserContainer from './components/userContainer'

function App() {

  return (
    <Provider store={store}>
      <div className='w-screen h-screen flex justify-center'>
        <UserContainer />
      </div>
    </Provider>
    
  )
}

export default App
