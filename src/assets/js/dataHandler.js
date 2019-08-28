import XLSX from 'xlsx'

let database = {
  init: false
}

// 读取文件
function fileHandle (file) {
  const files = file.target.files
  if (files && files[0]) {
    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString
    reader.onload = (e) => {
      const bstr = e.target.result
      database.workbook = XLSX.read(bstr, {type: rABS ? 'binary' : 'array'})
      database.init = true
    }
    if (rABS) reader.readAsBinaryString(files[0]); else reader.readAsArrayBuffer(files[0])
  }
}

// 根据表名获取表格所有内容
function getTableByName (tableName) {
  if (!database.init) {
    return []
  }
  const ws = database.workbook.Sheets[tableName]
  // sheet_to_json可配置的参数 {header:1, raw:true, cellDates:true}
  return XLSX.utils.sheet_to_json(ws)
}

// 根据index获取对应的表名
function getTableNameByIndex (index) {
  if (!database.init) {
    return []
  }
  return database.workbook.SheetNames[index || 0]
}

export default {
  init (e) {
    fileHandle(e)
  },
  getTable (tableName) {
    return getTableByName(tableName)
  }
}
