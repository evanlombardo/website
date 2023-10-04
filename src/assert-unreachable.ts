export function assertUnreachable(x: never): never {
  console.log(x);
  throw new Error("Statement is unreachable");
}
