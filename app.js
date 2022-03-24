function klikTombolConnect() {
    //gunanya menerima input dari user.
    const nama = prompt('Siapa Nama mu?');
    if (nama == '' || nama == null){
        alert('Ini siapa ya?')
    } else {
        //gunanya menampilkan output.
        alert('Halo ' + nama);
    }

}

const button = document.getElementById('Connect!');

button.addEventListener('click', klikTombolConnect);

//click
//mouseover
//keyup
//press
//focus
//blur