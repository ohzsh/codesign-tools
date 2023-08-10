import fs from 'fs'
import path from 'path'
import component from './../template'
import utils from './../utils'

const root = path.resolve('')
const testPath = root + '/asset/font_hiytajitqeu/icon'

test('component create', async function() {
  const files = await component(testPath, 'h-icon', 'codesign-weapp.css')
  expect(files.length).toBe(4)
})

test('create remove', async function() {
  await utils.rmdir(testPath)
  let exit = true
  try {
    fs.statSync(testPath)
  } catch (error) {
    exit = false
  }
  expect(exit).toBe(false)
})
