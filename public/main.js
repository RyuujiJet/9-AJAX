console.log('Hello，这里是main.js')

// getCSS.onclick = () => {
//   const request = new XMLHttpRequest()

//   request.open('GET', '/style.css')

//   request.onload = () => {
//     console.log('request.response', request.response)

//     // 创建style标签
//     const style = document.createElement('style')
//     // 填写style内容
//     style.innerHTML = request.response
//     // 插入head标签里
//     document.head.appendChild(style)
//   }
//   request.onerror = () => {
//     console.log('失败了')
//   }

//   request.send()
// }
getCSS.onclick = () => {
  const request = new XMLHttpRequest()

  request.open('GET', '/style.css') // readyState = 1

  request.onreadystatechange = () => {
    console.log('!!!', request.readyState)
    if (request.readyState === 4) {
      console.log('下载完成')
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert('加载 CSS 失败')
      }
    }
  }

  request.send() // readyState = 2
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()

  request.open('GET', '/2.js')

  request.onload = () => {
    console.log('request.response', request.response)

    const script = document.createElement('script')
    script.innerHTML = request.response
    document.head.appendChild(script)
  }
  request.onerror = () => {
    console.log('失败了')
  }

  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()

  request.open('GET', '/3.html')

  request.onload = () => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => {
    console.log('失败了')
  }

  request.send()
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()

  request.open('GET', '/4.xml')

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log('request.response', request.responseXML)
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }

  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()

  request.open('GET', '/5.json')

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log('request.response', request.response)
      const object = JSON.parse(request.response)
      myJSON.textContent = object.name
    }
  }

  request.send()
}

let n = 1
getPage.onclick = () => {
  n+=1

  const request = new XMLHttpRequest()

  request.open('GET', `/page${n}.json`)

  request.onreadystatechange =() => {
    if (request.readyState === 4 && request.status === 200) {
      console.log('request.response', request.response)
      const array = JSON.parse(request.response)
      array.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item.id
        XXX.appendChild(li)
      })
    }
  }

  request.send()
}