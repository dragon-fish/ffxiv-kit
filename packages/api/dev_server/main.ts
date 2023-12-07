import { XIVApi } from '../src/index.js'

declare global {
  interface Window {
    xiv: XIVApi
    hljs: any
  }
}

const api = new XIVApi()
window.xiv = api

// main
;(async () => {
  const printResult = (data: any) => {
    console.log(data)
    const code = JSON.stringify(data, null, 2)
    const block = document.getElementById('result') as HTMLElement
    const result = window.hljs.highlight(code, { language: 'json' })
    block.innerHTML = result.value
  }

  document.body.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' && target.dataset.ffxiv) {
      const type = target.dataset.ffxiv
      const id = target.dataset.ffxivId
      if (!type || !id || !api.isValidContentIndex(type)) return

      e.preventDefault()
      printResult('loading...')
      api.contents.get(type as any, +id).then((data) => {
        printResult([type, id, data])
      })
    }
  })

  const searchForm =
    document.querySelector<HTMLFormElement>('form#search_form')!

  // reset indexes select
  const indexesSelect = searchForm.querySelectorAll<HTMLSelectElement>(
    'select.indexes_select'
  )!
  indexesSelect.forEach((select) => {
    select.innerHTML = ''
    ;['', ...api.XIV_CONTENT_INDEXES].forEach((item) => {
      const option = document.createElement('option')
      option.value = item
      option.innerText = item || '(All)'
      select.appendChild(option)
    })
    select.value = ''
  })

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    printResult('loading...')

    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    const action = data.get('action') as string
    const indexes = data.get('indexes') as string
    const value = data.get('value') as string

    switch (action) {
      case 'search':
        api
          .search(value, { indexes: [indexes as any] })
          .then((data) => {
            printResult(data)
          })
          .catch((err) => {
            printResult(err)
          })
        break
      case 'content':
        let request: Promise<any>
        if (indexes && value) {
          request = api.contents.get(indexes as any, value as any)
        } else if (indexes) {
          request = api.contents.list(indexes as any)
        } else {
          request = api.contents.indexes()
        }
        request
          .then((data) => {
            printResult(data)
          })
          .catch((err) => {
            printResult(err)
          })
        break
    }
  })
})()
