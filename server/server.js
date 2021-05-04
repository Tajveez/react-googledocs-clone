const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/google-docs-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const io = require('socket.io')(3001, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    socket.on('get-document', documentId => {
        const data = ""
        socket.join(documentId)
        socket.emit('load-document', data)
        socket.on('send-changes', delta => {
            // console.log(delta)
            socket.broadcast.to(documentId).emit('receive-changes', delta)
        })
    })

    console.log('connected!')
})