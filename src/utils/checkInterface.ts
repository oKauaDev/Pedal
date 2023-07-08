function checkInterface<I>(obj: unknown, ...args: (keyof I)[]): obj is I {
  if (obj && typeof obj === "object") {
    return args.filter((v) => v in obj).length === args.length;
  }

  return false;
}

export default checkInterface;
