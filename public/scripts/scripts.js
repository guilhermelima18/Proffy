document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {

    // Duplica os campos
    const newFieldContainer = document.querySelector("#horario").cloneNode(true);

    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll("input");

    fields.forEach(field => {
        field.value = "";
    });

    // Colocar na página
    document.querySelector("#horarios").appendChild(newFieldContainer);
}