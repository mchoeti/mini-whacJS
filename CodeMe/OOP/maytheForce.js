function welcomeToITG(motto) {
    return motto
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
console.log(welcomeToITG("MaY the 4th be with you"));