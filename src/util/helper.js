
const normalized = (resources_arrays) => {

  console.log('xxxx: normalized in ', resources_arrays)
  const out = resources_arrays.reduce( (acc, item) => {
    acc[item._id] = item
    return acc
  }, {})
  console.log('xxxx: normalized ', out)
  return out
}

export { normalized }
