//Define headers
const header = {
  "Content-Type": "application/json",
};

const okStatus = 200;
const createdStatus = 201;

export async function successAuth(message:string) {
  return new Response(
    JSON.stringify({
      message: message
    }),
    {
      status: okStatus,
      headers: header
    }
  )
}

export async function successCreated(message: string, item: object) {
  return new Response(
    JSON.stringify({
      message: message,
      payload: item
    }),
    {
      status: createdStatus,
      headers: header,
    }
  );
}
export async function successRequest(message: string, item: object) {
  return new Response(
    JSON.stringify({
      message: message,
      payload: item
    }),
    {
      status: okStatus,
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