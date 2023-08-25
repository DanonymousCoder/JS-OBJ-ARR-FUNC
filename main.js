let student = {
    fee: 600_000,
    getTax: (result) => {
        let result = student.fee*10/100
        return result
    }
}
console.log(getTax);