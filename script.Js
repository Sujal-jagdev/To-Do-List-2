let input = document.querySelector('input')
let task =  document.querySelector('.Task')


function my(){
    document.querySelector('.button-1').addEventListener('click',()=>{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        task.appendChild(li)
        li.style.fontWeight = 800;
        li.style.fontSize = "23px"
        input.value = '';   
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        span.addEventListener('click',()=>{
            task.appendChild(li).style.display = "none"
        })
    })
}

my()