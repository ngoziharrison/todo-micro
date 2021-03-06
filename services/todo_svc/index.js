const express = require("express")


var todo_list = require("./database/todo_list.json")


function  showlists(file){
  return file
}

function getlist(file, listname){
  if(file.lists.hasOwnProperty(listname)){
    return file.lists[listname]
  } else {
    console.log('Failed to find this list')
    return {ok: false}
  }
}

const app = express()

app.get("/", (req, res) => {
  res.send('the todo app is running')

})

app.get("/todo/list/", (req, res) => {
  res.json(showlists(todo_list))
})

app.get("/todo/list/:listname", (req, res) =>{
  const listname = req.params.listname
  res.json(getlist(todo_list, listname))

})

/*app.post('/todo/create', function(req, res) {

});*/


const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`todo_svc listening on port ${port}`)
})
