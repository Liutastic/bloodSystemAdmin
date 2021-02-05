<template>
  <div class="content">
    <el-card>
      <div class="top-container">
        <span class="title">志愿者管理</span>
      </div>
      <div class="tool-bar">
        <el-input
          @keyup.enter.native="search"
          @clear="getVolunteerList"
          clearable
          @click.native="search"
          v-model="queryParams.searchKey"
          placeholder="输入名字或身份证搜索志愿者"
          prefix-icon="el-icon-search"
        ></el-input>
        <el-tooltip
          :visible-arrow="false"
          class="item"
          effect="light"
          content="搜索"
          placement="top"
        >
          <el-button
            @click.native="search"
            icon="el-icon-search"
            circle
            style="margin-right: 16px"
          ></el-button>
        </el-tooltip>

        <!-- 刷新按钮 -->
        <el-tooltip
          :visible-arrow="false"
          class="item"
          effect="light"
          content="刷新"
          placement="top"
        >
          <el-button
            @click.native="getVolunteerList"
            icon="el-icon-refresh"
            type="success"
            circle
          ></el-button>
        </el-tooltip>
        <el-tooltip
          :visible-arrow="false"
          class="item"
          effect="light"
          content="添加志愿者"
          placement="top"
        >
          <el-button icon="el-icon-plus" type="primary" circle></el-button>
        </el-tooltip>
      </div>
      <el-table
        v-loading="isLoading"
        :data="volunteerList"
        height="250"
        style="width: 100%"
      >
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="IDNo" label="身份证号码" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="bloodType" label="血型"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleVolSizeChange"
        @current-change="handlePageChange"
        :current-page="queryParams.page + 1"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="queryParams.totalElement"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import operation from './js/operation'
import property from './js/property'
import initial from './js/initial'
// import Form from './components/Form.vue'
export default {
  mixins: [operation, property, initial],
  // components: {
  //   Form
  // }
}
</script>

<style lang="scss" scoped src="./scss/index.scss">
</style>