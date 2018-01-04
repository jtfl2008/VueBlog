<template>
  <div class="header">
    <div class="page navigator">
      <router-link to="/frameworks" class="logo"><img src="http://vuejs.org/images/logo.png" width="40"></router-link>
      <el-menu :default-active="active" mode="horizontal" router>
        <el-menu-item index="/frameworks">前端库</el-menu-item>
        <el-menu-item index="/whouse">大牛再用</el-menu-item>
        <el-menu-item index="/subjects">专题</el-menu-item>
        <el-menu-item index="/information">情报局</el-menu-item>
        <el-menu-item index="/releasesnews">新版发布</el-menu-item>
        <el-menu-item index="/rank">前端TOP100</el-menu-item>
      </el-menu>
      <el-input v-model="search" class="search-text" suffix-icon="el-icon-search"></el-input>
      <el-button-group class="auth">
        <el-button type="text" @click="navLogin">登录</el-button>
        <el-button type="text" @click="navRegiste">注册</el-button>
      </el-button-group>

    </div>
    <!-- 登录 -->
    <el-dialog
      title="登录"
      :visible.sync="userLoginDialogVisible"
      top="0%"
        >
      <el-form :model="userLoginForm" :rules="userRules" ref="userRules" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="userLoginForm.userName" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="userLoginForm.userName"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="login" class="button-block">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 注册 -->
    <el-dialog
      title="注册"
      :visible.sync="userRegisteDialogVisible"
      top="0%"
        >
      <el-form :model="userRegisteForm" :rules="userRules" ref="userRules" label-width="80px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="userRegisteForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userRegisteForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="userRegisteForm.userName"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="registe" class="button-block">注册</el-button>
        </el-form-item>
      </el-form>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      active: this.$route.path,
      search: '',
      userLoginDialogVisible: false,
      userRegisteDialogVisible: false,
      userLoginForm: {
        userName: '',
        passWord: ''
      },
      userRegisteForm: {
        userName: '',
        passWord: '',
        email: ''
      },
      userRules: {
        userName: [
          { required: true, message: '请输入账户', trigger: 'change' },
          { min: 2, max: 35, message: '长度在 2 到 35 个字符', trigger: 'change' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'change' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'change' }
        ]
      }
    }
  },
  components: {

  },
  created () {
  },
  mounted () {

  },
  watch: {

  },
  computed: {

  },
  methods: {
    navLogin () {
      this.userLoginDialogVisible = true
    },
    navRegiste () {
      this.userLoginDialogVisible = true
    },
    login () {

    },
    registe () {

    }
  }
}
</script>
<style lang="css">
  
</style>