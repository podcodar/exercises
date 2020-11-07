import * as fs from 'fs'
import * as path from 'path'

import { JSDOM } from 'jsdom'

import '@testing-library/jest-dom'

// load html
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
const { window } = new JSDOM(html, { resources: 'usable', url: `file://${__dirname}/`})
const { document } = window

describe('web-development[002]', () => {
  beforeAll(() => new Promise(resolve => window.addEventListener('load', resolve)));

  it(`verificar se cada span está amarelo`, () => {
    Array.from(document.querySelectorAll('span')).map(span => {
      expect(span).toHaveStyle({ backgroundColor: 'yellow' })
    })
  })
})