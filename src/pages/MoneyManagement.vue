<!-- This page contains a basic form example (which is in 'components/TransactionForm.vue')
and uses functionality from the money-plugin. -->
<template>
  <Layout>
    <div>
        <h2>Money Management</h2>
        <p>Track your income and expenses</p>
        <h4>Transaction List</h4>
        <b-container fluid>
          <b-list-group>
              <b-list-group-item v-for="item in transactions" :key="item.id">
                <!-- the component 'TransactionItem' is defined in the MoneyPlugin -->
                <TransactionItem :item="item"/>
              </b-list-group-item>
          </b-list-group>
          <!-- the filter 'formatCurrency' is defined in the MoneyPlugin -->
          <p>Total: <b>{{ amountTotal | formatCurrency }}</b></p>
        </b-container>
        <h4>Add Transaction</h4>
        <TransactionForm  @addItem="addTransaction"/>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/MainLayout'
import transactions from '../data/moneyTransactions'
import TransactionForm from '../components/TransactionForm'

export default {
  name: 'MoneyManagement',
  components: { Layout, TransactionForm },
  data() {
    return {
      transactions: transactions
    }
  },
  computed: {
    amountTotal() {
      if (!this.transactions) return 0
      return (
        this.transactions.reduce((sum, trans) => {
          // calculate with integers to bypass float precision problems
          return (
            sum +
            (trans.type === 'exp' ? -trans.amount * 100 : trans.amount * 100)
          )
        }, 0) / 100
      )
    }
  },
  methods: {
    addTransaction(item) {
      item.id = this.transactions.length + 1
      this.transactions.push(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item {
  color: #495057;
}
</style>
