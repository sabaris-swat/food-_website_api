// let token = " 609419461c0944f493ca5667f03f1ada";

// async function pizza(){
//     let displayFood = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${token}&query=pasta&number=10`, {
//         method: 'GET',
//         headers:{
//             'Content-Type': 'application/json',
//            Authorization: `Bearer ${token}`
//         }
//     });

//     let final = await displayFood.json();
//     console.log(final);


    
//     const image = document.getElementById("image-01");
    

//     image.src = final.results[0].image;
    
    
// }


// pizza();

// let token1 = "314f897dd5fd4a55a7f9f01aa3062549";

// async function pasta(){
//     let displayFood = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${token}&query=pasta&number=10`, {
//         method: 'GET',
//         headers:{
//            'Content-Type': 'application/json',
//            Authorization: `Bearer ${token}`
//         }
//     });

//     let final1 = await displayFood.json();
//     console.log(final1);

//     const image1 = document.getElementById("image-02");

//     image1.src = final1.results[0].image;
//     image1.src = final1.results[1].image;
    
// }
// pasta()


let key = '6109066d052747b9bfad64b1b6dfaf89'

async function pizza(){
    let displayFood= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=pizza&number=30`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        },
    })

    let finalFood = await displayFood.json();
    console.log(finalFood);
    let a=[];
    let b=[];
    for(let i=0; i<finalFood.results.length;i++){
        
        
        a.push(finalFood.results[i].image)
        b.push(finalFood.results[i].title)}
        console.log(a);
        console.log(b);
        
        const row1 = document.getElementById("row");

        const foodImage = a.map((element, c) =>{
   
          return `<div class = "col-3 p-5">
                     <div class="card">
                       <img src =${element} class = "rounded-5 ">
                          <div class="card-body">
                          <h5 class="card-title">${b[c]}</h5>
                  </div>
             </div>             
          </div>`

        })

        let s= foodImage.join("");
        row1.innerHTML = s;

}

pizza();