let student = {
    fee: 600_000,
    getTax: () => {
        let fee = this.fee
        let result = fee*10/100
        return result
        
    }
}
console.log(student.result)
