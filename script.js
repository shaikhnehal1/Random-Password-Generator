



const range = document.querySelector('#range1');
const range_txt = document.querySelector('#range_txt');
const input1 = document.querySelector('#input1')

// Update range_txt whenever the range value changes
range.addEventListener('input', () => {
    range_txt.innerHTML = range.value;
});



const genbtn = document.querySelector('#gen_btn').addEventListener('click',()=>{
    let pass_range = parseInt(range.value);
    let passWords = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*"
    let password = "";

    for (let i = 0; i < pass_range; i++) {
        password += passWords[Math.floor(Math.random() * passWords.length)]
        
    }
   
    input1.value = password;
  
     
  

})


const remove_btn = document.querySelector('#remove-btn').addEventListener('click',()=>{
 
    input1.value = "";

})



let notify = document.querySelector('#notify')

let pop_up = document.querySelector('#pop-up')

let notify_box_txt = document.querySelector('#notify_box_txt')


let copy_btn = document.querySelector('#copy-btn').addEventListener('click',()=>{
    if (input1.value) {
        notify_box_txt.innerHTML = input1.value;
        navigator.clipboard.writeText(input1.value);
        notify.style.visibility = 'visible';
       

       

        setTimeout(()=>{
           
            notify.style.visibility = 'hidden';
          

        },1500)
    }
})
