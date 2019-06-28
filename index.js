function isBalanced(string){
    let pairs = { "{": "}",
                 "[": "]",
                 "(": ")" }
    let openstack = []
    for (let i=0;i<string.length;i++){
        if (pairs[string[i]]){
            openstack.push(string[i])
        } else {
            let front = openstack.pop()
            if (string[i] !== pairs[front]){
                return false
            }
        }
    }
    return openstack.length === 0
}