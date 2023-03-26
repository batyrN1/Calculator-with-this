const calculator = {
    num1: 0,
    num2: 0,
    operator: '',
  
    add: function () {
      return this.num1 + this.num2
    },
  
    subtract: function () {
      return this.num1 - this.num2
    },
  
    multiply: function () {
      return this.num1 * this.num2
    },
  
    divide: function () {
      return this.num1 / this.num2
    },
  
    calculate: function () {
      this.num1 = Number(document.getElementById('num1').value)
      this.num2 = Number(document.getElementById('num2').value)
      this.operator = document.getElementById('operator').value
  
      let result = 0
  
      switch (this.operator) {
        case 'add':
          result = this.add()
          break
        case 'subtract':
          result = this.subtract()
          break
        case 'multiply':
          result = this.multiply()
          break
        case 'divide':
          result = this.divide()
          break
        default:
          result = 0
      }
  
      document.getElementById('result').textContent = result
    },
  }
  
  document.getElementById('calculate').addEventListener('click', () => {
    calculator.calculate()
  })