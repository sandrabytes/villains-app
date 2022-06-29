document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
  const villainName = document.querySelector('input').value
  try{
    const response = await fetch(`https://villains-api-100devs.herokuapp.com/api/villains/${villainName}`)
    const data = await response.json()
    console.log(data)

    document.getElementById('idNumber').innerText = data.id
    document.getElementById('villainName').innerText = data.name
    document.getElementById('villainMovie').innerText = data.movie
    document.getElementById('villainHome').innerText = data.home

    document.getElementById('villainImage').src = data.image
    document.getElementById('villainCaption').innerText = data.name
  }catch(error) {
    console.log(error)
  }
}