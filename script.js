let productsData = JSON.parse(localStorage.getItem("products")) || {
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

let selectedProduct = null

function getProducts() {
  const savedProducts = localStorage.getItem("products")
  if (savedProducts) {
    return JSON.parse(savedProducts)
  }

  // Produtos padrão baseados nos cardápios fornecidos
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
        price: 2.5,
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
        price: 120.0,
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
        price: 75.0,
        unit: "pacote",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
        category: "festa",
      },
      {
        id: 20,
        name: "Casadinho (Festa)",
        description: "BRIGADEIRO DE LEITE EM PÓ E BRIGADEIRO 70% CACAU - Caixa com 100 unidades",
        price: 100.0,
        unit: "pacote",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
        category: "festa",
      },
      {
        id: 21,
        name: "Sensação (Festa)",
        description: "BRIGADEIRO 70% CACAU E BRIGADEIRO DE - Caixa com 100 unidades",
        price: 100.0,
        unit: "pacote",
        image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-11-03%20194414-fiEOkEZqHmYmcwBydY3YYifKRh6rls.png",
        category: "festa",
      },
    ],
  }

  localStorage.setItem("products", JSON.stringify(defaultProducts))
  return defaultProducts
}

let cart = []
let currentCategory = "destaques"

function renderProducts(category) {
  const productsGrid = document.getElementById("products-grid")
  const products = productsData[category] || []

  productsGrid.style.opacity = "0"

  setTimeout(() => {
    productsGrid.innerHTML = ""

    if (products.length === 0) {
      productsGrid.innerHTML =
        '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1; padding: 40px;">Nenhum produto encontrado nesta categoria.</p>'
      productsGrid.style.opacity = "1"
      return
    }

    products.forEach((product, index) => {
      const productCard = document.createElement("div")
      productCard.className = "product-card"
      productCard.style.animationDelay = `${index * 0.1}s`
      productCard.style.cursor = "pointer"
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" onclick="openProductModal(${product.id})">
        <div class="product-content" onclick="openProductModal(${product.id})">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="product-footer">
            <div class="product-price-container">
              <span class="product-price">R$ ${product.price.toFixed(2)}</span>
              <span class="product-unit">/ ${product.unit}</span>
            </div>
            <button class="btn-add" onclick="event.stopPropagation(); addToCart(${product.id})" aria-label="Adicionar ${product.name} ao carrinho">
              🛒
            </button>
          </div>
        </div>
      `
      productsGrid.appendChild(productCard)
    })

    productsGrid.style.opacity = "1"
  }, 200)
}

function addToCart(productId) {
  productsData = getProducts()

  let product = null
  for (const category in productsData) {
    product = productsData[category].find((p) => p.id === productId)
    if (product) break
  }

  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  updateCart()

  const btn = event.target
  const originalContent = btn.innerHTML
  btn.innerHTML = "✓"
  btn.style.backgroundColor = "#4caf50"
  setTimeout(() => {
    btn.innerHTML = originalContent
    btn.style.backgroundColor = ""
  }, 800)
}

function updateCart() {
  const cartItems = document.getElementById("cart-items")
  const cartCount = document.getElementById("cart-count")
  const cartTotal = document.getElementById("cart-total")

  // Atualizar contador
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems
  cartCount.style.display = totalItems > 0 ? "flex" : "none"

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = `R$ ${total.toFixed(2)}`

  // Renderizar itens
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Seu carrinho está vazio</p>'
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${item.price.toFixed(2)} / ${item.unit}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remover">🗑️</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (!item) return

  item.quantity += change

  if (item.quantity <= 0) {
    removeFromCart(productId)
  } else {
    updateCart()
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCart()
}

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar")
  const overlay = document.getElementById("cart-overlay")

  sidebar.classList.toggle("active")
  overlay.classList.toggle("active")
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!")
    return
  }

  // Montar mensagem do pedido
  let message = "🍰 *NOVO PEDIDO - LC DOCES CASEIROS* 🍰%0A%0A"

  cart.forEach((item) => {
    message += `📦 *${item.name}*%0A`
    message += `   Quantidade: ${item.quantity} ${item.unit}(s)%0A`
    message += `   Preço unitário: R$ ${item.price.toFixed(2)}%0A`
    message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}%0A%0A`
  })

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  message += `💰 *TOTAL: R$ ${total.toFixed(2)}*%0A%0A`
  message += `📍 Endereço de entrega: (cliente informará)%0A`
  message += `📞 Telefone: (cliente informará)%0A%0A`
  message += `Obrigado por escolher a LC Doces Caseiros! 💜`

  // Enviar via WhatsApp
  const whatsappUrl = `https://wa.me/5583988066233?text=${message}`
  window.open(whatsappUrl, "_blank")

  // Limpar carrinho
  cart = []
  updateCart()
  toggleCart()

  alert("Seu pedido será enviado via WhatsApp! Complete as informações de entrega na conversa. 😊")
}

function changeCategory(category) {
  currentCategory = category

  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })
  event.target.classList.add("active")

  renderProducts(category)
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }

  // Atualizar botões de navegação ativos
  const navBtns = document.querySelectorAll(".nav-btn")
  navBtns.forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")
}

function reloadProducts() {
  productsData = getProducts()
  renderProducts(currentCategory)
}

function openProductModal(productId) {
  productsData = getProducts()

  let product = null
  for (const category in productsData) {
    product = productsData[category].find((p) => p.id === productId)
    if (product) break
  }

  if (!product) return

  selectedProduct = product

  // Preencher modal com dados do produto
  document.getElementById("modal-image").src = product.image
  document.getElementById("modal-image").alt = product.name
  document.getElementById("modal-title").textContent = product.name
  document.getElementById("modal-category").textContent = getCategoryName(product.category)
  document.getElementById("modal-description").textContent = product.description
  document.getElementById("modal-details").textContent = getProductDetails(product)
  document.getElementById("modal-price").textContent = `R$ ${product.price.toFixed(2)}`
  document.getElementById("modal-unit").textContent = `/ ${product.unit}`

  // Mostrar modal
  document.getElementById("product-modal").classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("active")
  document.body.style.overflow = "auto"
  selectedProduct = null
}

function getCategoryName(category) {
  const categoryNames = {
    trufas: "Trufas",
    docinhos: "Docinhos",
    "bolo-de-pote": "Bolo de Pote",
    festa: "Para Festas",
  }
  return categoryNames[category] || "Produto"
}

function getProductDetails(product) {
  const details = {
    1: "Trufa artesanal feita com chocolate 70% cacau de alta qualidade. Textura cremosa e sabor intenso de chocolate. Perfeita para quem ama o sabor clássico do brigadeiro.",
    2: "Trufa delicada de beijinho com leite condensado e coco ralado. Sabor suave e tropical que derrete na boca. Ideal para quem prefere doces mais leves.",
    3: "Trufa de mousse com sabores de maracujá, limão e morango. Textura aerada e sabores frutados refrescantes. Uma opção diferenciada e sofisticada.",
    4: "Brigadeiro tradicional feito com chocolate 70% cacau. O clássico que nunca sai de moda, perfeito para qualquer ocasião.",
    5: "Beijinho tradicional com leite condensado e coco. Coberto com coco ralado, é um dos doces mais amados do Brasil.",
    6: "Brigadeiro com amendoim triturado. Combinação perfeita de chocolate com o crocante do amendoim.",
    7: "Doce de leite cremoso com açúcar de confeiteiro, creme de leite e leite em pó. Sabor suave e textura aveludada que derrete na boca.",
    8: "Bolo de pote tradicional com camadas de bolo fofinho e brigadeiro 70% cacau. Embalado em pote individual para sua comodidade.",
    9: "Bolo de pote com duas delícias: brigadeiro de leite em pó e brigadeiro 70% cacau. Combinação perfeita de chocolate e massa mesclada.",
    10: "Bolo de pote com duas camadas de recheio: brigadeiro de leite em pó e brigadeiro de ninho com morangos. Para os amantes de chocolate e frutas.",
    11: "Bolo de pote especial com brigadeiro de ninho e morango. Camadas generosas de sabor e frescor.",
    12: "Pacote com 100 unidades de trufas de brigadeiro 70% cacau. Ideal para festas, eventos e celebrações. Qualidade artesanal em quantidade.",
    13: "Pacote com 100 unidades de trufas de beijinho. Perfeito para festas que precisam de doces delicados e saborosos.",
    14: "Pacote com 100 unidades de trufas de mousse. Independente do sabor escolhido a combinação é perfeita para seu agrado",
    15: "Pacote com 100 unidades de Uvinha. Formato tradicional de castanha de caju, sabor irresistível de brigadeiro.",
    16: "Pacote com 100 unidades de duo chocolate. Variedade de sabores para agradar todos os convidados da sua festa.",
  }

  return (
    details[product.id] ||
    "Doce artesanal feito com ingredientes de qualidade e muito carinho. Perfeito para adoçar seus momentos especiais."
  )
}

function addToCartFromModal() {
  if (selectedProduct) {
    addToCart(selectedProduct.id)
    closeProductModal()
  }
}

function orderViaWhatsAppFromModal() {
  if (!selectedProduct) return

  let message = `🍰 *PEDIDO - LC DOCES CASEIROS* 🍰%0A%0A`
  message += `📦 *${selectedProduct.name}*%0A`
  message += `💰 Preço: R$ ${selectedProduct.price.toFixed(2)} / ${selectedProduct.unit}%0A%0A`
  message += `Gostaria de fazer um pedido deste produto!`

  const whatsappUrl = `https://wa.me/5583988066233?text=${message}`
  window.open(whatsappUrl, "_blank")
  closeProductModal()
}

window.addEventListener("storage", (e) => {
  if (e.key === "products") {
    reloadProducts()
  }
})

document.addEventListener("DOMContentLoaded", () => {
  reloadProducts()
  updateCart()

  // Adicionar listener para scroll e atualizar navegação
  window.addEventListener("scroll", () => {
    const sections = ["produtos", "informacoes"]
    const navBtns = document.querySelectorAll(".nav-btn")

    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId)
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          navBtns.forEach((btn) => btn.classList.remove("active"))
          navBtns[index].classList.add("active")
        }
      }
    })
  })

  // Fechar carrinho ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const sidebar = document.getElementById("cart-sidebar")
      const overlay = document.getElementById("cart-overlay")
      const modal = document.getElementById("product-modal")

      if (modal.classList.contains("active")) {
        closeProductModal()
      } else if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        overlay.classList.remove("active")
      }
    }
  })

  document.getElementById("product-modal").addEventListener("click", (e) => {
    if (e.target.id === "product-modal") {
      closeProductModal()
    }
  })
})
