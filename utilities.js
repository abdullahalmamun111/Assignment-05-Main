// input id value capture
function getValueOfId(id){
    const idName = document.getElementById(id).value;
    const idParseFloat = parseFloat(idName);
    return idParseFloat;
}
// text id value capture
function idTextValueCapture(id){
    const capture = document.getElementById(id).innerText;
    const parseFloatValue = parseFloat(capture);
    return parseFloatValue ;
}
// section hide and show function
function sectionHide(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// all donate card functionality
function Donate(place,amount,totalDonate,mainBalance){
        // update donate amount
        const inputAmount = getValueOfId(amount);
        if(isNaN(inputAmount) || inputAmount < 0){
            alert('Failed To Donate Plese Type Valid Amount')
            return ;
        }
        const donate = idTextValueCapture(totalDonate);
        const setDonate = document.getElementById(totalDonate);
        setDonate.innerText = inputAmount + donate;
    
        // update main balance
        const currentBalance = idTextValueCapture(mainBalance);
        const setBalance = document.getElementById(mainBalance);
        setBalance.innerText = currentBalance - inputAmount ;

        // transaction section added
        if(place === 'noakhali-Donate'){
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="w-9/12 mx-auto">
            <div class="p-[20px] border-solid border-2 rounded-xl mt-8 space-y-2" id="transaction-history">
            <h1 class = "text-xl ">${inputAmount} Taka Is Doanated For Donate for Flood at Noakhali,Bangladesh</h1>
            <p>${new Date()}</p>
        </div>
    </div>
    `
    document.getElementById('history').appendChild(div);
        }
    else if(place === 'feni-donate'){
        const div = document.createElement('div');
            div.innerHTML = `
            <div class="w-9/12 mx-auto">
            <div class="p-[20px] border-solid border-2 rounded-xl mt-8 space-y-2" id="transaction-history">
            <h1 class = "text-xl ">${inputAmount} Taka Is Doanated For Donate for Flood at Feni,Bangladesh</h1>
            <p>${new Date()}</p>
        </div>
    </div>
    `
    document.getElementById('history').appendChild(div);
    }
    else if(place === 'quota-donate'){
        const div = document.createElement('div');
            div.innerHTML = `
            <div class="w-9/12 mx-auto">
            <div class="p-[20px] border-solid border-2 rounded-xl mt-8 space-y-2" id="transaction-history">
            <h1 class = "text-xl ">${inputAmount} Taka Is Doanated For Donate for Quota movement Bangladesh</h1>
            <p>${new Date()}</p>
        </div>
    </div>
    `
    document.getElementById('history').appendChild(div);
    }
    // show modal
    my_modal_3.showModal()
}