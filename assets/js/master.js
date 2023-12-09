 let _count;
    let inp = document.getElementById('inp')
    function _add() {
        let temp = inp.value
        if (temp.length >= 1) {
            let _li = document.createElement('li')
            _li.innerHTML = `
           <p spellcheck='false'>${temp}</p>
            <div id='btn'>
                <i class="bi bi-trash" onclick='del(this)'></i>
            <i class="bi bi-pencil-square" onclick='_edit(this)'></i>
            </div>
           
            `
            _li.classList.add('border')
            document.getElementById('list').appendChild(_li)
            _count = document.querySelectorAll('#list>li')
            inp.value = null
            inp.focus()
        } else {
            alert('write something 😜')
        }
    }
    function del(s) {
        s.parentElement.parentElement.remove()
    }
    function _edit(s) {
        s.parentElement.previousElementSibling.setAttribute('contenteditable', 'true')
        s.parentElement.previousElementSibling.focus()
    }
    function para() {
        _count.forEach(x => {
            x.remove()
        });
    }
