export function validatePassword(password)
{
    return password.length > 4;
}

export function validateNames(name){
    const re = /^[A-Za-z\s+]+.{1,}$/;
    return re.test(String(name));
}