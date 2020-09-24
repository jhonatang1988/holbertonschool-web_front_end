function welcome (firstName, lastName) {
  const fullname = firstName + ' ' + lastName
  function displayFullName () {
    window.alert('Welcome ' + fullname + '!')
  }
  displayFullName()
}
