type AutoRetryParam<T> = {
  asyncFunction: () => Promise<T>;
  retries: number;
  delay: number;
  exponential?: boolean;
};

async function autoRetry<T>({
  asyncFunction,
  retries,
  delay,
  exponential = false,
}: AutoRetryParam<T>) {
  let backoff = delay;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await asyncFunction();
      return response;
    } catch (error) {
      if (attempt === retries) throw error;

      backoff = exponential ? delay * 1.5 ** (attempt - 1) : delay;
      console.log(`Retrying attempt : ${attempt} in ${backoff}ms`);

      await new Promise((resolve) => setTimeout(resolve, backoff));
    }
  }
}

export default autoRetry;
