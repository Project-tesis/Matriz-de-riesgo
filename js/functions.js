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

botonEnviar.addEventListener('click', () => {
    let selects = document.querySelectorAll('select')

    selects.forEach(select => {
        if (select.value)
            arr.push(select.value)
    });

    console.log(arr);
    
})




function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });

    chart.update();
}