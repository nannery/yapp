class Document {
  constructor(name) {
    this._name = name
    this._data = { count: 0 }
  }
  get name()  { this._name }
  get count() { this._data.count }
}

export default class {
  constructor() {
    this._store = {}
    this._docs  = []
  }
  get docs() { return this._docs.sort() }

  create_table(name, context) {
    console.log(`Document ${name} created by ${context}`)
    this[name] = new Document(name)
    this._docs.push(name)
  }
}
