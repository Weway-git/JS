function showPic(whichpic) {
    let source = whichpic.getAttribute("href")
    let placeholder = document.getElementById('placeholder')

    placeholder.setAttribute('src',source)

    let text= whichpic.getAttribute("title")
    let description=document.getElementById("description")
    console.log(description.childNodes)
    description.firstChild.nodeValue=text
}

function countBodyChildren() {

    let body_element = document.getElementsByTagName("body")[0]
    // console.log (body_element.childNodes)

}
window.onload=countBodyChildren