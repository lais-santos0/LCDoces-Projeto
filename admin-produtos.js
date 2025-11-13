// Gerenciamento de produtos

let currentFilter = "all"
let editingProductId = null

// Declare the checkAuth function or import it
function checkAuth(role) {
  // Placeholder implementation for checkAuth
  // This should be replaced with actual authentication logic
  return true // Assume user is authenticated for now
}

document.addEventListener("DOMContentLoaded", () => {
  // Verificar autenticação
  const user = checkAuth("admin")
  if (!user) return

  // Inicializar produtos no localStorage se não existir
  initializeProducts()

  // Carregar produtos
  loadProducts()
})

function initializeProducts() {
  const products = localStorage.getItem("products")
  if (!products) {
    // Carregar produtos padrão do script.js
    const defaultProducts = {
      destaques: [
        {
          id: 1,
          name: "Trufa de Brigadeiro",
          description: "70% CACAU",
          price: 2.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "trufas",
        },
        {
          id: 2,
          name: "Trufa de Beijinho",
          description: "LEITE CONDENSADO E COCO",
          price: 2.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "trufas",
        },
        {
          id: 3,
          name: "Trufa de Mousse",
          description: "MARACUJÁ, LIMÃO, BEIJINHO E MORANGO",
          price: 2.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "trufas",
        },
        {
          id: 4,
          name: "Brigadeiro",
          description: "70% CACAU",
          price: 2.5,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "docinhos",
        },
      ],
  "mais-pedidos": [
        {
          id: 4,
          name: "Brigadeiro",
          description: "70% CACAU",
          price: 2.5,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "docinhos",
        },
        {
          id: 5,
          name: "Beijinho",
          description: "LEITE CONDENSADO E COCO",
          price: 2.5,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "docinhos",
        },
        {
          id: 6,
          name: "Brigadeiro de Amendoim",
          description: "LEITE CONDENSADO E AMENDOIM TRITURADO",
          price: 3.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "docinhos",
        },
        {
          id: 7,
          name: "Doce de Leite",
          description: "CREME DE LEITE, AÇÚCAR DE CONFEITEIRO E LEITE EM PÓ",
          price: 3.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "docinhos",
        },
      ],
  classicos: [
        {
          id: 8,
          name: "Bolo de Pote Tradicional",
          description: "BRIGADEIRO 70% CACAU E MASSA DE CHOCOLATE",
          price: 10.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "bolo-de-pote",
        },
        {
          id: 9,
          name: "Bolo de Pote Dois Amores",
          description: "BRIGADEIRO DE LEITE EM PÓ, BRIGADEIRO 70% CACAU E MASSA MESCLADA DE BAUNILHA E CHOCOLATE",
          price: 12.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "bolo-de-pote",
        },
        {
          id: 10,
          name: "Bolo de Pote Duo",
          description: "BRIGADEIRO 70% CACAU, BRIGADEIRO DE NINHO COM MORANGO E MASSA DE CHOCOLATE",
          price: 10.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "bolo-de-pote",
        },
        {
          id: 11,
          name: "Bolo de Pote de Ninho com Morango",
          description: "BRIGADEIRO DE NINHO COM MORANGO E MASSA BRANCA DE BAUNINHA",
          price: 14.0,
          unit: "unidade",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "bolo-de-pote",
        },
      ],
  gourmet: [
        {
          id: 12,
          name: "Trufa de Brigadeiro (Festa)",
          description: "70%% CACAU - Caixa com 100 unidades",
          price: 120.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194531-uW6bR9jWEryZ1J3gJrdpbauga1eTa3.png",
          category: "festa",
        },
        {
          id: 13,
          name: "Trufa de Beijinho (Festa)",
          description: "LEITE CONDENSADO E COCO - Caixa com 100 unidades",
          price: 120.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 14,
          name: "Trufa de Mousse (Festa)",
          description: "CHOCOLATE 70%, RECHEIOS DE: MORANGO, LIMÃO, MARACUJÁ - Caixa com 100 unidades",
          price: 85.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 15,
          name: "Uvinha (Festa)",
          description: "BRIGADEIRO DE LEITE EM PÓ EMBALADO NA UVA - Caixa com 100 unidades",
          price: 100.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 16,
          name: "Brigadeiro (Festa)",
          description: "BRIGADEIRO 70% CACAU - Caixa com 100 unidades",
          price: 75.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 17,
          name: "Brigadeiro de Amendoim (Festa)",
          description: "LEITE CONDENSADO E AMENDOIM TRITURADO - Caixa com 100 unidades",
          price: 85.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 18,
          name: "Doce de Leite (Festa)",
          description: "CREME DE LEITE, AÇÚCAR DE CONFEITEIRO E LEITE EM PÓ - Caixa com 100 unidades",
          price: 85.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 19,
          name: "Beijinho (Festa)",
          description: "LEITE CONDENSADO E COCO - Caixa com 100 unidades",
          price: 85.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 20,
          name: "Casadinho (Festa)",
          description: "BRIGADEIRO DE LEITE EM PÓ E BRIGADEIRO 70% CACAU - Caixa com 100 unidades",
          price: 85.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
        {
          id: 21,
          name: "Sensação (Festa)",
          description: "BRIGADEIRO 70% CACAU E BRIGADEIRO DE - Caixa com 100 unidades",
          price: 85.0,
          unit: "pacote",
          image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
          category: "festa",
        },
      ],
    }
    localStorage.setItem("products", JSON.stringify(defaultProducts))
  }
}

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products"))
  const productsList = document.getElementById("products-management-list")

  // Coletar todos os produtos
  const allProducts = []
  for (const section in products) {
    products[section].forEach((product) => {
      allProducts.push({
        ...product,
        displaySection: section,
      })
    })
  }

  // Remover duplicatas (produtos que aparecem em múltiplas seções)
  const uniqueProducts = []
  const seenIds = new Set()

  allProducts.forEach((product) => {
    if (!seenIds.has(product.id)) {
      seenIds.add(product.id)
      uniqueProducts.push(product)
    }
  })

  // Filtrar por categoria se necessário
  let filteredProducts = uniqueProducts
  if (currentFilter !== "all") {
    filteredProducts = uniqueProducts.filter((p) => p.category === currentFilter)
  }

  // Renderizar produtos
  if (filteredProducts.length === 0) {
    productsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🍰</div>
                <p>Nenhum produto encontrado</p>
            </div>
        `
    return
  }

  productsList.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-management-card">
            <img src="${product.image}" alt="${product.name}" class="product-management-image">
            <div class="product-management-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span class="product-price">R$ ${product.price.toFixed(2)} / ${product.unit}</span>
                    <span class="product-category">${getCategoryLabel(product.category)}</span>
                </div>
                <div class="product-display-section">
                    Exibido em: <strong>${getDisplayLabel(product.displaySection)}</strong>
                </div>
            </div>
            <div class="product-management-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})" title="Editar">
                    ✏️
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})" title="Excluir">
                    🗑️
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

function getCategoryLabel(category) {
  const labels = {
    trufas: "Trufas",
    docinhos: "Docinhos",
    "bolo-de-pote": "Bolo de Pote",
    festa: "Festa",
  }
  return labels[category] || category
}

function getDisplayLabel(section) {
  const labels = {
    destaques: "Destaques",
    "mais-pedidos": "Mais Pedidos",
    classicos: "Clássicos",
    gourmet: "Gourmet",
  }
  return labels[section] || section
}

function filterProducts(category) {
  currentFilter = category

  // Atualizar tabs ativos
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.classList.remove("active")
  })
  event.target.classList.add("active")

  loadProducts()
}

function openProductModal(productId = null) {
  const modal = document.getElementById("product-modal")
  const modalTitle = document.getElementById("modal-title")
  const form = document.getElementById("product-form")

  form.reset()
  editingProductId = productId

  if (productId) {
    modalTitle.textContent = "Editar Produto"

    // Carregar dados do produto
    const products = JSON.parse(localStorage.getItem("products"))
    let product = null

    for (const section in products) {
      product = products[section].find((p) => p.id === productId)
      if (product) {
        document.getElementById("product-id").value = product.id
        document.getElementById("product-name").value = product.name
        document.getElementById("product-description").value = product.description
        document.getElementById("product-price").value = product.price
        document.getElementById("product-unit").value = product.unit
        document.getElementById("product-category").value = product.category
        document.getElementById("product-image").value = product.image

        // Encontrar em qual seção o produto está
        document.getElementById("product-display").value = section
        break
      }
    }
  } else {
    modalTitle.textContent = "Adicionar Produto"
  }

  modal.style.display = "flex"
}

function closeProductModal() {
  const modal = document.getElementById("product-modal")
  modal.style.display = "none"
  editingProductId = null
}

function saveProduct(event) {
  event.preventDefault()

  const products = JSON.parse(localStorage.getItem("products"))

  const productData = {
    id: editingProductId || Date.now(),
    name: document.getElementById("product-name").value,
    description: document.getElementById("product-description").value,
    price: Number.parseFloat(document.getElementById("product-price").value),
    unit: document.getElementById("product-unit").value,
    category: document.getElementById("product-category").value,
    image: document.getElementById("product-image").value,
  }

  const displaySection = document.getElementById("product-display").value

  if (editingProductId) {
    // Editar produto existente - remover de todas as seções primeiro
    for (const section in products) {
      products[section] = products[section].filter((p) => p.id !== editingProductId)
    }
  }

  // Adicionar produto na seção selecionada
  if (!products[displaySection]) {
    products[displaySection] = []
  }
  products[displaySection].push(productData)

  // Salvar no localStorage
  localStorage.setItem("products", JSON.stringify(products))

  // Fechar modal e recarregar lista
  closeProductModal()
  loadProducts()

  alert(editingProductId ? "Produto atualizado com sucesso!" : "Produto adicionado com sucesso!")
}

function editProduct(productId) {
  openProductModal(productId)
}

function deleteProduct(productId) {
  if (!confirm("Tem certeza que deseja excluir este produto?")) {
    return
  }

  const products = JSON.parse(localStorage.getItem("products"))

  // Remover produto de todas as seções
  for (const section in products) {
    products[section] = products[section].filter((p) => p.id !== productId)
  }

  localStorage.setItem("products", JSON.stringify(products))
  loadProducts()

  alert("Produto excluído com sucesso!")
}

// Fechar modal ao clicar fora
window.onclick = (event) => {
  const modal = document.getElementById("product-modal")
  if (event.target === modal) {
    closeProductModal()
  }
}
