function somar() {
    let tn1 = document.getElementById('txt1')
    let tn2 = document.getElementById('txt2')
    let res = document.getElementById('res1')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let soma = n1 + n2
    res.innerHTML = `A Soma entre ${n1} e ${n2} é <strong>${soma}</strong>`
}

function subtrair() {
    let tn1 = document.getElementById('txt3')
    let tn2 = document.getElementById('txt4')
    let res = document.getElementById('res2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let sub = n1 - n2
    res.innerHTML = `A Subtração entre ${n1} e ${n2} é <strong>${sub}</strong>`
}

function multiplicar() {
    let tn1 = document.getElementById('txt5')
    let tn2 = document.getElementById('txt6')
    let res = document.getElementById('res3')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let m = n1 * n2
    res.innerHTML = `A Multiplicação entre ${n1} e ${n2} é <strong>${m}</strong> `
}

function dividir() {
    let tn1 = document.getElementById('txt7')
    let tn2 = document.getElementById('txt8')
    let res = document.getElementById('res4')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let d = n1 / n2
    res.innerHTML = `A Divisão entre ${n1} e ${n2} é <strong>${d}</strong>`
}