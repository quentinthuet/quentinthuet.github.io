$('[lang="en"]').hide(); // hide all lang attributes on start.
$('[lang="fr"]').show(); // show just english text (you can change it)
/*$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
    console.log($(this.val()))
    console.log("in")
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'fr':
            $('[lang]').hide();
            $('[lang="fr"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="fr"]').show();
        }
});*/

/*const checkbox = document.getElementById('lang-switch');

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked){
        $('[lang="fr"]').show();
        $('[lang="en"]').hide();
    }
    else {
        $('[lang="en"]').show();
        $('[lang="fr"]').hide();
    }
});*/

const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

st.flap.addEventListener('transitionend', () => {

    if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
        $('[lang="en"]').show();
        $('[lang="fr"]').hide();
    } else {
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
        $('[lang="en"]').hide();
        $('[lang="fr"]').show();
    }

})

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
});

document.addEventListener('click', (e) => st.clickHandler(e));



























