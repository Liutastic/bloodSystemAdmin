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
          <el-button
            @click.native="handleFormVisible(true, true)"
            icon="el-icon-plus"
            type="primary"
            circle
          ></el-button>
        </el-tooltip>
      </div>
      <el-table
        v-loading="isLoading"
        :data="volunteerList"
        height="500"
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
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-tooltip
              :visible-arrow="false"
              class="item"
              effect="light"
              content="编辑"
              placement="top"
            >
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-edit"
                @click="handleEdit(scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              :visible-arrow="false"
              class="item"
              effect="light"
              content="删除"
              placement="top"
            >
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="handleDelete(scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
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
    <el-dialog
      :close-on-click-modal="false"
      close-on-press-escape
      append-to-body
      :modal="false"
      :title="isAdd ? '新增志愿者' : '编辑志愿者'"
      :visible.sync="formVisible"
    >
      <el-form
        v-loading="formLoading"
        :model="infoForm"
        :rules="formRules"
        label-position="left"
        ref="formRef"
      >
        <el-form-item label="姓名" label-width="100px" prop="name">
          <el-input v-model="infoForm.name" placeholder="志愿者姓名"></el-input>
        </el-form-item>
        <el-form-item
          :prop="isAdd ? 'IDNo' : ''"
          label="身份证号码"
          label-width="100px"
          label-position="left"
        >
          <el-input
            v-model="infoForm.IDNo"
            placeholder="志愿者身份证"
            :disabled="!isAdd"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="address"
          label="居住地址"
          label-width="100px"
          label-position="left"
        >
          <el-input
            v-model="infoForm.address"
            placeholder="志愿者居住地址"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="电话号码"
          label-width="100px"
          label-position="left"
        >
          <el-input
            v-model="infoForm.phone"
            placeholder="志愿者电话"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="bloodType"
          label="血型"
          label-width="100px"
          label-position="left"
        >
          <el-select v-model="infoForm.bloodType" placeholder="志愿者血型">
            <el-option
              v-for="item in bloodTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="confirmAdd">确 定</el-button>
      </div>
    </el-dialog>
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