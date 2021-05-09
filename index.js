const { exec } = require('child_process')
const express = require('express')
const app = express()

const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi

app.use(express.json())
app.post('/search', (req, res) => {
  exec('python ./main.py ' + req.body.title.replace(regExp, ''), (err, stdout, stderr) => {
    if (err) return res.json({ success: false, msg: err })
    return res.json({ success: true, search: JSON.parse(stdout) })
  })
})

app.listen(8080)