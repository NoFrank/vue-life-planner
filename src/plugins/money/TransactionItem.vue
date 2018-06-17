<template>
    <b-row>
        <b-col>Typ: {{item.type==='exp'?'Expense':'Income'}}</b-col>
        <b-col>Title: {{item.title}}</b-col>
        <b-col>Amount: {{item.amount | formatCurrency}}</b-col>
    </b-row>
</template>

<script>
export default {
  name: 'TransactionItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
