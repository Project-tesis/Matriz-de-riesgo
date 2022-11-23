let test1=document.getElementById("test1");
let arr=[];

test1.addEventListener("change",{
    arr.splice(index, 0, item)
})

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });

    chart.update();
}


