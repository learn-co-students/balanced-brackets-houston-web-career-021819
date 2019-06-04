function isBalanced(bracketString) {
  const bracketArray = bracketString.split("")
  let cuts = []

  for (let i = 0; i < bracketArray.length - 1; i++) {
    if (
      (bracketArray[i] === "(" && bracketArray[i+1] === ")") ||
      (bracketArray[i] === "[" && bracketArray[i+1] === "]") ||
      (bracketArray[i] === "{" && bracketArray[i+1] === "}")
    ) {
      cuts.push(i)
    }
  }

  const newBracketArray = bracketArray.filter((x, index) => !(cuts.includes(index) || cuts.includes(index-1)))

  if (!newBracketArray.length) {
    return true
  } else if (!cuts.length) {
    return false
  } else {
    const result = isBalanced(newBracketArray.join(""))
    return result ? true : false
  }
}
