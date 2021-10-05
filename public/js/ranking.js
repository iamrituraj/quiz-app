let table = document.querySelector("table");
let json;

function set_data(data) {
    json = data;
    show_table(json);
}

function show_table(json) {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    table.setAttribute('class', 'table table-striped table-dark');


    // Adding the entire table to the body tag
    document.getElementById('ranking-table').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Sr. No.";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Name";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Email";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Score";

    heading_1.setAttribute('scope', 'col');
    heading_2.setAttribute('scope', 'col');
    heading_3.setAttribute('scope', 'col');
    heading_4.setAttribute('scope', 'col');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);

    thead.appendChild(row_1);

    let index = 0,s_no = 1;
    length = json.length;

    while (index < length) {

        let row = document.createElement('tr');

        let row_data1 = document.createElement('td');
        row_data1.appendChild(document.createTextNode(s_no));
        let row_data2 = document.createElement('td');
        row_data2.appendChild(document.createTextNode(json[index].username));
        let row_data3 = document.createElement('td');
        row_data3.appendChild(document.createTextNode(json[index].email));
        let row_data4 = document.createElement('td');

        if (json[index].score == null)
            row_data4.appendChild(document.createTextNode('0'));
        else {
            row_data4.appendChild(document.createTextNode(json[index].score));
        }

        row.appendChild(row_data1);
        row.appendChild(row_data2);
        row.appendChild(row_data3);
        row.appendChild(row_data4);

        tbody.appendChild(row);
        index++;
        s_no++;
    }

}

function compare(a, b) {
    let nra=a.score.split("/")[0];
    let dra=a.score.split("/")[1];
    let nrb=b.score.split("/")[0];
    let drb=b.score.split("/")[1];

    console.log(nra/drb,nrb/drb);
    if (nra/dra > nrb/drb) {
        return -1;
    }
    else{
        return 1;
    }
    return 0;
}

async function data_request() {
    const response = await fetch('/rankings');
    let json = await response.json();
    let json2 = json.sort(compare);
    set_data(json2);
};

data_request();
