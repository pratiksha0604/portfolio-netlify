const form=document.getElementById("contact-form");
function check(f){
  const err=f.parentElement.querySelector(".error");
  let msg="";
  if(f.validity.valueMissing)msg="This field is required.";
  else if(f.validity.typeMismatch)msg="Enter a valid email address.";
  else if(f.validity.tooShort)msg="Please enter at least "+f.minLength+" characters.";
  err.textContent=msg;f.classList.toggle("invalid",!!msg);
  return !msg;
}
form.querySelectorAll("input,textarea").forEach(f=>f.addEventListener("blur",()=>check(f)));
form.addEventListener("submit",e=>{
  e.preventDefault();
  const ok=[...form.querySelectorAll("input,textarea")].map(check).every(Boolean);
  if(ok){console.log("Form submitted:",Object.fromEntries(new FormData(form)));form.reset();}
});
