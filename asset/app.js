let topQuestions = document.querySelectorAll('.top-question');

let dropDownBtns = document.querySelectorAll('.dropDownBtn');

let dropDownBtnArr = Array.from(dropDownBtns);
let topQuestionArr = Array.from(topQuestions);

dropDownBtnArr.forEach((dropDownBtn, index) => {
    dropDownBtn.addEventListener('click', (e) => {
        let question = topQuestionArr[index];
        
        if (question.style.display === 'block') {
            question.style.display = 'none';
            dropDownBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'; 
        } else {
            question.style.display = 'block';
            dropDownBtn.innerHTML = '<i class="fa-solid fa-minus"></i>'; 
        }
    });
});
