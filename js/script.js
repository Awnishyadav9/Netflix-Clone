// const first = document.querySelector('.fa-plus')
// // console.log(first)
// first.addEventListener('click' , ()=>{
//     console.log('click')
// });


// const icons = document.querySelectorAll('.container, .ht');
//         const hides = document.querySelectorAll('.hide');
        
//         icons.forEach((icon, index) => {
//             icon.addEventListener('click', () => {
//                 hides[index].classList.toggle('change');
//                 if (hides[index].classList.contains('change')) {
//                     hides[index].style.display = 'block';
//                 } else {
//                     hides[index].style.display = 'none';
//                 }
//             });
//         });



        const accordions = document.querySelectorAll('.accordion');
        const hides = document.querySelectorAll('.hide');
        
        accordions.forEach((accordion, index) => {
            accordion.addEventListener('click', () => {
                hides[index].classList.toggle('change');
                if (hides[index].classList.contains('change')) {
                    hides[index].style.display = 'block';
                } else {
                    hides[index].style.display = 'none';
                }
            });
        });