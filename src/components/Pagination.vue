<template>
  <div class="content">
    <el-pagination
      @size-change="sizeChange"
      @current-change="pageChange"
      :current-page="curPage"
      :page-sizes="[20, 50, 100, 200]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalElement"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    curPage: {
      type: Number,
      default: 0
    },
    size: Number,
    totalElement: Number
  },
  methods: {
    sizeChange (value) {
      this.size = value
      this.$emit('sizeChange', value)
    },
    pageChange (value) {
      this.curPage = value
      this.$emit('pageChange', value)
    }
  }
}
</script>

