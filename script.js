var listaRegistro = {
  ultimoIdGerado: 0,
  usuario: [
    { id: 1, fabricante: "ASUS", modelo: "I7", ano: "2019", data: "2022" },
    { id: 2, fabricante: "Lenovo", modelo: "I09", ano: "2021", data: "2022" },
  ],
};

function render() {
  const tbody = document.getElementById("listaRegistroBody");
  if (tbody) {
    tbody.innerHTML = listaRegistro.usuario
    .sort((a,b) => {
      return a.fabricante<b.fabricante ? -1 : 1
    })
      .map((usuario) => {
        return `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.fabricante}</td>
                <td>${usuario.modelo}</td>
                <td>${usuario.ano}</td>
                <td>${usuario.data}</td>
              </tr>`;
      })
      .join("");
  }
}

function insert(fabricante, modelo, ano, data) {
  const id = listaRegistro.ultimoIdGerado + 1;
  listaRegistro.ultimoIdGerado = id;
  listaRegistro.usuario.push({
    id,
    fabricante,
    modelo,
    ano,
    data,
  });
  render()
  visualizar('cadastro')
}

function edit(id, fabricante, modelo, ano, data) {}
function deletar(id) {}

function visualizar(page) {
  document.body.setAttribute("page", page);
  if (page === "cadastro") {
    document.getElementById("fabricante").focus();
  }
}

function submeter(e){
  e.preventDefault()
  const data = {
    id: document.getElementById('id').value || listaRegistro.ultimoIdGerado+1,
    fabricante: document.getElementById('fabricante').value,
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('anoFabricacao').value,
    dataInclu: document.getElementById('dataInclusao').value,
  }
  if(data.id){
    edit(...data)
  }else{
    insert(data.modelo, data.fabricante, data.ano, data.dataInclu)
  }
}

window.addEventListener("load", () => {
  render();
  document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
});
