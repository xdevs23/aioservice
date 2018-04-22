'use strict'

const child_process = require('child_process')
const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  console.log('New scan request')
  let mimeFormat
  let pnmToFormat
  switch (url.parse(req.url, true).query.format) {
    case 'jpg':
      mimeFormat = 'image/jpeg'
      pnmToFormat = 'jpeg'
      break
    default:
    case 'pdf':
      mimeFormat = 'application/pdf'
      pnmToFormat = 'pdf'
      break
  }
  res.writeHead(200, {'Content-Type': mimeFormat})
  res.flushHeaders()
  let proc = child_process.exec(`scanimage --resolution 300 --contrast 4 --brightness 4 --compression JPEG --jpeg-quality 0 -x 210 -y 297 | pnmtojpeg | dd bs=4K status=progress | convert -quality 100 jpeg:- ${pnmToFormat}:-`, {
    encoding: 'binary',
    maxBuffer: 64*1024*1024
  })
  proc.stdout.on('data', data => {
    if (data && data.length > 0) {
      console.log(`  Writing ${data.length}`)
      res.write(data, 'binary')
    }
  })
  proc.stderr.on('data', data => console.error(data.toString()))
  proc.on('close', () => {
    console.log('Scan done.')
    res.end()
  })
}).listen(8080)

console.log('Listening on 8080')
