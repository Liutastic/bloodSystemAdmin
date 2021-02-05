export default {
  methods: {
    // 页容量改变
    handleVolSizeChange (val) {
      this.queryParams.size = val
    },
    // 页数改变
    handlePageChange (val) {
      this.queryParams.page = val
    },
    visibleHandle (val) {
      console.log('visible works...')
      this.formVisible = val
    }
  }
}