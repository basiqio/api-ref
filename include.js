const referencePlayground = document.getElementById('ReferencePlayground');
const referenceChildren = [].slice.call(referencePlayground.children);
const paramRef = $('.param-type').first();
const newParamRef = paramRef.clone(true, true)
const codeSnippet = referenceChildren[3]
const mainContent = $('.markdown-body')[1];
const updatedLessThan = document.querySelector('.DateLine');
const readMeLogo = document.querySelector('#readmeLogo');

updatedLessThan.style.display = "none";
updatedLessThan.style.height = "0px";

readMeLogo.style.display = "none";
readMeLogo.style.height = "0px";

paramRef.insertBefore(codeSnippet);