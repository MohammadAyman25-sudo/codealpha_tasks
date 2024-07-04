/**
 * 
 * Hi CodeAlpha,
 * My name is Mohammad Ayman Ibrahim
 * 
 * I'm sorry for submitting this task with a Student ID that isn't mine
 * but I didn't recieve my offer letter to get my Student ID
 * 
 * I tried emailing you and messaging you on whatsapp but got no response
 * 
 * I messaged other students to get the link for the google drives where
 * they got there offer letter but didn't find it.
 * 
 * this was my last hope to get to you, and I'll write a similar message 
 * on the post I'll upload on linkedin aswell.
 * 
 * please send me my offer letter on the mail: mohammadaymanibrahim5@gmail.com
 * so I'll be able to submit my other tasks with it.
 */

let btn = document.getElementById('calc');
btn.onclick = ()=>{
    let bdate = document.getElementById("bDate").value;
    let today = new Date();
    bdate = new Date(bdate);
    let age_in_ms = today - bdate;
    let age_in_s = Math.floor(age_in_ms / 1000);
    let age_in_m = Math.floor(age_in_s / 60);
    let age_in_h = Math.floor(age_in_m / 60);
    let age_in_days = Math.floor(age_in_h / 24);
    let age_in_months = Math.floor(age_in_days * 0.0328550);
    let rem_days = Math.round(age_in_days - age_in_months / 0.032855);
    let age_in_years = Math.floor(age_in_months / 12);
    let rem_months = age_in_months % 12;
    let age = `You are now ${age_in_years} years, ${rem_months} months, ${rem_days} days old.`;
    document.getElementById('result').innerText = age;
};