const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const env = require('./settings.json')
const AI = require('./services/gemini')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/health', (req,res)=>{
    res.sendStatus(200)
})

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/diet', async (req,res)=>{
    let {objetivo, peso, tipo} = req.body


    if(objetivo !== null && peso !== null && tipo !== null){
        let context = `O objetivo principal é: ${objetivo}. O tipo de pessoa é: ${tipo}. O peso atual é: ${peso}kg. Por favor, crie uma dieta focada nesse objetivo e tipo de pessoa.`

        try {
            let dietaHtmlContent = await AI.MakeDiet(context)

            res.render('dietSite', {
                objetivo: objetivo,
                dietaHtml: dietaHtmlContent,
                peso: peso
            })

        } catch (error) {
            console.error("Erro ao gerar a dieta:", error)
            res.status(500).send("Ocorreu um erro ao gerar a dieta. Por favor, tente novamente.")
        }
    }
    if(objetivo == null || peso == null || tipo == null){
        res.redirect('/')
    }
    
})

app.listen(env.PORT, ()=>{
    console.log('Starting Service...')
})