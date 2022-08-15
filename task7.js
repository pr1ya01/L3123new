let task7 = () => {
    var domstr = ""
    for (var i = 1; i <= 4; i++) {
        domstr += `<tr>
        <td>${i}</td>
        <td>Name${i}</td>
        <td>${i}.jpg</td>`
    }
    document.write(`
    <table>
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    </tr>
    ${domstr}
    </table>
    <style>
    tr:nth-child(even) {
        background-color: skyblue;
    }
    tr:nth-child(odd) {
        background-color: lightblue;
    }
    </style>
    `)
}