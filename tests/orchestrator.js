import retry from "async-retry";

async function waitForAllServices() {
  await waiteWebService();

  async function waiteWebService() {
    return retry(fetchStatusPages, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function fetchStatusPages() {
      const response = await fetch("http://localhost:3000/api/v1/status");

      if (response.status !== 200) {
        throw new Error("Failed to fetch status pages");
      }
    }
  }
}

export default {
  waitForAllServices,
};
