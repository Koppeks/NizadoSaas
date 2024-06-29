//Define headers
const header = {
  "Content-Type": "application/json",
};

const createdStatus = 201;

export async function successCreated(message: string, item: object) {
  return new Response(
    JSON.stringify({
      message: message,
      itemCreated: item
    }),
    {
      status: createdStatus,
      headers: header,
    }
  );
}

export async function successTest(message:string) {
  return new Response(
    JSON.stringify({
      testMessageTea: message
    }),
    {
      status: 418,
      headers: header,
    }
  );
}