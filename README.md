
# 🥗 Emagrece AI

O **Emagrece AI** é um site que cria uma dieta personalizada para o usuário com base em três informações simples:  
**objetivo de emagrecimento, peso atual e tipo físico**.

O projeto foi desenvolvido como parte da trilha **#NLWAgents** da Rocketseat, integrando inteligência artificial à construção de aplicações web.

## 🚀 Funcionalidades

- Recebe três entradas do usuário:
  - Objetivo (Perder peso, Manter peso, Ganhar massa)
  - Peso atual (em kg)
  - Tipo físico
- Gera uma dieta semanal com base nas informações fornecidas
- Integração com a **Gemini API** para gerar sugestões realistas e saudáveis

## 🧠 Tecnologias utilizadas

- **Node.js** – Backend e lógica do servidor
- **EJS** – Motor de templates para renderização dinâmica do HTML
- **Gemini API** – Inteligência artificial para gerar as dietas
- **HTML + CSS** – Interface do usuário simples e intuitiva

## 💻 Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/rifernun/emagrece-ai-web.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd emagrece-ai-web
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure sua chave da Gemini API:**

   Crie um arquivo `settings.json` na raiz do projeto com as variáveis:

   ```
   {
      "PORT"=sua-porta
      "GEMINI_API_KEY"="sua-chave-aqui"
   }
   
   ```

5. **Inicie o servidor:**
   ```bash
   node index.js
   ```

6. Acesse em seu navegador:
   ```
   http://localhost:sua-porta
   ```

## 🖼️ Preview

https://emagreceai-production.up.railway.app/


## 📌 Requisitos

- Node.js 18+
- Conta com acesso à Gemini API (via Google AI)

## 🤝 Contribuições

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir uma issue ou um pull request.

---

Feito com 💚 por [Richard Rifernun](https://github.com/rifernun)
