export const determineRoleFromParams = (search) => {
    const id = new URLSearchParams(search).get("a");
    if (id) return "Full stack";
    else return "React"
};
