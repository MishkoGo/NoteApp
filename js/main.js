let popupForm = document.querySelector('.popup-box');
let popupForm_2 = document.querySelector('.popup');
const pForm = document.getElementById('form_id'),
      romf = document.getElementById('wrapper_1'),
      textT = document.getElementById('title_input'),
      textA = document.getElementById('title_text');

document.querySelector('.add-box').onclick = () =>{
    popupForm.classList.add('active');
    popupForm_2.classList.add('active');
}

document.querySelector('.uil-times').onclick = () =>{
    popupForm.classList.remove('active');
    popupForm_2.classList.remove('active');
}

const notes = (e) => {
      
    var today = new Date();
 
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var now = today.toLocaleString('en-US', options);
   
    e.preventDefault()

    let div = document.createElement('li');
    div.className = "note";
    div.innerHTML = `
                    <div class = "details">
                        <p>${textT.value}</p>
                        <span>${textA.value}</span>
                    </div>
                    <div class = "bottom-content">
                        <span>${now}</span>
                        <a href="#" class="a-item" onclick="removeElement()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 15" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </a>
                    </div>
                    `;
    romf.append(div);
}

function removeElement(){
    let removeDiv = document.querySelector('.note');
    removeDiv.remove();
}

pForm.addEventListener('submit', notes)