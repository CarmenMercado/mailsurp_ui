function utils (form) {
    if (form.body === null || form.subject === null || form.email === null){
        return false;
    }
    return true;
}
export {utils};

