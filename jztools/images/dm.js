function myFun(obj) {
    document.getElementById("wpcodepy").value = obj.name
    var Url2 = document.getElementById("wpcodepy");
    Url2.select();
    document.execCommand("Copy");
    document.getElementById("tishi").innerHTML = "<i style='color:#f00;padding-left:10px'>代码已复制！</i>";
    setTimeout('document.getElementById("tishi").innerHTML = "";', 1000);
}