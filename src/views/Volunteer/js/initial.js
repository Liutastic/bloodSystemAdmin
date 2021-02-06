import { Decrypt } from '../../../utils/cryption'
import { handleIDNo } from '@/utils/regex'
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
      let { data: { content, totalElement, size } } = await this.$request({
        url: `/api/volunteer/page`,
        method: 'get',
        params: this.queryParams
      })
      // 原始数据
      this.initialVolunteerList = content

      // 处理志愿者身份证信息
      let length = content.length
      for (let i = 0; i < length; i++) {
        this.volunteerIdList.push({ _id: content[i]._id, IDNo: content[i].IDNo })
        content[i].IDNo = handleIDNo(Decrypt(content[i].IDNo))
      }
      console.log('this.volunteerIDList', this.volunteerIdList)
      this.initialData(content, totalElement, size)
      console.log(content)
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
    // 添加志愿者
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
    // 编辑志愿者
    async editVolunteer () {
      // 身份证加密传输到后台
      let data = await this.$request({
        url: `/api/volunteer/edit`,
        method: 'post',
        data: {
          address: this.infoForm.address,
          IDNo: this.editIDNo,
          name: this.infoForm.name,
          phone: this.infoForm.phone,
          bloodType: this.infoForm.bloodType,
          remark: this.infoForm.remark,
          _id: this.infoForm._id
        }
      })
      if (data.code === 200) {
        this.$successMsg('编辑成功!')
      } else {
        this.$errorMsg(data.message)
      }
      this.formVisible = false
      await this.getVolunteerList()
      this.$refs.formRef.resetFields()
    }
  }
}