import fetch from 'node-fetch';


// 1st function

const first_function = async(foo, bar) => {

  let response = await fetch('https://jsonplaceholder.typicode.com/todos');

  let userData = await response.json()
  console.log(userData)

}

first_function()

// 2nd function

function loadData(url) {
  return fetch(url).then(response => {
    if(response.status == 200) {
      console.log(response)
      return response.json();
    }
    else{
      throw new Error(response.status)
    }
  })
}

loadData('https://jsonplaceholder.typicode.com/todos')