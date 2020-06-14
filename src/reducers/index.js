//アプリケーション内に存在する全てのreducersを結合する。
//Reducerとはactionを受けてstateを変更するためのメソッド
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
//複数実装したい場合は,で分ける
//export default combineReducers({ count,foo,bar,baz })