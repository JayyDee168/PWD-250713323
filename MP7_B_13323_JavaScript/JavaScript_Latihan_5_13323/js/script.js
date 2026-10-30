function fn_ValForm(){
    
    var sMsg = "";
    var validasiEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var emailPeserta = document.getElementById("email").value;
    var umurPeserta = document.getElementById("umur").value;
    var Kategori = document.getElementById("kategori").value;

    if(emailPeserta == "" || umurPeserta == "" || Kategori == ""){
        sMsg += "\n* Semua field harus diisi";
    }

    if(umurPeserta >= 17 && umurPeserta <= 65){
        if(umurPeserta <= 25){
            infoPaket = "Paket Pelajar";
            }
            else if(umurPeserta > 25){
                infoPaket = "Paket Umum";
            }
        }else{
        sMsg += "\n* Umur Peserta Tidak Memenuhi Syarat";
    }

    

    if(!validasiEmail.test(emailPeserta)){
        sMsg += "\n* Format Email Tidak Benar";
    }
    if (sMsg != ""){
        alert("Peringatan:\n"+ sMsg);
    }
    

    switch(Kategori){
        case "S":
            Kategori = "Silver";
        break;
        case "G":
            Kategori = "Gold";
        break;
        case "P":
            Kategori = "Platinum";
        break;
        default:
            sMsg += "\n* Kategori Tidak Valid";
        break;

    }
    sMsg += "\n* Terima kasih " + nama + " ! Anda terdaftar di paket " + pilihan + " " + infoPaket + ".";
    return true;
}


