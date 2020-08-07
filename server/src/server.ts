import express from 'express';
import routes from './routes'
const app = express();
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(routes)


const port = 3333;
app.listen( port, () => {
  console.log('listening at port ' + port)
})