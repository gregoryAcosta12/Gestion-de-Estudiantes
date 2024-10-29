// scripts.js

    const studentForm = document.getElementById('studentForm');
    const studentTable = document.getElementById('studentTable').querySelector('tbody');

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío automático del formulario

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const matricula = document.getElementById('matricula').value;
        const materia = document.getElementById('materia').value;
        const nota = document.getElementById('nota').value;

        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${matricula}</td>
            <td>${materia}</td>
            <td>${nota}</td>
            <td class="actions">
                <button class ="b2"  onclick="editStudent(this)">Editar</button>
                <button  class ="b2"  onclick="deleteStudent(this)">Eliminar</button>
            </td>
        `;

        studentTable.appendChild(newRow);

        studentForm.reset();
    });


function editStudent(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll('td');

    document.getElementById('nombre').value = cells[0].innerText;
    document.getElementById('apellido').value = cells[1].innerText;
    document.getElementById('matricula').value = cells[2].innerText;
    document.getElementById('materia').value = cells[3].innerText;
    document.getElementById('nota').value = cells[4].innerText;

    row.remove();
}

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
