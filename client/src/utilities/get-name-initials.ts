const getNameInitials = (name?: string): string => {
    if (!name) {
        return '';
    }

    const nameParts = name.split(' ');
    if (nameParts.length === 1) {
        return nameParts[0].charAt(0).toUpperCase();
    }

    const initials =
        nameParts[0].charAt(0).toUpperCase() +
        nameParts[1].charAt(0).toUpperCase();
    return initials;
};

export default getNameInitials;
