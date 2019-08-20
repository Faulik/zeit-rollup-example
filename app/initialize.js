document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app')

  const fullpage = require('fullpage.js')

  const fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
    sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
  })
})
