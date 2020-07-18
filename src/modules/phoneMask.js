function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
        const lastSimbol = event.target.value.slice(-1),
            keyCode = event.keyCode;
        const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");

        if (/\D/g.test(lastSimbol)) {
            event.target.style.border = '2px solid red';
        } else {
            event.target.style.border = 'none';
        }

        let i = 0,
            newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
        i = newValue.indexOf("_");
        if (i != -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
            a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
        }
        if (event.type == "blur" && this.value.length < 5) {
            console.log(event.target.classList.add('error-input'));
            this.value = "";
            event.target.style.border = '2px solid red';
        }
        if (event.type == "blur" && this.value.length !== 18) {
            console.log(event.target.classList.add('error-input'));
            event.target.style.border = '2px solid red';
        }
        if (event.type == "input" && this.value.length === 18) {
            event.target.style.border = '2px solid green';
        }
    }

    for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
    }
}
