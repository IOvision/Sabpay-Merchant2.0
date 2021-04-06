export const categoryNameFormat = (name: string): string => {
    return name.replace(/_/gi, " ").replace(/1/gi, ", ").replace(/ and /gi, " & ")
}