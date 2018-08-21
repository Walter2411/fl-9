let user = prompt('Please enter your login');
if(user === 'User'){
    let password = prompt('Please enter your password');
    if(password ==='SuperUser'){
        alert(new Date().getHours() < 20 ? 'Good day!' : 'Good evening!')
    }else if(password===null||password===''){
        alert('canceled');
    }else{
        alert('Wrong password');
    }
}else if (user===null||user===''){
    alert('canceled');
}else if(user.length<4){
    alert(`I don't know any users having name length less than 4 symbols`);
} else{
    alert(`I don’t know you`);
}
