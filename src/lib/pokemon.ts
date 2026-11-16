

export function idFromUrl(url:string): number {
    const splitUrl = url.split("/").filter((element)=> element !== '');
    if((typeof(Number(splitUrl[splitUrl.length - 1]))) !== "number"){
        throw new Error("Invalid pokemon id: Id needs to be a number")
    }

    return Number(splitUrl[splitUrl.length - 1]);
}