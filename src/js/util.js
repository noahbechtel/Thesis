function openNav () {
  document.getElementById('mySidenav').style.width = '45vw'
  document.getElementById('menu-btn').style.display = 'none'
}

/* Set the width of the side navigation to 0 */
function closeNav () {
  document.getElementById('menu-btn').style.display = 'block'
  document.getElementById('mySidenav').style.width = '0'
}

function togglePass () {
  var x = document.getElementById('password')
  if (x.type === 'password') {
    x.type = 'text'
  } else {
    x.type = 'password'
  }
}
