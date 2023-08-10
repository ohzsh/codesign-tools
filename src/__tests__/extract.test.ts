import fs from 'fs'
import path from 'path'
import { Extract } from '../extract'

const root = path.resolve('')
const testPath = root + '/asset/font_hiytajitqeu'
const dirName = 'codesign-weapp'
const fileName = 'iconfont.css'
const ext = new Extract(testPath, dirName, fileName)

test('Extract mkdir', async function() {
  await ext.generateDir()
  const fgt = fs.statSync(`${testPath}/codesign-weapp`)
  expect(fgt.isDirectory()).toBe(true)
})

test('Extract css', async function() {
  ext.setContent('hello world')
  const targetCss = await ext.generate()
  const fgt = fs.readFileSync(targetCss, 'utf-8')
  expect(fgt).toBe('hello world')
})

test('Extract clearDir', async function() {
  const delDir = await ext.clearDir()
  let exit = true
  try {
    fs.statSync(delDir)
  } catch (error) {
    exit = false
  }
  expect(exit).toBe(false)
})
