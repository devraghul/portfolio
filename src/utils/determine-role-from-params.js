export const determineRoleFromParams = () => {
    const id = new URLSearchParams(window?.location?.search).get("a");
    if (id) return "Full stack";
    else return "React"
};
