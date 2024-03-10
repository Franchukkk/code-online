let code = document.querySelector(".textarea.emmet-syntax-html"),
    codeCss = document.querySelector(".textarea.emmet-syntax-css"),
    codeJs = document.querySelector(".textarea.emmet-syntax-js"),
    outputFrame = document.querySelector("#output")

function updateOutput() {
    const htmlCode = code.value
    const cssCode = "<style>" + codeCss.value + "</style>"
    const jsCode = codeJs.value

    outputFrame.contentDocument.head.innerHTML = cssCode
    outputFrame.contentDocument.body.innerHTML = htmlCode
    outputFrame.contentWindow.eval(jsCode)
}

emmet.require('textarea').setup({
	pretty_break: true, // enable formatted line breaks (when inserting 
			            // between opening and closing tag) 
	use_tab: true       // expand abbreviations by Tab key
});


code.addEventListener("blur", updateOutput)
codeCss.addEventListener("blur", updateOutput)
codeJs.addEventListener("blur", updateOutput)

