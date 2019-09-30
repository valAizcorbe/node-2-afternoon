const express = require('express');
const app = express();
const cors = require('cors');
const m_c = require('./controllers/messages_controller');
app.use(express.json());
app.use(cors())
app.use(express.static(__dirname + '/../public/build'));


app.post('/api/messages', m_c.create);
app.get('/api/messages', m_c.read);
app.put(`/api/messages/:id`, m_c.update);
app.delete(`/api/messages/:id`, m_c.delete)


const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})