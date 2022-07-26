function changeText()
{
    var id = document.getElementsByName('button')[0].id;
    if (id == 1)
{
document.getElementById('text').innerHTML = 'Welcome to Melbourne';
document.getElementsByName('button')[0].id=0;
}
else
{
    document.getElementById('text').innerHTML = 'Enjoy your stay in Melbourne';
    document.getElementsByName('button')[0].id=1;

}
}
