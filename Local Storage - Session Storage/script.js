//Inserindo um dado
localStorage.setItem('name', 'Jheniffer')

//Restart sem perder dados


//resgatar item
const nome = localStorage.getItem('name')
console.log(nome)

//remover item 
localStorage.removeItem('name')

//limpar todos os dados
localStorage.setItem('a', 1)
localStorage.setItem('b', 2)

console.log(typeof localStorage.getItem('a'))

localStorage.clear()

//sessionStorage

sessionStorage.setItem('number', 123)

const person = {
    name: 'Jheniffer',
    age: 23,
    job: 'Programmer'
}

//localStorage.setItem('person', person)

localStorage.setItem('person', JSON.stringify(person))

const getPerson = localStorage.getItem('person')

console.log(getPerson)

const personObject = JSON.parse(getPerson)

console.log(typeof personObject)

console.log(personObject.age)