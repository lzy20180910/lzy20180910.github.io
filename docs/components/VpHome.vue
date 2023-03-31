<template>
  <div class="">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const cvs = document.getElementById('canvas')

  const state = {
    str: 'abcdefghijklmnopqrstuvwxyz0123456789',
    width: null, //窗口宽度
    height: null, //窗口高度
    ctx: null, // canvas上下文
    columnWidth: 20, // 一列文字宽度
    columnCount: 0, // 拿到窗口宽度之后计算总共可以放下多少列文字
    columnNextIndexs: [], // 记录下每一列文字当前的位置次数
    timer: null, //定时器
    columnCharIndex: [], // 当文字有序的时候 去获取当前列的文字应该是哪个
    mode: 'wuxu' // youxu 文字随机和有序排序
  }

  function initCalcSize() {
    /* 获取窗口宽高 */
    state.width = window.innerWidth;
    state.height = window.innerHeight;

    /* 设置canvas宽高 */
    ({ innerWidth: cvs.width, innerHeight: cvs.height } = window);

    /* 获取绘制上下文 */
    state.ctx = cvs.getContext('2d');
    state.ctx.fillStyle = 'red'

    /* 计算一共可以多少列 */
    state.columnWidth = 25;
    state.columnCount = Math.floor(window.innerWidth / state.columnWidth)

    /* 记录每列写到的文字 累计++ 即可改变y */
    state.columnNextIndexs = new Array(state.columnCount).fill(1)

    state.columnCharIndex = new Array(state.columnCount).fill(0)
    /* 初始化给点随机值 可以在第一次的时候有高度差异 */
    // state.columnNextIndexs.forEach( (_, i) => state.columnNextIndexs[i] = Math.floor(Math.random() * state.columnCount) )
  }

  /* 获取随机颜色 */
  function getRandomColor() {
    const colors = [
      '#42b883'
      // '#33B5E5',
      // '#0099CC',
      // '#AA66CC',
      // '#9933CC',
      // '#669900',
      // '#FFBB33',
      // '#FF8800',
      // '#FF4444',
      // '#CC0000'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  /* 获取随机文字 */
  function getRandomChar(){
    return state.str[Math.floor(Math.random() * state.str.length)]
  }

  /* 按顺序显示文字 */
  function getChar(i){
    const len = state.columnCharIndex[i] % state.str.length;
    return state.str[len];
  }

  /* 绘制函数 */
  function draw(){
    const { ctx, width, height, columnWidth, columnCount, columnNextIndexs } = state
    ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
    ctx.fillRect(0, 0, width, height)
    const fontsize = 16;
    ctx.fillStyle = getRandomColor();
    ctx.font = `${fontsize}px "Microsoft YaHei"`;
    for (let i = 0; i < columnCount; i++) {
      const x = i * columnWidth;
      const y = 20 * columnNextIndexs[i]
      ctx.fillText( (state.mode === 'youxu' ? getChar : getRandomChar )(i), x, y)
      state.columnCharIndex[i]++
      if( y > height && Math.random() > .99){
        columnNextIndexs[i] = 0
      }else{
        columnNextIndexs[i]++
      }
    }
  }

  /* 开始执行绘画 */
  function startDraw(){
    initCalcSize()
    state.timer = setInterval(() => {
      draw()
    }, 40);
  }

  /* 重新开始绘画 */
  function againDraw() {
    clearInterval(state.timer)
    startDraw()
  }

  /* 窗口尺寸改变 重新开始绘制 */
  window.onresize = () => againDraw()

  startDraw()


  /* 点击按钮切换顺序 */
  // const wuxuBtn = document.getElementById('wuxu');
  // const youxuBtn = document.getElementById('youxu');
  // const input = document.getElementById('input');

  /* 回车事件 */
  // input.onkeypress = (event) => {
  //   setTimeout(() => state.str = event.target.value, 0)
  //   if(event.charCode==13) againDraw();
  // }

  // wuxuBtn.onclick = () => {
  //   state.mode = 'wuxu';
  //   againDraw();
  // }
  // youxuBtn.onclick = () => {
  //   state.mode = 'youxu';
  //   againDraw();
  // }
})


</script>
<style scoped>
/* .container{
  position: fixed;
  bottom: 5vh;
  left: 50px;
} */
</style>