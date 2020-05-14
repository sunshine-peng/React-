import { createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhanders = 
window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_?
window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ({

}) : compose

const enhancer = composeEnhanders(
    applyMiddleware ( sagaMiddleware )
)

// const enhancer = composeEnhanders(
//     applyMiddleware ( thunk )
// )
const store = createStore(reducer,enhancer)//store已经能知道笔记本已经记过的的笔记
sagaMiddleware.run(todoSagas)
export default store