function SimplePromise(executor) {
  let self = this
  self.status = 'pending'
  self.data = null
  self.onResolvedCallback = []
  self.onRejectedCallback = []
  function resolve(value) {
    // TODO: 成功回调
    if (self.status === 'pending') {
      self.status = 'resolve'
      self.data = value
      for (let i = 0; i < onResolvedCallback.length; i++) {
        self.onResolvedCallback[i](value)
      }
    }
  }
  function reject(reason) {
    // TODO: 失败回调
    if (self.status === 'pending') {
      self.status = 'reject'
      self.data = reason
      for (let i = 0; i < onRejectedCallback.length; i++) {
        self.onRejectedCallback[i](reason)
      }
    }
  }
  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
SimplePromise.prototype.then = function (onResolved, onRejected) {
  let self = this
  let promise1
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
  onRejected =
    typeof onRejected === 'function' ? onRejected : (reason) => reason

  if (self.status === 'resolved') {
    return (promise1 = new SimplePromise(function (resolve, reject) {
      try {
        let x = onResolved(self.data)
        if (x instanceof SimplePromise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (e) {
        reject(e)
      }
    }))
  }

  if (self.status === 'rejected') {
    return (promise1 = new SimplePromise(function (resolve, reject) {
      try {
        let x = onRejected(self.data)
        if (x instanceof SimplePromise) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    }))
  }

  if (self.status === 'pending') {
    return (promise1 = new SimplePromise(function (resolve, reject) {
      self.onRejectedCallback.push(function () {
        try {
          let x = onResolved(self.data)
          if (x instanceof SimplePromise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
      self.onRejectedCallback.push(function () {
        try {
          let x = onRejected(self.data)
          if (x instanceof SimplePromise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    }))
  }
}
