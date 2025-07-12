const { GoogleGenAI } = require('@google/genai')
const env = require('../settings.json')

const gemini = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY
})

const model = 'gemini-2.5-flash'

async function MakeDiet(context) {
    const response = await gemini.models.generateContent({
    model,
    contents: [
        {
        text: `
            Monte a dieta baseada no contexto abaixo, de forma direta e fácil de entender.
            Estruture a dieta em uma tabela HTML com as colunas: Dia, Refeição, Descrição.
            No final, inclua uma dica para o usuário em um parágrafo separado de forma RESUMIDA. Alem disso, preciso que monte com a seguinte estrutura
            - Segunda
            - Terça
            - Quarta
            - Quinta
            - Sexta
            - Sabado
            - Domingo
            
            Por favor, gere apenas o conteúdo que será inserido dentro da div com classe "card-body".
            Não inclua títulos ou divs externas. Os dias da semana serao SEMPRE com rowspan para evitar repetição.
            Alem disso, preciso que indique abaixo do dia da semana (segunda, terca, quarta,...) a quantidade de calorias em kcal que tera no dia.
            Ao final, mostre o total de calorias semanais de forma separada das dicas finais. 

            Use a seguinte estrutura de tabela HTML:

            <table class="diet-table">
            <thead>
                <tr><th>Dia</th><th>Refeição</th><th>Descrição</th></tr>
            </thead>
            <tbody>
                <!-- linhas da dieta aqui -->
            </tbody>
            </table>
            <p>Calorias semanais... </p>
            <p>Dica final...</p>

            CONTEXTO:
            ${context}
        `.trim()
        }
    ]
    })
    if(!response.text){
        throw new Error('Não foi possivel carregar a dieta')
    }

    return response.text
}

module.exports = {MakeDiet}