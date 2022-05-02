exports.getUser = (req, res, next) => {
  try {
    res.send('hello user.')
  } catch (err) {
    next(err)
  }
}

exports.postUser = (req, res, next) => {
  try {
    console.log(req.body)
    res.json(req.body)
  } catch (err) {
    next(err)
  }
}
