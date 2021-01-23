'use strict';

{
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  //0から14までのランダムな整数値を求めるには
  //Math.floor(Math.random() * (14 + 1))とすればいいが、配列の要素が変わっても対応できるようにlengthとするなら間違いを防げる。
  //Math.floor(Math.random() * source.length)
  //実装方法は(任意).splice(○番目の位置から１個の要素を削除して取り出す)
  //例 arr.splice(9, 1) これにより数字の重複を避けられる

  //ループを使えばスッキリ書ける。まず配列を宣言し15の要素が欲しいのでiを0から15に満たないまでとしてあげる。その上でiを1ずつ増やしながら次の処理をしてもらう。sourceの[i]番目はインデックスに1を足したものを代入する。
  //各列1-15,16-30,31-45,46-60,61-75と列が増えるごとに15ずつ増えた範囲に変更される。つまり+15*1, 2, 3...とれば良い。
  function createColumn(col) {
     const source = [];
     for (let i = 0; i < 15; i++) {
       source[i] = i + 1 + 15 * col;   
  }

  const column = [];
  for (let i = 0; i < 5; i++) {
    column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  }
  return column;
  }

 // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  //最後に０を付けるのはsplice()の返り値は複数になる場合があるので、要素が１つでも配列となってしまうから。[0]を付けることで最初の0番目の要素のみ取り出すことができる。ループ処理でまとめると上のようにスッキリ書ける。 
  
  
  
  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

//最初の行のtr要素を作りその上でtd要素を5つ追加するループを作る。
//2行目以降もループ処理してあげると良い
  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) { 
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) { //列なので変数名はcolとして左のように書く
        const td = document.createElement('td'); //td要素をcreateElement()で作る
        td.textContent = columns[col][row]; 
        tr.appendChild(td);
      }
      //ループが終わったあとtrをtbodyに追加していけば良い。
      document.querySelector('tbody').appendChild(tr); 
      }
  }
//最後に今まで作った関数を実行する
  const columns = createColumns();
  renderBingo(columns);  
}