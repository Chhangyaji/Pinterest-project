var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "A beutiful girl", image: "https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "women", image: "https://plus.unsplash.com/premium_photo-1664379519132-aa97377491ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9sbHl3b29kJTIwYWN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Hollywood Actress", image: "https://images.unsplash.com/photo-1585436656238-ac9c5824f46e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9sbHl3b29kJTIwYWN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Animals", image: "https://plus.unsplash.com/premium_photo-1661255454444-13277f7679a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbGx5d29vZCUyMGFjdHJlc3N8ZW58MHx8MHx8fDA%3D"},
    {name: "Tiger", image: "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Squirrel", image: "https://plus.unsplash.com/premium_photo-1669725687338-7a68f0d58227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"},
    {name: "Dog", image: "https://images.unsplash.com/photo-1491545437994-ebc9551b87d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"},
    {name: "A bullet", image: "https://images.unsplash.com/photo-1481575184241-4754ea78a1bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Bike image", image: "https://images.unsplash.com/photo-1602038187784-41e649a79d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91dGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Moutain", image: "https://media.istockphoto.com/id/1322194555/photo/mount-abu-hill-station-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=laEpC8WaqWNFvxgtySOslqRVeIKicnsoS6xcO2gfAoc="},
    {name: "A wonderfull image", image: "https://images.unsplash.com/photo-1598719830738-32b91fa649be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "A chines wowen", image: "https://images.unsplash.com/photo-1598760348275-6559f09ea93e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNleHl8ZW58MHx8MHx8fDA%3D"},
    {name: "A game", image: "https://images.unsplash.com/photo-1736267737328-26c39ef475c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D"},
    {name: "Gym men", image: "https://images.unsplash.com/photo-1736264334806-b50e5ec94be1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D"},
    
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();