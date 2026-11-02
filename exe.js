const { todo } = require("node:test");

//1
async function getUser(userId)
{
const response= (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`))
return await response.json()
}
// getUser(1);
//2
async function getPost(postId)
{
   const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res=>res.json())
    console.log(`"Post title: ${response.title}`)
    return await response;

}
getPost(2)
3
async function getUserEmail(userId)
{
   const response= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>res.json())
   console.log(`User's email: ${response.email}`)
   return await response;
}
getUserEmail(2)
//4
async function listUserTodos(userId)
{
     await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(res=>res.json()).then(data=>console.log(`User ${userId} has ${data.length} todos`))
}
listUserTodos(3)
//5
async function checkPostExists(postId) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => {
        if (!res.ok) {
            throw new Error("Post not found");
        }
        return res.json();
    })
        .then(() => console.log("post exists"))
        .catch(() => console.log("not exist"));
}
checkPostExists(500)
//6
async function fetchWithDelay(url, delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
        .then(() => fetch(url))
        .then(res => res.text())
        .then(text => {
            console.log("First 50 chars:", text.slice(0, 50) + "...");
        })
}
fetchWithDelay('https://jsonplaceholder.typicode.com/posts/1', 2000);
//7
async function showKeys(url){
    const data=await fetch(url).then(res=>res.json()).then(data=>{console.log(`Keys:${Object.keys(data)}`);return Object.keys(data)})
}
showKeys('https://jsonplaceholder.typicode.com/posts/1')
8
async function getUserFirstPost(userId)
{
const user=getUser(userId)
const allPosts=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res=>res.json())
console.log(`First post title:${allPosts[0].title}`)
}
getUserFirstPost(1)
async function getPostCommentsCount(postId)
{
    const post=getPost(postId)
    const allComments=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res=>res.json())
    console.log(`Post has ${allComments.length} comments`)
}
getPostCommentsCount(1)
async function todoAndUser(todoId) {
  try {
    const todoRes = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = await todoRes.json();
    console.log(`Todo title: ${todo.title}`);
    const user = await getUser(todo.userId);
    console.log(`User name: ${user.name}`);
  } catch (error) {
    console.error("שגיאה בתהליך:", error);
  }
}
todoAndUser(1)