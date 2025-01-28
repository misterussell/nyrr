export const getCharacter = async () => {
    const character = {
        xid: "1",
        background: "monk",
        createdAt: "2025-01-25T12:27:39.833Z",
        effective_battleStats: {
            strength: 10,
            defense: 10,
            dexterity: 10,
            speed: 10,
            magic: 10
        },
        gender: "male",
        level: 1,
        netWorth: 100,
        race: "elf",
        status: "civilian",
        username: "rock",
        zodiac: "queen",
        profilePic: "/spaceelf.png"
    };
    return character;
};