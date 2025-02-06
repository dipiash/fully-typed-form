export const createEnumObject = <T extends string>(o: { [P in T]: P }) => o
