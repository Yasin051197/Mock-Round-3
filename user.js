const getData=async()=>{
    let el=await fetch("https://mock-round-3.onrender.com/data")
    let data=await el.json()
    console.log(data)
    appendData(data)
}
let container=document.getElementById("movies")
const appendData=(data)=>{
    container.innerHTML=" "
    data.forEach(el => {
        let div=document.createElement("div")
        div.setAttribute("id","div")
        div.style.display="fles"
        let div1=document.createElement("div")
        div1.setAttribute("id","divfirst")
        let div2=document.createElement("div")
        div2.setAttribute("id","divsecond")
        let image=document.createElement("img")
        image.src=el.image_url
        let book_name=document.createElement("h1")
        book_name.innerText=el.book_name
        let author=document.createElement("p")
        author.innerText=el.author
        let genre=document.createElement("p")
        genre.innerText=el.genre
        let edition=document.createElement("p")
        edition.innerText=el.edition
        let publisher=document.createElement("p")
        publisher.innerText=el.publisher
        let cost=document.createElement("p")
        cost.innerText=el.cost
        let button=document.createElement("button")
        button.innerText="BORROW"
        div1.append(image)
        div2.append(book_name,author,genre,edition,publisher,cost,button)
        div.append(div1,div2)
        container.append(div)
    });
}
getData()