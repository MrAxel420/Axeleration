const express = require('express')
const  mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const  todoRoutes = require('./routes/todos')
const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('Morpheus', hbs.engine)
app.set('view engine', 'Morpheus')
app.set('views', 'views')

app.use(todoRoutes)

async function start() {
    try{
        await mongoose.connect('mongodb+srv://Axel:10102020@cluster0.kogdp.mongodb.net/Memory?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })

    } catch(e) {
        console.log(e)
    }
}

start()


