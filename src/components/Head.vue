<template>
  <div class="header" style="z-index: 999;">
    <!-- logo -->
    <img src="../assets/logo2.png" />
    <img src="../assets/title.png" id="title-img" />
    <!-- 搜索框 -->
    <div class="search">
      <el-input
        placeholder="请输入内容"
        v-model="input1"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择地址">
          <el-option label="南昌" value="1"></el-option>
          <el-option label="景德镇" value="2"></el-option>
          <el-option label="赣州" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <!-- 登入状态 -->
    <el-dropdown style="margin-right: 40px">
      <el-button icon="el-icon-user" circle class="uesr-btn"></el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="drawer = true" type="primary">
          <el-button
            @click="drawer1 = true"
            type="primary"
            style="
              margin-left: 16px;
              background-color: initial;
              border: none;
              color: #ff6347;
            "
          >
            登录
          </el-button>
        </el-dropdown-item>
        <el-dropdown-item
          ><el-button
            @click="drawer2 = true"
            type="primary"
            style="
              margin-left: 16px;
              background-color: initial;
              border: none;
              color: #ff6347;
            "
          >
            注册
          </el-button></el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>

    <div>
      <el-drawer :visible.sync="drawer1" size="50%" :append-to-body="true">
        <div style="margin-left: 300px; margin-top: 160px">
          <div>
            <strong style="font-size: 37px; margin-left: 105px; color: #606266"
              >登 &nbsp;&nbsp;录</strong
            >
            <div style="margin-top: 10px">
              <label for="username">用 户 名</label>
              <input
                type="text"
                name="uername"
                id="username"
                v-model="username1"
                ref="username"
                @focus="onFocus"
                @blur="onBlur"
              />
              <p v-if="showPromt" class="promt">{{ promtMessage }}</p>
            </div>
            <div style="margin-top: 10px">
              <label for="password" style="margin-right: 2px"
                >密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="password1"
                ref="password"
                @focus="onFocus2"
                @blur="onBlur2"
              />
              <p v-if="showPromt2" class="promt">{{ promtMessage }}</p>
            </div>
          </div>

          <div style="margin-left: 120px; margin-top: 20px">
            <el-button @click="singIn">登录</el-button>
            <el-drawer
              title="登陆成功"
              :append-to-body="true"
              :before-close="handleClose"
              :visible.sync="innerDrawer"
            >
              <p>_(:зゝ∠)_</p>
            </el-drawer>
          </div>
        </div>
      </el-drawer>
      <el-drawer :visible.sync="drawer2" size="50%" :append-to-body="true">
        <div style="margin-left: 300px; margin-top: 160px">
          <div>
            <strong style="font-size: 37px; margin-left: 105px; color: #606266"
              >注 &nbsp;&nbsp;册</strong
            >
            <div style="margin-top: 10px">
              <label for="username" style="margin-right: 7px">用 户 名</label>
              <input
                type="text"
                name="uername"
                id="username"
                v-model="username2"
                ref="username"
                @focus="onFocus"
                @blur="onBlur"
              />
              <p v-if="showPromt" class="promt">{{ promtMessage }}</p>
            </div>
            <div style="margin-top: 10px">
              <label for="password" style="margin-right: 9px"
                >密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="password2"
                ref="checkPassword"
                @focus="onFocus4"
                @blur="onBlur4"
              />
              <p v-if="showPromt3" class="promt">{{ promtMessage }}</p>
            </div>
            <div style="margin-top: 10px">
              <label for="password" style="margin-right: 2px">确认密码</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password3"
                ref="checkPassword2"
                @focus="onFocus3"
                @blur="onBlur3"
              />
              <p v-if="showPromt2" class="promt">{{ promtMessage }}</p>
              <p v-if="checkPromt" class="checkPromt">{{ checkMessage }}</p>
            </div>
          </div>

          <div style="margin-left: 120px; margin-top: 20px">
            <el-button @click="singIn2">注册</el-button>
            <el-drawer
              title="注册成功"
              :append-to-body="true"
              :before-close="handleClose"
              :visible.sync="innerDrawer2"
            >
              <p>快去体验吧！</p>
            </el-drawer>
          </div>
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",

  data() {
    return {
      input1: "",
      select: "",
      drawer2: false,
      drawer1: false,
      innerDrawer: false,
      innerDrawer2: false,
      username1: "",
      password1: "",
      username2: "",
      password2: "",
      password3: "",
      showPromt: false,
      showPromt2: false,
      showPromt3: false,
      checkPromt: false,
      promtMessage: "输入不能为空",
      checkMessage: "确认密码与密码不相同",
    };
  },
  methods: {
    singIn(){
      // 登入逻辑
      this.innerDrawer = true;
      this.username1 =''
      this.password1 = ''
    },
    singIn2(){
      // 登入逻辑
      this.innerDrawer2 = true;
      this.username2 =''
      this.password2 = ''
      this.password3 = ''
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    onFocus() {
      this.showPromt = false; //输入框获取焦点时隐藏提示信息
    },
    onFocus2() {
      this.showPromt2 = false; //输入框获取焦点时隐藏提示信息
    },
    onFocus4() {
      this.showPromt3 = false; //输入框获取焦点时隐藏提示信息
    },
    onFocus3() {
      this.checkPromt = false; //输入框获取焦点时隐藏提示信息
    },
    onBlur() {
      if (this.$refs.username.value.trim() === "") {
        this.showPromt = true;
      }
    },
    onBlur2() {
      if (this.$refs.password.value.trim() === "") {
        this.showPromt2 = true;
      }
    },
    onBlur4() {
      if (this.$refs.checkPassword.value.trim() === "") {
        this.showPromt3 = true;
      } else {
        this.showPromt3 = false;
      }
    },
    onBlur3() {
      if (this.$refs.checkPassword2.value.trim() === "") {
        this.showPromt2 = true;
      } else {
        this.showPromt2 = false;
      }
      if (this.password2 !== this.password3 && this.password3 !== "") {
        this.checkPromt = true;
        this.showPromt2 = false;
      }
    },
  },
};
</script>

<style scoped>
.header {
  text-align: right;
  font-size: 12px;
  position: fixed;
  top: 0;
  width: 1282.5px;
  background-color: #ff6347;
  border-radius: 5px;
}
.header img {
  height: 60px;
  float: left;
  margin-left: 30px;
}
.uesr-btn {
  margin-right: 10px;
  margin-top: 10px;
}
#title-img {
  height: 43px;
  margin-left: 8px;
  margin-top: 8px;
}
.el-select {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.search {
  float: left;
  margin-left: 30px;
  margin-top: 10px;
}
.input-with-select {
  width: 830px;
}
#username,
#password {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  width: 200px;
}
label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.promt {
  color: red;
  margin-right: 200px;
  margin-top: 10px;
  font-size: 13px;
  float: right;
}

.checkPromt {
  color: red;
  margin-right: 145px;
  margin-top: 10px;
  font-size: 13px;
  float: right;
}
</style>