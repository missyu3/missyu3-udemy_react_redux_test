//actionとはJSのオブジェクトのこと、TypeとTypeに対応するKeyを持つ。Typeはuniqueなものでないといけない。
//RedaxではActionを返す関数をアクションクリエーターと呼ぶ

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const increment = () => {
  return {
  type: INCREMENT
}

export const decrement = () => ({
  type: DECREMENT
})