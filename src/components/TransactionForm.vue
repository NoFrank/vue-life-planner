 <!-- Simple form to add a new transaction with very simple validation. -->
 <template>
    <b-form inline @submit="checkAndSubmit">
      <label class="sr-only" for="transactionTitle">Title</label>
      <b-input
        class="mb-2 mr-sm-2 mb-sm-0"
        type="text"
        id="transactionTitle"
        placeholder="Transaction title"
        v-model="item.title"/>
      <label class="sr-only" for="transactionAmount">Amount</label>
      <b-input-group prepend="$" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="transactionAmount" placeholder="Amount" type="text" v-model.number="item.amount"/>
      </b-input-group>
      <b-form-radio-group id="radios2" name="transactionType" v-model="item.type">
        <b-form-radio value="exp">Expense</b-form-radio>
        <b-form-radio value="inc">Income</b-form-radio>
      </b-form-radio-group>
      <b-button variant="primary" type="submit">Add</b-button>
    </b-form>
</template>

<script>
export default {
  data() {
    return {
      item: {
        type: 'exp',
        title: '',
        amount: undefined
      }
    }
  },
  methods: {
    checkAndSubmit(e) {
      // check that all fields are filled and have the expected format
      if (
        this.item.title !== '' &&
        this.item.amount &&
        typeof (this.item.amount === 'number')
      ) {
        // copying the item to a new object, so we can reset the internal item object
        this.$emit('addItem', Object.assign({}, this.item))
        this.item.title = ''
        this.item.type = 'exp'
        this.item.amount = undefined
      }
      e.preventDefault()
    }
  }
}
</script>
