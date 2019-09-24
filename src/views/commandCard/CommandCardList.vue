<template>
  <div class="command-card-list">
    <h3>指令纹章</h3>
    <button class="button"><span>测试按钮测试按钮测试按钮测试按钮测试按钮</span></button>
    <div class="ilogo">
      <h1 class="ititle">
        <a href="">
          <img src="../../assets/logo.png">
        </a>
      </h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommandCardList',
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {
    document.querySelector('.button').onmousemove = (e) => {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop

      // console.log(`x=${x} , y=${y}`)

      e.target.style.setProperty('--x', `${x}px`)
      e.target.style.setProperty('--y', `${y}px`)
    }
  }
}
</script>

<style lang="less" scoped>
  .command-card-list {

    .button {
      position: relative;
      appearance: none;
      background: #f72359;
      padding: 1em 2em;
      border: none;
      color: white;
      font-size: 1.2em;
      cursor: pointer;
      outline: none;
      overflow: hidden;
      border-radius: 100px;

      span {
        position: relative;
      }

      &::before {
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: 0;
        height: 0;
        background: radial-gradient(circle closest-side, #4405f7, transparent);
        transform: translate(-75%, -75%);
        transition: width .2s ease, height .2s ease;
      }

      &:hover::before {
        width: 400px;
        height: 400px;
      }
    }

    .ilogo {
      position: relative;
      float: left;
      margin: 18px 0 0 5px;
      overflow: hidden;
      transition-duration: 5s;/**动画时间**/
    }

    .ilogo:before {
      content: "";
      position: absolute;
      width: 1000px;
      height: 20px; /**光标的宽度，可根据实际调整**/
      background-image: linear-gradient(to bottom,transparent,rgba(255,255,255,.5),transparent);
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-animation: searchLights 1s ease-in 1s infinite;
      -o-animation: searchLights 1s ease-in 1s infinite;
      animation: searchLights 1s ease-in 1s infinite; /**第一个数字参数控制扫光速度，数字越大越慢**/
    }

    @keyframes searchLights {
      0% {
        left: -200px;
        top: -300px;
      }
      100% {
        left: -160px;
        top: 800px;
      }
    }
  }
</style>
