import React from 'react';
import ReactDOM from 'react-dom';
//Storeを作成するための関数であるCreateStoreをImportする
import { createStore } from 'redux'
//作成したStoreを全コンポーネントに渡すproviderと呼ばれる特殊なコンポーネントをImportする
import { Provider } from 'redux-redux'

import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//アプリケーション内部で唯一のもの、アプリケーションの全てのstateはここのstoreに集約される。
//reducerを入れる事で他のファイルからstoreの値を参照できる
//providerを入れることで、親から子へ情報を渡す従来の渡し方ではなくどこからでも参照が可能となる。
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
