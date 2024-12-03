<template>
  <div style="width: 100%; height: 100%">
    <div class="top">
      <div
        class="title"
        style="float: left; margin-top: 10px; margin-left: 20px"
      >
        <strong
          style="
            font-size: 30px;
            font-family: 'Courier New', Courier, monospace;
            color: #fff;
          "
          >预订酒店</strong
        >
      </div>
      <div
        class="name"
        style="
          float: right;
          font-size: 30px;
          margin-top: 10px;
          margin-right: 20px;
          color: #fff;
          font-family: 'Courier New', Courier, monospace;
        "
      >
        <strong>灵犀游踪</strong>
      </div>
      <div class="logo" style="float: right; margin-right: 10px">
        <img :src="imgUrl" style="height: 50px" />
      </div>
    </div>
    <div class="center">
      <div>
        <div class="block" style="float: left; margin-left: 25px">
          <span
            class="demonstration"
            style="
              display: block;
              margin-left: 10px;
              margin-bottom: 5px;
              color: #fff;
              font-family: 'Courier New', Courier, monospace;
              font-size: 20px;
            "
            >目的地</span
          >
          <el-select v-model="value" placeholder="请选择" style="">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="block" style="float: right; margin-right: 20px">
          <span
            class="demonstration"
            style="
              display: block;
              color: #fff;
              font-family: 'Courier New', Courier, monospace;
              margin-left: 10px;
              margin-bottom: 5px;
              font-size: 20px;
            "
            >退房</span
          >
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
            style="width: 200px"
          >
          </el-date-picker>
        </div>
        <div class="block" style="float: right; margin-right: 20px">
          <span
            class="demonstration"
            style="
              display: block;
              color: #fff;
              font-family: 'Courier New', Courier, monospace;
              margin-left: 10px;
              margin-bottom: 5px;
              font-size: 20px;
            "
            >入住</span
          >
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            style="width: 200px"
          >
          </el-date-picker>
        </div>
      </div>
      <div>
        <div style="float: left; margin-top: 15px; margin-left: 25px">
          <span
            class="demonstration"
            style="
              display: block;
              margin-left: 10px;
              margin-bottom: 5px;
              color: #fff;
              font-family: 'Courier New', Courier, monospace;
              font-size: 20px;
            "
            >房间数</span
          >
          <el-input-number
            v-model="num"
            
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </div>
        <div style="float: left; margin-top: 15px; margin-left: 70px">
          <span
            class="demonstration"
            style="
              display: block;
              margin-left: 10px;
              margin-bottom: 5px;
              color: #fff;
              font-family: 'Courier New', Courier, monospace;
              font-size: 20px;
            "
            >关键词(选填)</span
          >
          <el-input placeholder="酒店名称" v-model="input" clearable>
          </el-input>
        </div>
        <div style="float: right; margin-top: 45px; margin-right: 70px">
          <el-button type="primary">查询</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelFilter",
  data() {
    return {
      num: 1,
      imgUrl: require("@/assets/logo.png"),
      input:'', 
      value: "上海",
      value1: "",
      value2: "",
      options: [
        {
          value: "上海",
          label: "上海",
        },
        {
          value: "北京",
          label: "北京",
        },
        {
          value: "南昌",
          label: "南昌",
        },
        {
          value: "武汉",
          label: "武汉",
        },
        {
          value: "海南",
          label: "海南",
        },
      ],
    };
  },
  methods: {
    // @DateDiff 计算相差的天数
    // @param Date_end 结束时间
    // @param Date_start 开始时间
    // @returns {number} 相差天数

    DateDiff(Date_end, Date_start) {
      let aDate, oDate1, oDate2, iDays;
      Date_end = Date_end.split(" "); //将时间以空格划分为两个数组  第一个数组是 2019-05-20 第二个数组是 00：00：00
      aDate = Date_end[0].split("-"); //获取第一个数组的值
      oDate1 = new Date(aDate[0], aDate[1], aDate[2]); //将前半个数组以-拆分，每一个是一个数值
      Date_start = Date_start.split(" ");
      aDate = Date_start[0].split("-");
      oDate2 = new Date(aDate[0], aDate[1], aDate[2]);
      iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
      return iDays;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.top {
  /* background-color: #f5f5f5; */
  width: 100%;
  height: 25%;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>