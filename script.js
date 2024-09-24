const historyBtn = document.getElementById('showHistory');
const donateBtn = document.getElementById('showDonate');

// section show and hide 
document.getElementById('showHistory').addEventListener('click', function(){
    sectionHide('history');
    historyBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.add('hover:bg-[#B4F461]')
    donateBtn.classList.remove('bg-[#B4F461]');
    donateBtn.classList.remove('hover:bg-[#B4F461]')
})

document.getElementById('showDonate').addEventListener('click', function(){
    sectionHide('donate-section');
    donateBtn.classList.add('bg-[#B4F461]');
    donateBtn.classList.add('hover:bg-[#B4F461]')
    historyBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.remove('hover:bg-[#B4F461]')
})

