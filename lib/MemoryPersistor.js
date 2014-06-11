var MemoryStore = require("./MemoryStore")

// attach method for creating test instance
MemoryStore.createTestInstance = function(cb) {
  var memoryPersistor = new MemoryStore()
  memoryPersistor.set("/foo/bar", "null", 1)
  memoryPersistor.set("/foo/bar/baz/beep", 1, 1)
  memoryPersistor.set("/foo/bar/baz/boop", 1, 1)
  memoryPersistor.set("/foo/bar/bat", 4, 2)
  cb(null, memoryPersistor)
}

module.exports = MemoryStore
