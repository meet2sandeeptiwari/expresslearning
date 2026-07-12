export function login(){
    return `
        <form action="/submit" method="post" >
           <input type="text" placeholder="enter name" />
           <input type="password" placeholder="enter password" />
           <button type="submit">Submit</button>
        </form>
        <a href="/">Go to Home Page</a>
    `
}
