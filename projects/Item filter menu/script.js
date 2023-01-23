let button = document.querySelectorAll('.btn');
let storeItems = document.querySelectorAll('.store-item');

button.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        let filter = e.target.dataset.filter;       // put data-filter value
        // console.log(filter)

        storeItems.forEach(item => {
            if(filter === "all"){                   // filter items
                item.style.display = 'block';
            }
            else{
                if (item.classList.contains(filter)){
                    item.style.display = 'block';
                }
                else{
                    item.style.display = 'none';
                }
            }
        })
    })
})