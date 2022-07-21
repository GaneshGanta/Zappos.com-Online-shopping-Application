function getData() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1e26f80598msh61a96af899f1294p1d9b32jsn27d7f52fe33d',
            'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
        }
    };

fetch('https://shoes-collections.p.rapidapi.com/shoes', options)
	.then((res) => {
        return res.json();
    })
	.then((res) => {
        console.log(res);
        append(res);
    })
	.catch((err) => {
        console.error(err);
    });
}

getData();

function append(res){

   let container = document.getElementById("container");

   res.map((el)=>{
    
     let image = document.createElement("img");
     image.src = el.image;
     let name = document.createElement("h3");
     name.innerText = el.name;
     name.setAttribute("class","name_box");
     let price = document.createElement("p");
     price.innerText = `$${el.price}`;
     price.setAttribute("class","price_box");
     let Div = document.createElement("div");
     Div.setAttribute("class","box");
     
     Div.append(image,name,price);
     container.append(Div);

   });
}
