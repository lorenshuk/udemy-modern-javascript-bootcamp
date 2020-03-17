let account = {
    name: 'Benji Dukan',
    expenses: [],
    income: [],
    addExpense: function (desc, amt) {
        this.expenses.push({
            description: desc, 
            amount: amt
        })
    },
    addIncome: function (desc, amt) {
        this.income.push({
            description: desc, 
            amount: amt
        })
    },
    getAccountSummary: function () {
        let totalExpense = 0.00
        let totalIncome = 0.00

        this.expenses.forEach(element => {
            totalExpense += element.amount
        });

        this.income.forEach(element => {
            totalIncome += element.amount
        });

        return (this.name != '' ? this.name : '<No Name Entered>') + ` has a BALANCE of $${(totalIncome-totalExpense).toFixed(2)}. Expenses: $${totalExpense.toFixed(2)}. Income: $${totalIncome.toFixed(2)}.`
    }
}

account.addExpense('Rent', 2600)
account.addExpense('Coffee', 120.00)
account.addIncome('Salary', 12004)
account.addIncome('Trading', 4500)
console.log(account)
console.log(account.getAccountSummary())
