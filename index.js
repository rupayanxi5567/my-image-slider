
let gallaryScroll = document.querySelector(".gallary")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")



gallaryScroll.addEventListener("wheel", (e) => {

    e.preventDefault()
    
    gallaryScroll.scrollLeft += e.deltaY
    gallaryScroll.style.scrollBehavior = "auto"
  
}
 )




backBtn.addEventListener( "click" , () => {

    gallaryScroll.style.scrollBehavior = "smooth"

    gallaryScroll.scrollLeft -= 300
  
}
 )







nextBtn.addEventListener( "click" , () => {

    gallaryScroll.style.scrollBehavior = "smooth"
    gallaryScroll.scrollLeft += 300
  
}
 )







