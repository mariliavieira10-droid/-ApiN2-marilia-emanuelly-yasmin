async function carregarDetalhesProduto() {
  const path = window.location.pathname; // Pega o caminho da URL (ex: "/products/3")

  const partes = path.split("/");
  const id = partes[partes.length - 1]; // Divide a string pelas barras e pega o último elemento
  console.log(id);

  const response = await fetch(`/api/products/${id}`); // Usa o ID dinâmico no fetch
  const produto = await response.json();
  const container = document.getElementById("container-produto");

  container.innerHTML = `
      <div class="card">
        <h3>${produto.nome}</h3>
        <p>${produto.disponivel ? "Disponível" : "Esgotado"}</p>
        <p>${produto.id}</p>
      </div>
    `;
}

window.onload = carregarDetalhesProduto;