const login_Username = "select * from users where username=$1";
const login_Email = "select * from users where email=$1";

export {
    login_Username,
    login_Email,
}