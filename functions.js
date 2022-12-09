// let test1 = document.getElementById('test1')
// let test2 = document.getElementById('test2')
// let test3 = document.getElementById('test3')


// test1.addEventListener("change", () => {
//     console.log(test1.value);
// })

// test2.addEventListener("change", () => {
//     console.log(test2.value);
// })

// test3.addEventListener("change", () => {
//     console.log(test3.value);
// })

let botonEnviar = document.getElementById('botonEnviar')

let arr=[]
let arr2=[]

botonEnviar.addEventListener('click', () => {
    let selects = document.querySelectorAll('select')

    selects.forEach(select => {
        if (select.value)
            arr.push(parseInt(select.value))
            if (select.value == 0)
                arr2.push(parseInt(select.value))
            else if (parseInt(select.value) > 0 && parseInt(select.value) < 4)
                arr2.push(parseInt(select.value))
            else if (parseInt(select.value) >= 4 && parseInt(select.value) < 7)
                arr2.push(parseInt(select.value)+2)
            else if (parseInt(select.value) >= 7 && parseInt(select.value) < 9)
                arr2.push(parseInt(select.value)+1)
            else if (parseInt(select.value) == 9)
                arr2.push(parseInt(select.value)+1)
            else if (parseInt(select.value) == 10)
                arr2.push(parseInt(select.value))
    });

    console.log(arr);
    console.log(arr2);
    arr=[]
    arr2=[]
})

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });

    chart.update();
}