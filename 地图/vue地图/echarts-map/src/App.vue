<template>
  <div id="app">
    <div id="tab">
      <div class="tab-tit">
        <!-- @是v-on的缩写，绑定了click事件，：是v-bind的缩写，他是属性绑定，为a标签添加了类名 -->
        <!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
        <a @click="curId = 0" :class="{ cur: curId === 0 }">html</a>
        <a @click="curId = 1" :class="{ cur: curId === 1 }">css</a>
        <!-- <a @click="curId = 2" :class="{ cur: curId === 2 }">javascript</a>
        <a @click="curId = 3" :class="{ cur: curId === 3 }">vue</a> -->
      </div>
      <div class="tab-con">
        <!--根据curId的值显示div,如果curId等于0，第一个div显示，其它三个div不显示。如果curId等于1，第二个div显示，其它三个div不显示。以此类推-->
        <div class="tab-con-item">
          <!-- <span>地图1</span> -->
          <echarts-map v-show="curId === 0"></echarts-map>
        </div>
        <!-- <div v-show="curId === 1">css</div>
        <div v-show="curId === 2">javascript</div>
        <div v-show="curId === 3">vue</div> -->
      </div>
      <!-- <echarts-map v-show="curId === 0"></echarts-map> -->
    </div>
  </div>
</template>
<script>
import EchartsMap from "./views/EchartsMap.vue";

export default {
  name: "App",
  components: {
    EchartsMap,
  },
  data() {
    return {
      curId: 0,
    };
  },
};
</script>

<style>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}

#tab {
  width: 600px;
  margin: 0 auto;
}

.tab-tit {
  font-size: 0;
  width: 600px;
  border-radius: 20px;
}

.tab-tit a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  width: 25%;
  text-align: center;
  background: #ccc;
  color: #333;
  text-decoration: none;
}

.tab-tit .cur {
  background: #09f;
  color: #fff;
}

.tab-con .tab-con-item {
  border: 1px solid #ccc;
  height: 450px;
  /* width: 1000px; */
  line-height: 400px;
  text-align: center;
  font-size: 100px;
  padding-top: 20px;
}
</style>
