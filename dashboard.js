let form=document.getElementById('dashboard')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let el={
        image_url: document.getElementById('url').value,
        book_name:document.getElementById('name').value,
        author: document.getElementById('author').value,
		genre: document.getElementById('Genre').value,
		edition: document.getElementById('Edition').value,
		publisher:document.getElementById('Publisher').value,
		cost: document.getElementById('Cost').value,
		borrowed: false,
    }
    console.log(el)
    addData(el)
})

const addData=(el)=>{
    return fetch("",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(el)
    }).then((res)=>res.json())
}