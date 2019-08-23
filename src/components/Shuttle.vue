<template>
  <div class="shuttle-main" id="shuttle" @mousedown="setStarCount(2000)" @mouseup="setStarCount(500)"></div>
</template>

<script>
import {PI, cos, sin, random} from '@/assets/js/common.js'
/**
   * 穿梭的动画效果
   */
export default {
  name: 'Shuttle',
  data () {
    return {
      canvas: void 0,
      ctx: void 0,
      center: void 0,
      positions: void 0,
      starCount: 500, // 密集度
      velocities: void 0, // 速度
      lifeSpans: void 0, // 寿命
      hues: void 0 // 色调
    }
  },
  mounted () {
    this.setup()
    window.addEventListener('resize', this.resize)
  },
  methods: {
    setup () {
      this.createCanvas()
      this.createStars()
      this.draw()
    },
    createCanvas () {
      this.canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas')
      }

      this.canvas.b.classList.add('shuttle-canvas')
      // this.canvas.b.setAttribute('class', 'shuttle-canvas')
      // this.canvas.b.style = 'position: absolute;top: 0;left: 0;width: 100%;height: 100%;'

      document.getElementById('shuttle').appendChild(this.canvas.b)
      this.ctx = {
        a: this.canvas.a.getContext('2d'),
        b: this.canvas.b.getContext('2d')
      }

      this.center = []
      this.resize()
    },
    createStars () {
      this.positions = new Float32Array(this.starCount * 2)
      this.velocities = new Float32Array(this.starCount * 2)
      this.hues = new Float32Array(this.starCount)
      this.lifeSpans = new Float32Array(this.starCount * 2)

      for (let i = 0; i < this.starCount * 2; i += 2) {
        this.resetStar(i)
      }
    },
    draw () {
      this.ctx.a.clearRect(0, 0, this.canvas.a.width, this.canvas.a.height)
      this.ctx.b.clearRect(0, 0, this.canvas.b.width, this.canvas.b.height)

      this.ctx.b.fillStyle = 'rgba(0,0,0,0.5)'
      this.ctx.b.fillRect(0, 0, this.canvas.b.width, this.canvas.b.height)

      for (let i = 0; i < this.starCount * 2; i += 2) {
        this.drawStar(i)
      }

      this.ctx.b.save()
      this.ctx.b.filter = 'blur(10px)'
      this.ctx.b.drawImage(this.canvas.a, 0, 0)
      this.ctx.b.restore()

      this.ctx.b.save()
      this.ctx.b.globalCompositeOperation = 'lighter'
      this.ctx.b.drawImage(this.canvas.a, 0, 0)
      this.ctx.b.restore()

      window.requestAnimationFrame(this.draw)
    },
    resize () {
      let _window = window
      let innerWidth = _window.innerWidth // 窗口的文档区宽度
      let innerHeight = _window.innerHeight

      this.canvas.a.width = this.canvas.b.width = innerWidth
      this.canvas.a.height = this.canvas.b.height = innerHeight

      this.center[0] = 0.5 * innerWidth
      this.center[1] = 0.5 * innerHeight
    },
    resetStar (i) {
      let iy = void 0
      let rd = void 0
      let rt = void 0
      let cx = void 0
      let sy = void 0
      let x = void 0
      let y = void 0
      let rv = void 0
      let vx = void 0
      let vy = void 0
      let h = void 0
      let l = void 0
      let ttl = void 0

      let TAU = 2 * PI
      let rand = function rand (n) {
        return n * random()
      }
      let randIn = function randIn (min, max) {
        return rand(max - min) + min
      }

      iy = i + 1
      rd = rand(100)
      rt = rand(TAU)
      cx = cos(rt)
      sy = sin(rt)
      x = this.center[0] + cx * rd
      y = this.center[1] + sy * rd
      rv = randIn(0.1, 1)
      vx = rv * cx
      vy = rv * sy
      h = rand(360)
      l = 0
      ttl = randIn(20, 100)

      this.positions[i] = x
      this.positions[iy] = y
      this.velocities[i] = vx
      this.velocities[iy] = vy
      this.hues[0.5 * i | 0] = h
      this.lifeSpans[i] = l
      this.lifeSpans[iy] = ttl
    },
    drawStar (i) {
      let iy = void 0
      let x = void 0
      let y = void 0
      let tx = void 0
      let ty = void 0
      let vx = void 0
      let vy = void 0
      let h = void 0
      let l = void 0
      let dl = void 0
      let ttl = void 0
      let c = void 0
      let fadeIn = function fadeIn (t, m) {
        return t / m
      }

      iy = i + 1
      x = this.positions[i]
      y = this.positions[iy]
      vx = this.velocities[i]
      vy = this.velocities[iy]
      tx = x + vx
      ty = y + vy
      vx *= 1.15
      vy *= 1.15
      h = this.hues[0.5 * i | 0]
      l = this.lifeSpans[i]
      ttl = this.lifeSpans[iy]
      dl = fadeIn(l, ttl)
      c = 'hsla(' + h + ',50%,80%,' + dl + ')'

      l++

      this.ctx.a.save()
      this.ctx.a.lineWidth = dl
      this.ctx.a.lineCap = 'round'
      this.ctx.a.strokeStyle = c
      this.ctx.a.beginPath()
      this.ctx.a.moveTo(x, y)
      this.ctx.a.lineTo(tx, ty)
      this.ctx.a.stroke()
      this.ctx.a.closePath()
      this.ctx.a.restore()

      this.positions[i] = tx
      this.positions[iy] = ty
      this.velocities[i] = vx
      this.velocities[iy] = vy
      this.lifeSpans[i] = l

      this.checkBounds(x, y) && this.resetStar(i)
    },
    checkBounds (x, y) {
      return (
        x > this.canvas.a.width ||
        x < 0 ||
        y > this.canvas.a.height ||
        y < 0)
    },
    setStarCount (count) {
      this.starCount = count
      this.createStars()
    }
  }
}
</script>

<style lang="less">
  .shuttle-main {
    position: relative;
    width: 500px;
    height: 500px;
    background-color: #000;
    .shuttle-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
