$(document).load(($) => {
    $.get("http://localhost:4200/funcao/listar", function (data) {
    
        var ul = $("#resultados");

        console.log(data);

        $.each(data, function () {
            ul.append(
               `<tr>
                    <th> scope="row">${this._Id}</th>
                    <td>${this.name}</td>
                    <td>${this.desc}</td>
                    <td>${this.horses}</td>
                    <td>${this.color}</td>
                    <td>${this.autonomy}</td>
                </tr>`
            )
        })
    })
})
        