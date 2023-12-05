import { XIVApi } from '../src/index.js'

console.info('hello, world')

const api = new XIVApi()
// @ts-ignore
window.xiv = api

// main
;(async () => {
  const printResult = (data: any) => {
    console.log(data)
    document.getElementById('result')!.innerText = JSON.stringify(data, null, 2)
  }

  document.body.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' && target.dataset.ffxiv) {
      const type = target.dataset.ffxiv
      const id = target.dataset.ffxivId
      if (!type || !id || !api.isValidContentIndex(type)) return

      e.preventDefault()
      printResult('loading...')
      api.contents(type as any, +id).then((data) => {
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
          .search(value, [], [indexes as any])
          .then((data) => {
            printResult(data)
          })
          .catch((err) => {
            printResult(err)
          })
        break
      case 'content':
        api
          .contents(indexes as any, value ? value as any : undefined)
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
