<!-- home -->
<template>
  <div class="about-container">
    <div class="warpper">
      <div class="list">
        <div class="logo"></div>
        <div class="demo-home__title">VUE H5开发模板</div>
        <div class="item">
          hello vue-cli4移动端模板
        </div>
        <div class="item">666</div>
        <div class="item"></div>
        <div class="wechat">
          <img :src="this.wechat" alt="" />
        </div>
        <div class="item">1910A</div>
        <div class="item">
          {{ userName }}
          <van-button v-if="userName == ''" type="warning" size="small" @click="doDispatch">快点我~</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      wechat: require('@/assets/logo.png')
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => { })
        .catch(() => { })
    },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '666')
    },
    goGithub(index) {
      window.location.href = 'https://github.com/sunniejs/vue-h5-template'
    }
  }
}
</script>
<style lang="scss">
.about-container {
  /* 你的命名空间 */
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
  .warpper {
    padding: 50px 12px 12px 12px;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-size: 14px;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 32px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .item {
        font-size: 14px;
        line-height: 34px;
        a {
          text-decoration: underline;
        }
        .van-button {
          /* vant-ui 元素*/
          background: #ff5500;
        }
      }

      .logo {
        width: 120px;
        height: 120px;
        background: url('~@/assets/logo.png') center / contain no-repeat;
      }
      .wechat {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
