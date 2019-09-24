<template>
  <div class="magic-cube">
    <!--包裹所有元素的容器-->
    <div class="cube">
      <!--前面图片-->
      <div class="out_front">
        <img src="../assets/image/common/logo-middle.png" class="pic" />
      </div>
      <!--后面图片-->
      <div class="out_back">
        <img src="../assets/image/common/logo-middle.png" class="pic" />
      </div>
      <!--左面图片-->
      <div class="out_left">
        <img src="../assets/image/common/logo-middle.png" class="pic" />
      </div>
      <!--右面图片-->
      <div class="out_right">
        <img src="../assets/image/common/logo-middle.png" class="pic" />
      </div>
      <!--上面图片-->
      <div class="out_top">
        <img src="../assets/image/common/logo-middle.png" class="pic" />
      </div>
      <!--下面图片-->
      <div class="out_bottom">
        <img src="../assets/image/common/logo-middle.png" class="pic" />
      </div>
      <!--test-->
      <!--<div>-->
      <!--<img src="../assets/logo.png" class="pic" />-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MagicCube'
}
</script>

<style lang="less" scoped>
  @-webkit-keyframes rotate {
    from {
      transform: rotateX(0deg) rotateY(0deg);
    }
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  .magic-cube {
    width: 200px;
    height: 200px;
    margin: 200px;
    position: relative;

    .cube {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      transform-style: preserve-3d;
      transform: rotateX(-30deg) rotateY(-80deg);
      animation: rotate linear 20s infinite;

      div {
        position: absolute;
        width: 200px;
        height: 200px;
        opacity: 0.8;
        transition: .4s;
        .pic {
          width: 200px;
          height: 200px;
          background-color: #fff;
        }

        &.out_front {
          transform: rotateY(0deg) translateZ(100px);
        }
        &.out_back {
          transform: translateZ(-100px) rotateY(180deg);
        }
        &.out_left {
          transform: rotateY(-90deg) translateZ(100px);
        }
        &.out_right {
          transform: rotateY(90deg) translateZ(100px);
        }
        &.out_top {
          transform: rotateX(90deg) translateZ(100px);
        }
        &.out_bottom {
          transform: rotateX(-90deg) translateZ(100px);
        }
      }

      &:hover {
        div.out_front {
          transform: rotateY(0deg) translateZ(200px);
        }
        div.out_back {
          transform: translateZ(-200px) rotateY(180deg);
        }
        div.out_left {
          transform: rotateY(-90deg) translateZ(200px);
        }
        div.out_right {
          transform: rotateY(90deg) translateZ(200px);
        }
        div.out_top {
          transform: rotateX(90deg) translateZ(200px);
        }
        div.out_bottom {
          transform: rotateX(-90deg) translateZ(200px);
        }
      }

    }
  }

</style>
