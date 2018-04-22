# Plug & Play Scanning server

Easy to use plug & play web server for scanning

### Requirements

The `scanimage` command, Imagemick for converting between formats (`pnmtojpeg`, `convert`)

### Usage

```bash
node index.js
```

(or `nodejs` on some platforms)

It runs on Port 8080 (change that in the script if you want)

Make sure your scanner is connected (either over the
network, which should work out of the box, or using
a cable), then just open the address in your browser and that's it.
It will start scanning and your browser will show the scan when it's done.
(Or while scanning, depending on how the browser handles the chunked data)

Quality is set to 300 DPI by default but feel free to change that in the script.

In fact, you can change any settings you want there.


### License

This program is licensed under the MIT license.

```
MIT License

Copyright (c) 2018 Simão Gomes Viana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
