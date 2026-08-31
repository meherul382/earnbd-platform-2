function toggleMenu(){document.querySelector("nav")?.classList.toggle("show")}
function filterPosts(){const q=document.getElementById("search").value.toLowerCase();document.querySelectorAll(".post").forEach(p=>p.style.display=p.dataset.text.toLowerCase().includes(q)?"block":"none")}
