export default {
  data () {
    return {
      volunteerList: [],
      queryParams: {
        totalElement: 0,
        page: 1,
        size: 20,
        searchKey: ''
      },
      // 
      isAdd: false,
      isLoading: false,
      formLoading: false,
      formVisible: false,
      // 表单
      infoForm: {
        name: '',
        bloodType: '',
        address: '',
        phone: '',
        IDNo: ''
      },
      bloodTypeList: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'AB', value: 'AB' },
        { label: 'O', value: 'O' }
      ],
      formRules: {
        name: [
          { required: true, message: '请输入志愿者姓名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在1到10个字符之间', trigger: 'blur' }
        ],
        bloodType: [
          { required: true, message: '请选择志愿者血型', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入志愿者居住地址', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在1到50个字符之间', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
          // 正则表达
        ],
        IDNo: [
          { required: true, message: '请输入身份证号码', trigger: 'blur' },
          { pattern: /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/, message: '请输入正确的身份证号码', trigger: 'blur' }
          // { validator: this.validateIDNo }
          // 正则表达
        ]
      }

    }
  }
}