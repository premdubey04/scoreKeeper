const player1 = document.querySelector('#bt1')
const span1 = document.querySelector('#span1');
const player2 = document.querySelector('#bt2')
const span2 = document.querySelector('#span2');
const reset = document.querySelector('input');



let count = 0;
player1.addEventListener('click', () => {
    const dropdown = document.getElementById("values");
    const selectedValue = dropdown.value;
    
  
    if(count===parseInt(selectedValue)){
        span1.style.color='green';
        span2.style.color='red';
    }
    if(count<=selectedValue){
        span1.innerHTML = count++;
    }
    // console.log(selectedValue);
})

player2.addEventListener('click', () => {
    const dropdown = document.getElementById("values");
    const selectedValue = dropdown.value;

    if(count===parseInt(selectedValue)){
        span2.style.color='green';
        span1.style.color='red';
    }
    if(count<=selectedValue){
        span2.innerHTML = count++;
    }
     
  
    // console.log(selectedValue);
})

reset.addEventListener('click', () => {
    location.reload();
})
