// Selected Radio Button Check
const btnContainer = document.querySelector('.solution-radio-box');
const btns = btnContainer.getElementsByClassName('solution-radio');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('selected');

        if (current.length > 0) {
            current[0].className = current[0].className.replace(' selected', '');
        }
        this.className += ' selected';
    });
}
