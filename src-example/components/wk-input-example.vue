<template>
  <div>
    <wk-input
      :title='title'
      :wkPlaceholder='wkPlaceholder'
      :nameValidate='nameValidate'
      :idNumValidate='idNumValidate'
      :phoneValidate='phoneValidate'>
    </wk-input>
  </div>
</template>
<script>

import wkInput from '../../src/components/filed/wk-input.vue'

export default {
  data () {
    return {
      title: '出游人1',
      wkPlaceholder: '确认接收短信',
      nameValidate: true,
      idNumValidate: false,
      phoneValidate: false
    }
  },
  components: {
    wkInput
  }
}
</script>

