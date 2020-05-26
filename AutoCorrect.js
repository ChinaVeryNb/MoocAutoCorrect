sum = prompt("请输入题目数量：");
grade = prompt("请输入要打的分数：");
comment = prompt("请输入评价：")
value = document.getElementsByClassName("j-textarea inputtxt")[1].attributes[2].value;
num = parseInt(value.slice(8));
for (var i = 0; i < 20 * sum; i++) {
    try {
        a = document.getElementById("auto-id-" + num.toString());
        a.value = comment;
        console.log(i);
    } catch (error) {
    }
    num++;
}
list = document.getElementsByClassName("s");
console.log(list.length);
for (var i = 0; i < list.length; i++) {
    try {
        var list2 = list[i].getElementsByClassName("d");
        list2[grade].getElementsByClassName("j-select")[0].checked = true;
    } catch (errror) {
        console.log(i + "!");
    }
}
