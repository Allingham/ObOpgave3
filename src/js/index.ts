let selector: HTMLSelectElement = <HTMLSelectElement> document.getElementById("SelectFunc");
let DoIt: HTMLButtonElement = <HTMLButtonElement> document.getElementById("DoIt")
let Input: HTMLInputElement = <HTMLInputElement> document.getElementById("StringInput")
let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

//DoIt.addEventListener("click", function(){element.innerHTML = Input.value;})

function convertString(input: string): string{
    switch(selector.selectedIndex){
        case 0:{
            return input.toUpperCase()
        }
        case 1:{
            return input.toLowerCase()
        }
        default:{
            return input
        }
    }
}

DoIt.addEventListener("click", function(){
    element.innerHTML = convertString(Input.value)
})

element.innerHTML = Input.value;