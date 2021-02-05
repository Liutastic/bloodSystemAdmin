export default {
  created () {
    this.getVolunteerList()
  },
  methods: {
    // 使用后台传输的数据初始化
    initialData (content, totalElement, size) {
      this.volunteerList = content
      this.queryParams.totalElement = totalElement
      this.queryParams.size = size
    },
    async getVolunteerList () {
      this.isLoading = true
      // ?page=${this.queryParams.page - 1}&size=${this.queryParams.size}
      let { data: { content, totalElement, size } } = await this.$request({
        url: `/api/volunteer/page`,
        method: 'get',
        params: this.queryParams
      })
      this.initialData(content, totalElement, size)
      this.isLoading = false
    },
    async search () {
      this.isLoading = true
      // this.queryParams.searchKey = searchKey
      let { data: { content, totalElement, size } } = await this.$request({
        url: `/api/volunteer/page`,
        method: 'get',
        params: this.queryParams
      })
      this.initialData(content, totalElement, size)
      this.isLoading = false
    }
  }
}