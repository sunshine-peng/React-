import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_ACTTION } from './actionTypes'
import {initListAction} from './actionCreator'
import axios from 'axios'
function *getInitList () {

    try {
        const res = yield  axios.get ( 'http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
        console.log ( 'abc' )
        console.log ( res )
        const action = initListAction ( Object.keys(res.data.hotComments[0]) )
         yield put ( action )
    } catch (e) {
        console.log('网络请求失败')
    }
  
    // axios.get ( 'http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then ( (res) => {
    //         const data = res.data
    //         const action = initListAction ( Object.keys(data.hotComments[0]) )
    //         // store.dispatch ( action )
    //         console.log(action)
    //         // dispatch ( action )
        
    //         })  
}
//sagas必须要是generator函数
function* mySaga() {
    yield takeEvery( GET_INIT_ACTTION, getInitList);
  }
  
  export default mySaga;