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
      this.formVisible = visible
      this.isAdd = isAdd
    },
    // 处理身份证号码加密问题
    handleIDNoTrans () {
      this.volunteerIdList.forEach(ele => {
        if (ele._id === this.infoForm._id) {
          this.editIDNo = ele.IDNo
        }
      })
    },
    // 处理确定按钮的添加或编辑
    handleConfirmBtn () {
      if (this.isAdd) {
        this.confirmAdd()
      } else {
        // 处理身份证号码加密问题
        this.confirmEdit()
      }
    },
    // 处理对话框取消按钮操作
    handleDialogCancel () {
      this.$refs.formRef.resetFields()
      this.formVisible = false
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
      this.handleIDNoTrans()

      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.editVolunteer()
        } else {
          this.$warnMsg('请根据提示完善表单')
        }
      })
      this.formLoading = false
    },
    // 弹出编辑志愿者对话框
    handleEdit (row) {
      this.infoForm = row
      // this.handleIDNoTrans()
      this.handleFormVisible(true, false)
    },
    // 删除志愿者
    handleDelete (row) {
      this.$confirm('此操作将会删除该志愿者, 是否继续?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除
        this.deleteVolunteer(row._id)
      }).catch(() => {
        // 无效果
      })
    }
  }
}