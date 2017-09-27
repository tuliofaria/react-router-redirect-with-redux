import store from './store'
import { actionForceLogin } from './reducers'

// simulando uma forçada de login
setTimeout(()=> store.dispatch(actionForceLogin), 4000)
