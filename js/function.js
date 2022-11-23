function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });

    chart.update();
}

function addList(index,item){
    arr=[];
    arr.splice(index, 0, item);
    console.log(arr);
}

