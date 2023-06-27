// Mini project using open brewery db api
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.openbrewerydb.org/v1/breweries?by_city='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        data.forEach(brews => {
          const markup = `<li>${brews.name}</li>`
          document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}