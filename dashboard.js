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
    return fetch("https://mock-round-3.onrender.com/data",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(el)
    }).then((res)=>res.json())
}
const getData=async()=>{
    let el=await fetch("https://mock-round-3.onrender.com/data")
    let data=await el.json()
    console.log(data)
    appendData(data)
}
let tbody=document.getElementById("ttbody")
const appendData=(data)=>{
    tbody.innerHTML=" "
    data.forEach(el => {
        let tr=document.createElement("tr")
        let th1=document.createElement("td")
        let image=document.createElement('img')
        image.url=el.image_url
        th1.append(image)
        let th2=document.createElement("td")
        th2.innerText=el.book_name
        let th3=document.createElement("td")
        th3.innerText=el.author
        let th4=document.createElement("td")
        th4.innerText=el.genre
        let th5=document.createElement("td")
        th5.innerText=el.edition
        let th6=document.createElement("td")
        th6.innerText=el.publisher
        let th7=document.createElement("td")
        th7.innerText=el.cost
        let edit=document.createElement("button")
        edit.innerText="Edit"
        edit.style.color="white"
        edit.style.backgroundColor="green"
        edit.addEventListener("click",()=>{
            editel(el.id)
        })
        let del=document.createElement("button")
        del.innerText="Delete"
        del.style.backgroundColor="red"
        del.style.color="white"
        del.addEventListener("click",()=>{
            deleteel(el.id)
        })
        tr.append(th1,th2,th3,th4,th5,th6,th7,edit,del)
        tbody.append(tr)
    });
}

const deleteel=(id)=>{

}

const Modal = document.getElementById("movies-modal");
const Name = document.getElementById("movie-name");


const editel=(id)=>{
    console.log(id)
    Modal.style.display = "block";
    let form=document.getElementById("editform")
    form.addEventListener("click",(e)=>{
        e.preventDefault()
        let name=document.getElementById("mavie-name").value
        return fetch(`https://mock-round-3.onrender.com/data/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({book_name:name})
        }).then((res).res.json())
    })
}
let closeModel = document.querySelector(".close-btn");

closeModel.addEventListener("click", () => {
  Modal.style.display = "none";
  
});
getData()



// let image=document.createElement("img")
//         image.src=el.image_url
//         let book_name=document.createElement("h1")
//         book_name.innerText=el.book_name
//         let author=document.createElement("p")
//         author.innerText=el.author
//         let genre=document.createElement("p")
//         genre.innerText=el.genre
//         let edition=document.createElement("p")
//         edition.innerText=el.edition
//         let publisher=document.createElement("p")
//         publisher.innerText=el.publisher
//         let cost=document.createElement("p")
//         cost.innerText=el.cos

// let table=document.createElement("table")
//         table.setAttribute("id","table")
//         let thead=document.createElement("thead")
//         let tr=document.createElement("tr")
        // let th1=document.createElement("th")
        // th1.innerText="Book Cover Image"
        // let th2=document.createElement("th")
        // th2.innerText="Name of the book"
        // let th3=document.createElement("th")
        // th3.innerText="Author of the book"
        // let th4=document.createElement("th")
        // th4.innerText="Genre "
        // let th5=document.createElement("th")
        // th5.innerText="Edition"
        // let th6=document.createElement("th")
        // th6.innerText="Publisher"
        // let th7=document.createElement("th")
        // th7.innerText="Cost"
        // let th8=document.createElement("th")
        // th8.innerText="Edit"
        // let th9=document.createElement("th")
        // th9.innerText="Delete"
        // tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9)