import React, { useState, useEffect } from 'react'

const App = (props) => {
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  /**
   * defaultpropsを上記のように個別に受け取るのではなく、
   * まとめてオブジェクトとしてuseState()のparaに受け取ることもできる。
   * ◆◆◆◆◆重要◆◆◆◆◆
   * propsがオブジェクトなので、当然stateもオブジェクトになる。
   * そうなると、setStateもオブジェクトを返さなければならない(スプレッド演算子を活用)。
   */
  const [state, setState] = useState(props)
  const { name, price } = state

  /**
   * useEffect(() => {})
   * レンダリングの後で実行される。また、再レンダリングの後にも実行される。
   */
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.')
  })
  /**
   * useEffect(() => {}, [])
   * レンダリングの後にだけ実行される。
   */
  useEffect(() => {
    console.log('This is like componentDidMount only.')
  }, [])
  /**
   * useEffect(() => {}, [state])
   * 指定した状態(下記の場合name)がレンダリングおよび再レンダリングされた時に実行される。
   */
  useEffect(() => {
    console.log('This callback is for "name" only.')
  }, [name])

   /**
   * コードが短いので、JSXの中に直接記載。
   */
  // const reset = () => {
  //   // setPrice(props.price)
  //   // setName(props.name)]
  //   setState(props)
  // }

  return (
    <>
      <p>現在の「{name}」は、{price}円です。</p>
      {/*
      setxxxx()
      # paraに値・関数どちらでも設定できる。
      # paraが関数の場合、その関数のparaに現在の状態を受け取ることができる。
        返り値は必ず状態を返すようにすること。
      # setxxxx()によって状態が変化すると、変更箇所が再renderされる。
       */}
      {/*
      setStateのpara
      スプレッド演算子を使うことで、オブジェクトを展開して渡すことができる。
      カンマで区切り、変更部分のみを指定する。
       */}
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      {/*
      イベントハンドラはparaにeventオブジェクトを受け取ることができる。
      引数.target でイベントの起きた要素を取得できる。
       */}
      {/*
      <input value={name} onChange={e => setName(e.target.value)} />
       */}
      {/*
      setStateのpara
      スプレッド演算子を使うことで、オブジェクトを展開して渡すことができる。
      カンマで区切り、変更部分のみを指定する。
       */}
      <input
        value={name}
        onChange={e => setState({...state, name: e.target.value})}
      />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 2000,
}

// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▼implement object state▼

// const App = (props) => {
//   // const [name, setName] = useState(props.name)
//   // const [price, setPrice] = useState(props.price)
//   /**
//    * defaultpropsを上記のように個別に受け取るのではなく、
//    * まとめてオブジェクトとしてuseState()のparaに受け取ることもできる。
//    * ◆◆◆◆◆重要◆◆◆◆◆
//    * propsがオブジェクトなので、当然stateもオブジェクトになる。
//    * そうなると、setStateもオブジェクトを返さなければならない(スプレッド演算子を活用)。
//    */
//   const [state, setState] = useState(props)
//   const { name, price } = state
//   /**
//    * コードが短いので、JSXの中に直接記載。
//    */
//   // const reset = () => {
//   //   // setPrice(props.price)
//   //   // setName(props.name)]
//   //   setState(props)
//   // }

//   return (
//     <>
//       <p>現在の「{name}」は、{price}円です。</p>
//       {/*
//       setxxxx()
//       # paraに値・関数どちらでも設定できる。
//       # paraが関数の場合、その関数のparaに現在の状態を受け取ることができる。
//         返り値は必ず状態を返すようにすること。
//       # setxxxx()によって状態が変化すると、変更箇所が再renderされる。
//        */}
//       {/*
//       setStateのpara
//       スプレッド演算子を使うことで、オブジェクトを展開して渡すことができる。
//       カンマで区切り、変更部分のみを指定する。
//        */}
//       <button onClick={() => setState({...state, price: price + 1})}>+1</button>
//       <button onClick={() => setState({...state, price: price - 1})}>-1</button>
//       <button onClick={() => setState(props)}>Reset</button>
//       {/*
//       イベントハンドラはparaにeventオブジェクトを受け取ることができる。
//       引数.target でイベントの起きた要素を取得できる。
//        */}
//       {/*
//       <input value={name} onChange={e => setName(e.target.value)} />
//        */}
//       {/*
//       setStateのpara
//       スプレッド演算子を使うことで、オブジェクトを展開して渡すことができる。
//       カンマで区切り、変更部分のみを指定する。
//        */}
//       <input
//         value={name}
//         onChange={e => setState({...state, name: e.target.value})}
//       />
//     </>
//   )
// }

// App.defaultProps = {
//   name: '',
//   price: 2000,
// }


// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▼implement component using multiple states▼

//   /**
//  * useState()の初期値は、下記2つの設定方法がある。
//  * 1) 内部でinitialState(s)を設定する。
//  * 2) 外部でdefaultPropsを設定する。
//  */
// const App = (props) => {
//   const initialStates = {
//     name: '',
//     price: 1000,
//   }

//   /**
//    * 1)の場合のuseState()
//    */
//   const [name, setName] = useState(initialStates.name)
//   const [price, setPrice] = useState(initialStates.price)
//   /**
//    * 2)の場合のuseState( )
//    */
//   const [stock, setStock] = useState(props.stock)
//   const [date, setDate] = useState(props.date)

//   const reset = () => {
//     setPrice(initialStates.price)
//     setName(initialStates.name)
//   }

//   return (
//     <>
//       <p>現在の「{name}」は、{price}円、残り{stock}個です。</p>
//       {/*
//       setxxxx()
//       # paraに値・関数どちらでも設定できる。
//       # paraが関数の場合、その関数のparaに現在の状態を受け取ることができる。
//         返り値は必ず状態を返すようにすること。
//       # setxxxx()によって状態が変化すると、変更箇所が再renderされる。
//        */}
//       <button onClick={() => setPrice(price + 1)}>+1</button>
//       <button onClick={() => setPrice(price - 1)}>-1</button>
//       <button onClick={reset}>Reset</button>
//       {/*
//       イベントハンドラはparaにeventオブジェクトを受け取ることができる。
//       引数.target でイベントの起きた要素を取得できる。
//        */}
//       <input value={name} onChange={e => setName(e.target.value)}/>
//       <p>日付 {date}</p>
//     </>
//   )
// }

// /**
//  * defaultProps
//  * コンポーネントのビルトインのプロパティ。defaultのpropsを設定できる。
//  * APIで外部から持ってきた値をuseState()の初期値にしたい場合にも便利。
//  */
// App.defaultProps = {
//   stock: 5,
//   date: '2020-4-11',
// }

/*
▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
▼Counterアプリ▼

const App = () => {
  // useState()
  // para   状態の初期値。今回はカウンターなので0を登録。
  // reVal  2要素の[]。0: 引数の値。1: 引数の状態を変更できる関数。
  const [count, setCount] = useState(0)
  // console.log({output}) // useState()の返り値の確認 => 2要素の[]

  // setCount()によって、状態が変更されると自動的に再renderされる。
  const increment = () => setCount(count + 1)
  // para 値(count +- 1)バージョン
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  // para 関数バージョン
  // 関数のparaに現在の状態を受け取ることができる。
  const increment2 = () => setCount((previousCount) => previousCount + 1)
  const decrement2 = () => setCount((previousCount) => previousCount - 1)
  const double = () => setCount((previousCount) => previousCount * 2)
  const divide3 = () => setCount((previousCount) => {
    *====
    if (previousCount % 3 === 0) {
      return (previousCount / 3)
    }
    return previousCount
    ====*
    // 上記の三項演算子バージョン
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={increment2}>+1  ver2</button>
        <button onClick={decrement2}>-1  ver2</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>3の倍数を3で割る</button>
      </div>
      <div>
      </div>
    </>
  )
}

▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
 */

export default App
