<template>
  <div style="display: flex">
    <div
      class="left"
      style="width: 59.5%; height: 91.5%; margin-right: 0.5%; margin-top: 6%"
    >
      <div
        class="up"
        style="
          width: 100%;
          height: 260px;
          margin-top: 10px;
          border-radius: 10px;
        "
      >
        <HotelFilter />
      </div>
      <div
        class="down"
        style="
          width: 100%;
          height: 400px;
          border-radius: 10px;
          margin-top: 30px;
        "
      >
        <div
          style="width: 100%; height: 100%; display: block; overflow-y: scroll"
        >
          <strong
            style="
              margin-left: 20px;
              float: left;
              font-size: 25px;
              font-family: 'Courier New', Courier, monospace;
              color: #ff6347;
            "
            >酒店</strong
          >
          
          <div style="margin-top: 30px">
            <div
              style="
                margin-left: 10px;
                margin-top: 30px;
                width: 216px;
                height: 310px;
                float: left;
                border: 0.05px solid rgba(255, 255, 255, 0.5);
                border-radius: 13px;
                box-shadow: 0 4px 16px 1px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                cursor: pointer;
              "
              v-for="(item, index) in hotelList"
              :key="index"
              class="hotelList"
            >
              <div class="outShow">
                <img
                  :src="item.url"
                  style="width: 100%; height: 60%; border-radius: 13px 13px 0 0"
                />
                <div>
                  <h3
                    style="
                      margin-top: 10px;
                      margin-left: 20px;
                      font-size: 20px;
                      font-family: 'Courier New', Courier, monospace;
                      color: #333333;
                    "
                  >
                    {{ item.name }}
                  </h3>
                </div>
                <div>
                  <div
                    style="
                      background-color: #ff6347;
                      color: #fff;
                      width: 30px;
                      text-align: center;
                      margin-left: 20px;
                      margin-top: 20px;
                    "
                  >
                    {{ item.rate }}
                  </div>
                  <p
                    style="
                      float: right;
                      margin-top: -20px;
                      margin-right: 125px;
                      color: #ff6347;
                      font-family: 'Courier New', Courier, monospace;
                    "
                  >
                    超棒
                  </p>
                  <h3
                    style="
                      margin-top: 5px;
                      float: right;
                      margin-right: 30px;
                      color: #ff6347;
                      font-family: Pingfang SC, Helvetica;
                    "
                  >
                    ￥{{ item.doublePrice }}
                  </h3>
                </div>
              </div>
              <div>
                <el-select v-bind="item.value" placeholder="选择房间">
                  <el-option
                    label="大床房"
                    :value="item.bigPrice"
                    @click.native="bookRoom"
                  >
                  <span style="float: left">大床房</span>
                  <span style="float: right; color: #8492a6; font-size: 13px;margin-left: 10px;">{{ item.bigPrice }}</span>
                  </el-option>
                  <el-option
                    label="标间"
                    :value="item.doublePrice"
                    @click.native="bookRoom"
                  >
                  <span style="float: left">标间</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.doublePrice }}</span>
                  </el-option>
                  <el-option
                    label="钟点房"
                    :value="item.hourPrice"
                    @click.native="bookRoom"
                  >
                  <span style="float: left">钟点房</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.hourPrice }}</span>
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="right"
      style="
        width: 39.5%;
        height: 91.5%;
        border-radius: 10px;
        margin-left: 0.5%;
        margin-top: 6%;
      "
    >
      <div style="margin-top: 10px; width: 100%; height: 700px">
        <el-carousel height="700px" style="border-radius: 10px">
          <el-carousel-item v-for="(item, index) in imgUrl" :key="index">
            <img
              :src="item"
              style="width: 100%; height: 100%; cursor: pointer"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import HotelFilter from "../../components/hotel/HotelFilter";
export default {
  name: "Hotel",
  data() {
    return {
      
     
      imgUrl: [
        "https://dimg04.c-ctrip.com/images/0zg2s120009h0zzve95D8.jpg",
        "https://dimg04.c-ctrip.com/images/0zg38120009h0ysgm6F22.jpg",
        "https://dimg04.c-ctrip.com/images/0zg3r120009h0z6ep9BC8.jpg",
        "https://dimg04.c-ctrip.com/images/0zg2i120009h12dxh7FBD.jpg",
      ],
      hotelList: [
        {
          url: "https://dimg04.c-ctrip.com/images/0206812000bm2hmv19749_R_300_225_R5_Q70_D.jpg",
          name: "欢乐酒店",
          rate: "4.8",
          doublePrice: 295,
          bigPrice:315,
          hourPrice:250,
          value: "",
        },
        {
          url: "https://dimg04.c-ctrip.com/images/0203f120008rk13y2D21A_R_300_225_R5_Q70_D.jpg",
          name: "如家酒店",
          rate: "4.9",
          doublePrice: 288,
          bigPrice:300,
          hourPrice:222,
          value: "",
        },
        {
          url: "https://dimg04.c-ctrip.com/images/200l08000000337olF483_R_300_225_R5_Q70_D.jpg",
          name: "仁和轩酒店",
          rate: "4.7",
          doublePrice: 310,
          bigPrice:330,
          hourPrice:290,
          value: "",
        },
        {
          url: "https://dimg04.c-ctrip.com/images/1mc0d12000b1ad6id4148_R_300_225_R5_Q70_D.jpg",
          name: "悠然山居",
          rate: "4.8",
          doublePrice: 299,
          bigPrice:315,
          hourPrice:270,
          value: "",
        },
        {
          url: "https://dimg04.c-ctrip.com/images/0200d120008rjzdulCE45_R_300_225_R5_Q70_D.jpg",
          name: "秋果小院",
          rate: "4.9",
          doublePrice: 288,
          bigPrice:310,
          hourPrice:245,
          value: "",
        },
        {
          url: "https://dimg04.c-ctrip.com/images/200u0k000000c9j37749C_R_300_225_R5_Q70_D.jpg",
          name: "汉庭酒店",
          rate: "4.7",
          doublePrice: 325,
          bigPrice:350,
          hourPrice:300,
          value: "",
        },
      ],
    };
  },
  components: {
    HotelFilter,
  },
  methods: {
    bookRoom() {
      this.$confirm('您确定预订该房间吗?', '预定房间', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '等待您的到来!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '换一个吧！'
          });          
        });
    },
  }
};
</script>

<style scoped>
.up {
  background-image: url("~@/assets/bck.png");
  background-size: cover;
  background-position: center;
}
.hotelList:hover {
  transform: scale(1.05);
}
</style>