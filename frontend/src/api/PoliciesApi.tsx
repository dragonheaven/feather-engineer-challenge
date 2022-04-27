
    
export const searchPolicies = async (search: string) => {
    try {
        const response = await fetch('http://localhost:4000/policies?search='+ search);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
    }
}