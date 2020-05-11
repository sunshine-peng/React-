import { createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer)//store已经能知道笔记本已经记过的的笔记
export default store