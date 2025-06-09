document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");
  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results";
  document.body.insertBefore(resultsContainer, document.querySelector("footer"));

  btn.addEventListener("click", () => {
    const texto = input.value.toLowerCase().trim();
    if (!texto) return;

    const filtrados = cursos.filter(curso =>
      curso.titulo.toLowerCase().includes(texto) ||
      curso.descripcion.toLowerCase().includes(texto) ||
      curso.categoria.toLowerCase().includes(texto) ||
      (curso.keywords && curso.keywords.some(k => k.toLowerCase().includes(texto)))
    );

    resultsContainer.innerHTML = "";

    if (filtrados.length === 0) {
      resultsContainer.innerHTML = "<p style='text-align:center;'>No se encontraron cursos.</p>";
      return;
    }

    filtrados.forEach(curso => {
      const card = document.createElement("div");
      card.classList.add("curso");
      card.innerHTML = `
        <img src="${curso.imagen}" alt="${curso.titulo}" style="width:100%; max-height:180px; object-fit:cover; border-radius:8px;">
        <h4>${curso.titulo}</h4>
        <p>${curso.descripcion}</p>
        <button onclick="verCurso(${curso.id})">Ver detalles</button>
      `;
      resultsContainer.appendChild(card);
    });
  });
});

function verCurso(id) {
  window.location.href = `course-details.html?id=${id}`;
}
