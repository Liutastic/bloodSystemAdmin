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
    // 获得志愿者数据
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
    // 查找志愿者
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
    },
    async addVolunteer () {
      let data = await this.$request({
        url: `/api/volunteer/add`,
        method: 'post',
        data: this.infoForm
      })
      if (data.code === 200) {
        this.$successMsg('添加志愿者成功!')
      } else {
        this.$errorMsg(`${data.message}`)
      }
      this.formVisible = false
      await this.getVolunteerList()
      this.$refs.formRef.resetFields()
    },
    async editVolunteer () {
      let data = await this.$request({
        url: `/api/volunteer/edit`,
        method: 'post',
        data: this.infoForm
      })
      if (data.code === 200) {
        this.$successMsg('添加志愿者成功!')
      } else {
        this.$errorMsg(`${data.message}`)
      }
      this.formVisible = false
      await this.getVolunteerList()
      this.$refs.formRef.resetFields()
    }
  }
}