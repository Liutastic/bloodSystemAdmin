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
      isLoading: false,
      formVisible: false
    }
  }
}