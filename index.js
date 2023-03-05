const myEach = (collection, callback) => {
  let newArray = convertToArray(collection)
  newArray.forEach((one) => callback(one))
  return collection
}

const myMap = (collection, callback) => {
  let newArray = convertToArray(collection)
  return newArray.map((one) => callback(one))
}

const myReduce = (collection, callback, acc) => {
  let newArray = convertToArray(collection)
  if (!acc) {
    acc = newArray[0]
    newArray = newArray.slice(1)
  }
  return newArray.reduce(callback, acc)
}

const myFind = (collection, predicate) => {
  let newArray = convertToArray(collection)
  return newArray.find(item => predicate(item))
}

const myFilter = (collection, predicate) => {
  let newArray = convertToArray(collection)
  return newArray.filter(item => predicate(item))
}

const mySize = (collection) => {
  let newArray = convertToArray(collection)
  return newArray.length
}

const myFirst = (collection, n) => {
  if (!n) {
    return collection[0]
  } else {
    let collect1 = collection.slice(0, n)

    return collect1
  }
}

const myLast = (collection, n) => {
  if (!n) {
    return collection[collection.length - 1]
  } else {
    let collect1 = collection.slice(collection.length - n)

    return collect1
  }
}

const myKeys = (obj) => {
  return Object.keys(obj)
}

const myValues = (obj) => {
  return Object.values(obj)
}

const convertToArray = (thing) => {
  if (Array.isArray(thing) !== true) {
    let newArray = Object.values(thing)
    return newArray
  } else {
    return thing
  }
}