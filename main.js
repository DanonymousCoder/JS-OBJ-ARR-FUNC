let student = {
    fee: 600_000,
    getTax: () => {
        let fee = student.fee
        let total = 0 
        let result = parseInt(fee)*10/100 + total
        return result
        
    }
}
console.log(student.result)
