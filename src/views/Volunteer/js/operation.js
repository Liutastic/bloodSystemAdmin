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
    // 控制表单出现与隐藏
    handleFormVisible (visible, isAdd) {
      this.formVisible = visible,
        this.isAdd = isAdd
    },
    // 处理确定按钮的添加或编辑
    handleConfirmBtn () {
      if (this.isAdd) {
        this.confirmAdd()
      } else {
        this.confirmEdit()
      }
    },
    // 添加志愿者
    confirmAdd () {
      this.formLoading = true
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.addVolunteer()
        } else {
          this.$warnMsg('请根据提示完善表单')
        }
      })
      this.formLoading = false
    },
    confirmEdit () {
      this.formLoading = true
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.editVolunteer()
        } else {
          this.$warnMsg('请根据提示完善表单')
        }
      })
      this.formLoading = false
    },
    // 编辑志愿者
    handleEdit (row) {
      this.infoForm = row
      this.handleFormVisible(true, false)
    },
    // 删除志愿者
    handleDelete (row) {
      console.log(row)
    }
  }
}