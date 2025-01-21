# Initial Character Structuring

+ A character will have properties that cannot be updated such as `id` or `username` and properties that update through gameplay such as `level` and `merits`
+ Investigation will be needed on how to best store this data

```json
character = {
    "id": 1,
    "username": "zoro",
    "zodiac": "zodiac",
    "gender": "male",
    "level": 12,
    "race": "elf",
    "merits": [1, 2],
    "items": [1, 2],
    "created_at": "YYYY-MM-DD",
    "status": "civilian",
    "currentArea": 1,
    "rank": 2,
    "networth": 1000000,
    "effective_battlestats": {
        "strength": 1000.20,
        "defense": 1012.45,
        "dexterity": 1001.20,
        "speed": 1020.45,
    },
}
```

## Merits

+ There will be a set of merits to level
+ They will have id's and a number
