<template>
  <div class="box">
    <div class="empty">
      <el-empty v-show="0" description="还没有订单哦"></el-empty>
    </div>
    <div class="container" v-show="1">
        <div class="hotel" v-for="(h,index) in hotelOrders" :key="index">
            <div class="dingdan"><div style="height: 4px;"></div><p>&nbsp;&nbsp;&nbsp;&nbsp;订单号:</p><p class="idNum">{{ h.id }}</p></div>
            <h2 class="name msg">{{ h.name }}</h2>
            <p class="fData msg">入住日期：{{ h.fData }}</p>
            <p class="tData msg">退房日期：{{ h.tData }}</p>
            <p class="person msg">入住人：{{ h.person }}</p>
            <p class="roomClass msg">房型：{{ h.roomClass }}</p>
            <div class="price msg">在线付<div class="priceNum">￥{{ h.price }}</div></div>
            <div style="height: 10px;"></div>
        </div>
        <div class="train" v-for="(t,index) in trainOrders" :key="index">
            <div class="dingdan"><div style="height: 4px;"></div><p>&nbsp;&nbsp;&nbsp;&nbsp;订单号:</p><p class="idNum">{{ t.id }}</p></div>
            <h2 class="name msg">{{ t.fStation }}<span style="font-size: 20px;color: rgba(0,0,0,0.2);">&nbsp;&nbsp;----------&nbsp;&nbsp;</span>{{ t.tStation }}</h2>
            <p class="fData msg">日期：{{ t.data }}</p>
            <p class="tData msg">座位：{{ t.seatClass }}</p>
            <p class="person msg">乘车人：{{ t.person }}</p>
            <div class="price msg">在线付<div class="priceNum">￥{{ t.price }}</div></div>
            <div style="height: 10px;"></div>
        </div>
        <div class="car" v-for="(c,index) in carOrders" :key="index">
            <div class="dingdan"><div style="height: 4px;"></div><p>&nbsp;&nbsp;&nbsp;&nbsp;订单号:</p><p class="idNum">{{ c.id }}</p></div>
            <h2 class="name msg">{{ c.fStation }}<span style="font-size: 20px;color: rgba(0,0,0,0.2);">&nbsp;&nbsp;----------&nbsp;&nbsp;</span>{{ c.tStation }}</h2>
            <p class="fData msg">日期：{{ c.data }}</p>
            <p class="carClass msg">车型：{{ c.carClass }}</p>
            <p class="person msg">乘车人：{{ c.person }}</p>
            <div class="price msg">在线付<div class="priceNum">￥{{ c.price }}</div></div>
            <div style="height: 10px;"></div>
        </div>
        <div class="plane" v-for="(p,index) in planeOrders" :key="index">
            <div class="dingdan"><div style="height: 4px;"></div><p>&nbsp;&nbsp;&nbsp;&nbsp;订单号:</p><p class="idNum">{{ p.id }}</p></div>
            <h2 class="name msg">{{ p.fStation }}<span style="font-size: 20px;color: rgba(0,0,0,0.2);">&nbsp;&nbsp;----------&nbsp;&nbsp;</span>{{ p.tStation }}</h2>
            <p class="fData msg">日期：{{ p.data }}</p>
            <p class="tData msg">舱位：{{ p.planeClass }}</p>
            <p class="person msg">乘机人：{{ p.person }}</p>
            <div class="price msg">在线付<div class="priceNum">￥{{ p.price }}</div></div>
            <div style="height: 10px;"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
        hotelOrders: [
            {id:'5964125875',name:'汉庭酒店', fData:"2024-08-30",tData:'2024-08-31',person:'张三',roomClass:'大床房',price:'315'},
            {id:'7546462589',name:'如家酒店', fData:"2024-08-27",tData:'2024-08-28',person:'李四',roomClass:'钟点房',price:'222'}
        ],
        trainOrders:[
            {id:'9653248521',fStation:'上海虹桥',tStation:'北京南',data:'2024-08-22',seatClass:'二等座',person:'张三',price:'598'},
            {id:'1525256348',fStation:'北京南',tStation:'上海虹桥',data:'2024-08-23',seatClass:'一等座',person:'张三',price:'1006'},
        ],
        carOrders:[
            {id:'9654235871',fStation:'临川汽车站',tStation:'南昌站',data:'2024-08-15',carClass:'轿车或商务车',person:'张三',price:'33'},
            {id:'3525647852',fStation:'南昌站',tStation:'宁都站',data:'2024-08-16',carClass:'加班车',person:'张三',price:'188'}
        ],
        planeOrders:[
            {id:'5964841235',fStation:'首都国际机场T2',tStation:'浦东国际机场T1',data:'2024-08-19',planeClass:'公务舱',person:'张三',price:'1495'},
            {id:'6325896324',fStation:'浦东国际机场T1',tStation:'首都国际机场T2',data:'2024-08-20',planeClass:'经济舱',person:'张三',price:'986'}
        ]

    };
  },
};
</script>

<style scoped>
.box {
  /* background-color: aqua; */
  margin-top: 90px;
  height: 88.5vh;
  overflow-y: auto;
}
.empty >>> .el-empty {
  margin-top: 100px;
}
.el-empty >>> .el-empty__image {
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.empty >>> .el-empty__description p {
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;
}
.hotel,.train,.car,.plane{
    border-radius: 10px;
    margin: 20px;
    border: 1px solid #ccc;
}
.dingdan{
height: 30px;
border-radius:10px 10px 0 0 ;
    position: relative;
    background-color: rgba(0,0,0,0.12);
}
.idNum{
    position: absolute;
    margin-left: 75px;
    margin-top: -21px;
    color: #FF6347;
}
.msg{
    margin-top: 7px;
    margin-left: 40px;
}
.price{
    float: right;
    margin-top: -110px;
    margin-right: 70px;
}

.priceNum{
    color: #FF6347;
    float: right;
    margin-left: 10px;
    margin-top: -3px;
    font-size: 20px;
}
</style>