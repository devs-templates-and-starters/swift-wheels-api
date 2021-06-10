const logger = {
  info: () => {},
  debug: () => {},
  error: () => {},
};

for (const [key, value] of Object.entries(logger)) {
  if (typeof value === 'function') {
    Object.assign(logger, {
      [key]: new Proxy(logger[key], {
        apply: (_, __, args) => {
          args = args.reduce((acc, curr) => {
            if (typeof curr === 'object') {
              curr = JSON.stringify(curr);
            }
            return `${acc} ${curr}`;
          });
          console.log(new Date(), `[${key.toUpperCase()}]`, args);
          return args;
        },
      }),
    });
  }
}

module.exports = logger;
