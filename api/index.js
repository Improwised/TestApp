import {sum,subtract} from './common/index.js';
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.json(['Hello World'])
})

app.get('/sum', (req, res) => {
	req.query.num1 === 'red'  // true
	req.query.num2 === 'blue' // true

	res.json({
		'Number 1': req.query.num1,
		'Number 2': req.query.num2,
		'Answer': sum(req.query.num1, req.query.num2)
	})
})

app.get('/sub', (req, res) => {
	req.query.num1 === 'red'  // true
	req.query.num2 === 'blue' // true

	res.json({
		'Number 1': req.query.num1,
		'Number 2': req.query.num2,
		'Answer': subtract(req.query.num1, req.query.num2)
	})
})

app.listen(port, () => {
	console.log(`My app listening on port ${port}`)
})
