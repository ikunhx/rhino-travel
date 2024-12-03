<template>
    <div class="car">
      <div class="car-up"></div>
      <div class="car-center">
        <div style="width: 100%; height: 30px"></div>
        <div class="city">
          <div class="from" :style="{ borderBottom: lightBorder }">
            <el-col :span="12">
              <div class="sub-title" :style="{ color: titleColor }">选择出发</div>
              <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="querySearch"
                :placement="bottom - start"
                placeholder="选择出发"
                @select="handleSelect"
                @focus="focusColor"
                @blur="blurColor"
              ></el-autocomplete>
            </el-col>
          </div>
  
          <i class="el-icon-sort change" @click="changeCity"></i>
  
          <div class="to" :style="{ borderBottom: lightBorder2 }">
            <el-col :span="12">
              <div class="sub-title" :style="{ color: titleColor2 }">
                选择到达
              </div>
              <el-autocomplete
                class="inline-input"
                v-model="state2"
                :fetch-suggestions="querySearch"
                :placement="bottom - start"
                placeholder="选择到达"
                @select="handleSelect"
                @focus="focusColor2"
                @blur="blurColor2"
              ></el-autocomplete>
            </el-col>
          </div>
        </div>
        <div class="time" :style="{ borderBottom: lightBorder3 }">
          <div class="block">
            <div class="demonstration" :style="{ color: titleColor3 }">
              出发日期
            </div>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择出发日期"
              popper-class="data-picker"
              style="
                width: 180px;
                margin-top: 13px;
                margin-left: 40px;
                font-size: 20px;
              "
              @focus="focusColor3"
              @blur="blurColor3"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="search">
          <el-button type="primary">查询</el-button>
        </div>
      </div>
      <div class="car-down">
        <div v-for="(t,index) in ticketList" :key="index">
          <div class="ticket">
          <div style="height: 10px; width: 100%"></div>
          <div class="fromTime">
            <div class="f-time">{{ t.fTime }}</div>
            <div class="f-station">{{ t.fStation }}</div>
          </div>
          <div class="carMsg">
            <div class="takeTime">{{ t.totleTime }}</div>
            <i class="iconfont arrow icon-changjiantouyou"></i>
            <div class="carName">{{ t.carName }}</div>
          </div>
          <div class="toTime">
            <div class="t-time">{{ t.tTime }}</div>
            <div class="t-station">{{ t.tStation }}</div>
          </div>
          <div class="price">
            <div class="p-price">￥{{ t.thirdPrice }}</div>
            <div class="p-amount">
              {{ t.firstAmount }}
            </div>
          </div>
          <div class="book">
            <el-button type="primary" @click="open">订</el-button>
          </div>
        </div>
        
       
        </div>
        
       
      </div>
    </div>
  </template>
    
    <script>
  export default {
    
    name: "Car",
    data() {
      return {
        restaurants: [],
        value1: "",
        state1: "",
        state2: "",
        titleColor: "gray",
        titleColor2: "gray",
        titleColor3: "gray",
        lightBorder: "none",
        lightBorder2: "none",
        lightBorder2: "none",
        
        ticketList:[
          {fTime:'06:00',fStation:'宁都县城内任意点',totleTime:'约3时40分',carName:'轿车或商务车',tTime:'09:40',tStation:'南昌站',firstAmount:'有票',thirdPrice:188},
          {fTime:'07:00',fStation:'宁都县城内任意点',totleTime:'约3时40分',carName:'轿车或商务车',tTime:'10:40',tStation:'南昌站',firstAmount:'有票',thirdPrice:188},
          {fTime:'06:00',fStation:'临川汽车站',totleTime:'约两小时',carName:'加班车',tTime:'08:00',tStation:'南昌站',firstAmount:'3张',thirdPrice:33},
          {fTime:'14:43',fStation:'九江汽车站',totleTime:'约1时30分',carName:'过路车',tTime:'11:00',tStation:'团结站',firstAmount:'8张',thirdPrice:28},
        ]
      };
    },
    methods: {
      focusColor() {
        this.titleColor = "#FF6347";
        this.lightBorder = "5px solid #FF6347";
      },
      focusColor2() {
        this.titleColor2 = "#FF6347";
        this.lightBorder2 = "5px solid #FF6347";
      },
      focusColor3() {
        this.titleColor3 = "#FF6347";
        this.lightBorder3 = "5px solid #FF6347";
      },
      blurColor() {
        this.titleColor = "gray";
        this.lightBorder = "none";
      },
      blurColor2() {
        this.titleColor2 = "gray";
        this.lightBorder2 = "none";
      },
      blurColor3() {
        this.titleColor3 = "gray";
        this.lightBorder3 = "none";
      },
      changeCity() {
        let a = this.state1;
        this.state1 = this.state2;
        this.state2 = a;
      },
      open() {
          this.$alert('可在"我的订单"中查看购票信息', '购票成功', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'success',
                message: 'go!go!go!'
              });
            }
          });
        },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString
          ? restaurants.filter(this.createFilter(queryString))
          : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      loadAll() {
        return [
          { value: "上海" },
          { value: "北京" },
          { value: "南昌" },
          { value: "重庆" },
          { value: "汉口" },
          { value: "杭州" },
          { value: "南京" },
          { value: "合肥" },
          { value: "成都" },
          { value: "厦门" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
  };
  </script>
  
    <style scoped>
  .car {
    width: 100%;
    height: 88.5vh;
    position: relative;
    margin-top: 90px;
  }
  .car-up {
    width: 100%;
    height: 280px;
    background-image: url(~@/assets/bck2.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .car-center {
    width: 80%;
    height: 210px;
    background-color: #f5f5f5;
    margin-left: 10%;
    margin-top: -155px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  .city {
    width: 400px;
    height: 150px;
    margin-left: 20px;
    position: relative;
  }
  .from {
    width: 50%;
    background-color: #eeeeee;
    height: 100%;
    border-radius: 15px 0 0 15px;
    float: left;
  }
  .to {
    width: 49.835%;
    background-color: #eeeeee;
    height: 100%;
    border-radius: 0 15px 15px 0;
    float: right;
    border-left: 1px solid #ccc;
  }
  .el-autocomplete >>> .el-input__inner {
    margin-left: 35px;
    width: 150px;
    height: 65px;
    font-size: 20px;
    padding: 15px;
    outline: none;
    background-color: initial;
    border: none;
    color: gray;
    font-weight: 700;
  }
  .el-autocomplete >>> .el-input__inner::placeholder {
    color: gray;
  }
  .sub-title {
    font-size: 16px;
    margin-top: 35px;
    font-family: "Courier New", Courier, monospace;
    margin-left: 20px;
  }
  .el-autocomplete >>> .el-popper {
    margin-left: 45px;
  }
  .change {
    transform: rotate(90deg);
    font-size: 23px;
    width: 23px;
    height: 23px;
    border: 1px solid gray;
    border-radius: 100%;
    position: absolute;
    top: 72px;
    right: 187px;
    background-color: #eeeeee;
    color: gray;
    cursor: pointer;
  }
  .time {
    width: 300px;
    height: 150px;
    background-color: #eeeeee;
    margin-right: 170px;
    margin-top: -150px;
    position: relative;
    float: right;
    border-radius: 15px;
  }
  .demonstration {
    font-size: 16px;
    margin-top: 35px;
    font-family: "Courier New", Courier, monospace;
    margin-left: 20px;
    color: gray;
  }
  .search{
    position: relative;
  }
  .search >>> .el-button {
    font-size: 20px;
    position: absolute;
    width: 110px;
    height: 50px;
    top: -100px;
    right:30px
  }
  .car-down {
    width: 80%;
    height: 350px;
    background-color: #f5f5f5;
    margin-left: 10%;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
  }
  .ticket {
    width: 95%;
    height: 100px;
    margin-left: 2.5%;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #eeeeee;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  .fromTime {
    width: 150px;
    height: 80%;
    float: left;
  }
  .f-time {
    font-size: 40px;
    margin-left: 20px;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular,
      Hiragino Sans GB, Microsoft Yahei, sans-serif;
    color: #ff6347;
  }
  
  .f-station {
    font-size: 15px;
    margin-left: 22px;
    font-weight: 600;
  }
  .carMsg {
    width: 150px;
    height: 80px;
    float: left;
    color: gray;
  }
  .takeTime {
    font-size: 15px;
    margin-left: 32px;
    margin-top: 10px;
    font-weight: 400;
    margin-bottom: -10px;
  }
  .arrow {
    font-size: 5px;
  }
  .carName {
    font-size: 15px;
    margin-left: 30px;
    font-weight: 400;
  }
  .toTime {
    width: 130px;
    height: 80%;
    float: left;
  }
  
  .t-time {
    font-size: 40px;
    margin-left: 20px;
    font-family: Helvetica Neue, Tahoma, Arial, PingFangSC-Regular,
      Hiragino Sans GB, Microsoft Yahei, sans-serif;
  }
  .t-station {
    font-size: 15px;
    margin-right: 10px;
    font-weight: 600;
    float: right;
  }
  .price {
    width: 300px;
    height: 80px;
    float: left;
    margin-left:37px;
  }
  
  .p-price {
    font-size: 30px;
    color: #ff6347;
    text-align: right;
  }
  .p-amount {
    font-size: 14px;
    color: gray;
    margin-top: 10px;
    font-family: "Courier New", Courier, monospace;
    text-align: right;
  }
  .book >>> .el-button {
    font-size: 20px;
    width: 70px;
    height: 50px;
    margin-top: 15px;
    margin-left: 30px;
  }
  .seat{
    width: 95%;
    height: 80px;
    margin-left: 2.5%;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #eeeeee;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  .seatName{
  width: 100px;
    height: 50px;
    font-size: 23px;
    text-align: center;
    float: left;
    margin-top: 13px;
    margin-left: 15px;
    font-weight: 600;
  }
  
  .seatBook >>> .el-button {
    font-size: 20px;
    width: 80px;
    height: 50px;
    margin-right: 20px;
    float: right;
  
  }
  .seatPrice{
    float: right;
    font-size: 30px;
    color: #ff6347;
    text-align: right;
    margin-right: 20px;
    margin-top: 5px;
  }
  </style>