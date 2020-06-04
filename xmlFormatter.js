const fs = require('fs')
const path = require('path')

const format = require('xml-formatter')

const options = {
	indentation: '    ',
	collapseContent: true,
	lineSeparator: '\n',
}

const callingDir = process.cwd()

console.log(callingDir)

const cliArgs = process.argv.reduce((acc, arg, index) => (index >= 2 ? [...acc, arg] : acc), [])

const filePath = callingDir + '/' + cliArgs[0]

const xmlContent = fs.readFileSync(filePath, 'utf8')

const formattedXml = format(xmlContent, options)

fs.writeFileSync(filePath, formattedXml)

console.log('done')
