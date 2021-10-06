async function question_delete(question) {

    const data = {
        question
    };

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch('/question_delete', options);
    const json = await response.json();
}

question_delete("what");

let table = document.getElementById("question-table");
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
    table.setAttribute('class', 'table has-background-white has-text-primary-dark');
    thead.setAttribute('class', 'table  has-background-white has-text-primary-dark');


    // Adding the entire table to the body tag
    document.getElementById('question-table').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Sr. No.";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Question";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Correct Answer";

    heading_1.setAttribute('scope', 'col');
    heading_2.setAttribute('scope', 'col');
    heading_3.setAttribute('scope', 'col');

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);

    thead.appendChild(row_1);

    let index = json.length - 1,
        s_no = 1;
    length = json.length;
    let correctindex = json[index].correctIndex;
    while (index >= 0) {

        let row = document.createElement('tr');

        let row_data1 = document.createElement('td');
        row_data1.appendChild(document.createTextNode(s_no));
        let row_data2 = document.createElement('td');
        row_data2.appendChild(document.createTextNode(json[index].question));
        let row_data3 = document.createElement('td');
        row_data3.appendChild(document.createTextNode(json[index].options[correctindex - 1]));
       
        row.appendChild(row_data1);
        row.appendChild(row_data2);
        row.appendChild(row_data3);

        tbody.appendChild(row);
        index--;
        s_no++;

    }

}

function compare(a, b) {
    let nra = a.score.split("/")[0];
    let dra = a.score.split("/")[1];
    let nrb = b.score.split("/")[0];
    let drb = b.score.split("/")[1];

    if (nra / dra > nrb / drb) {
        return -1;
    } else {
        return 1;
    }
    return 0;
}

async function data_request() {
    const response = await fetch('/questions');
    let json = await response.json();
    set_data(json);
};

data_request();

