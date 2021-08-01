const validator = require("validator")

let User = function (data) {
  this.data = data
  this.errors = []
}

User.prototype.validate = function () {
  this.data.username == "" ? this.errors.push("Username can't be blank") : null
  if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
    this.errors.push("Username can only contain letters and numbers")
  }
  !validator.isEmail(this.data.email) ? this.errors.push("Email must be valid") : null
  this.data.password == "" ? this.errors.push("Password can't be blank") : null
  if (this.data.password.length > 0 && this.data.password.length < 12) {
    this.errors.push("Password must be 12 characters or longer")
  }
  if (this.data.password.length > 100) {
    this.errors.push("Password cannot exceed 100 characters")
  }
  if (this.data.username.length > 0 && this.data.username.length < 3) {
    this.errors.push("Username must be 3 characters or longer")
  }
  this.data.username.length > 30 ? this.errors.push("Username cannot exceed 30 characters") : null
}

User.prototype.register = function () {
  // Validate user data
  this.validate()

  // Save data to database
}

module.exports = User
