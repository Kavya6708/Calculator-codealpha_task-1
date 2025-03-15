function solve(val)
{
    var v=document.getElementById('display');
    v.value += val;

}
function result()
{
    var v1=document.getElementById('display').value;
    var v2=eval(v1);
    document.getElementById('display').value = v2;

}
function Clear()
{
    var input=document.getElementById('display');
    input.value='';
}
function backspace(C)
{
    var backspace=document.getElementById('display');
    backspace.value= backspace.value.slice(0,-1);
}