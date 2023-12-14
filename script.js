let youtubeData = [
    {
        title: "How to Host Firebase Website",
        thubnail: "https://i.ytimg.com/vi/FnjtdHkEiYA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDH_y5cANcBBuRiWrY_-vEJGJeHxw",
        category: "Firebase",
        desc: "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!"
    },
    {
        title: "How tos Host Firebase Website",
        thubnail: "https://i.ytimg.com/vi/FnjtdHkEiYA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDH_y5cANcBBuRiWrY_-vEJGJeHxw",
        category: "Firebase",
        desc: "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!"
    }
]

//Adding Data To Latest On YouTube
const youtubeThumbnail = document.getElementById("youtube-thumbnail");
const category = document.getElementById("category");
const title = document.getElementById("title");
const description = document.getElementById("description")

youtubeData.forEach(data => {
    title.innerText = data.title;
    category.innerText = data.category;
    description.innerText = data.desc;
});



const navigation = document.querySelectorAll(".navigations");
const openMenuButton = document.getElementById("menu-icon");
const closeMenuButton = document.getElementById("menu-close");
const nav = document.querySelector("nav")

openMenuButton.addEventListener("click", ()=>{
    nav.classList.add("active")
})

closeMenuButton.addEventListener("click", ()=>{
    nav.classList.remove("active")
})
