(function(){
// 컴포넌트
// pic
function ProImg(props){
return (
  <img src={`./images/${props.color}.jpg`} alt="상세이미지" />
)
}
// size

function ProSize(props){
  function optionSize(){
    // let sizes = window.data.allSize;
    // console.log(sizes)
    return props.sizes.map((num,index)=>{
      return (<option value={num} key={index}>{num}</option>)
    })
  }
  function onSizeChange(evt){
    props.hSizeChange(evt.target.value)
  }
   return (
<p class="filed">
    <label 
      htmlFor="size">size :</label>
    <select 
      id="size" 
      name="size"
      onChange = {onSizeChange}
      defaultValue={props.size}
      >
      {optionSize()}
    </select>
  </p>
   );
}
// color
function ProColor(props){
  //  기본함수
  function optionColor(){
    // let colors = window.data.allColor;
    //console.log(colors)
    return props.colors.map((num,index)=>{
      return (<option value={num} key={index}>{num}</option>)
    })
  }
  //  변경될 값을 받고 만들 함수
  function onSizeChange(evt){
    props.hColorChange(evt.target.value)
    // console.log(evt.target.value)
  }
  return (
    <p class="filed">
    <label htmlFor="color">color :</label>
    <select 
      id="color" 
      name="color"
      onChange={onSizeChange}
      defaultValue={props.color}>
      {optionColor()}
    </select>
  </p>
  );
}
function App(){
  // size: 기본, 변경
  let [size,setSize] = React.useState(9);
  let [sizes,setSizes] = React.useState(window.data.allSize)

  // color: 기본, 변경
  let [color,setColor] = React.useState('green');
  let [colors,setColors] = React.useState(window.data.allColor)
// 변경 함수
// selectColor: blue
function hColorChange(selectColor){
  // widnow.data.byColor[blue]
  let ableSize = window.data.byColor[selectColor];
  setSizes(ableSize);
  setColor(selectColor)
}
// 
//  7.5 -> 객체 -> 배열 선택, size -> setSize 설정
function hSizeChange(selectSize){
// window.data.bySize[7.5]
let ableColors = window.data.bySize[selectSize];
setColors(ableColors);
setSize(selectSize)
}

  return (
    <div className="custom">
      <div className="pic">
        <ProImg
          color={color} />
        </div>
      <div className="selector">
        <ProColor 
          color={color}
          colors = {colors}
          hColorChange ={hColorChange}
          />
        <ProSize
          size = {size}
          sizes={sizes} 
          hSizeChange={hSizeChange}
          />
        </div>
    </div>
  )
}
// 37
// 출력
const box = document.querySelector('#room')
ReactDOM.render(
  <App />,box
)
})()