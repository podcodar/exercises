import * as fs from 'fs'
import * as path from 'path'

import { JSDOM } from 'jsdom'

import '@testing-library/jest-dom'

// load html
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
const { window } = new JSDOM(html, { resources: 'usable', url: `file://${__dirname}/`})
const { document } = window

describe('web-development[001]', () => {
  beforeAll(() => new Promise(resolve => window.addEventListener('load', resolve)));

  it(`definir título com 'Bem vindo a PodCodar'`, () => {
    const title = document.querySelector('title')
    expect(title).toHaveTextContent('Bem vindo a PodCodar')
  })

  it(`definir header com cor 'purple'`, () => {
    const header = document.querySelector('#header')
    expect(header).toHaveStyle('color: purple')
  })
})