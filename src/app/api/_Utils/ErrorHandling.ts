//Define headers
const header = {
  "Content-Type": "application/json",
};

/**
 * throw codes accepted:
 * 
 * S001 : Missing parameters on POST
 * S002 : The content was not found
 * S003 : Not authorized
 * S004 : Wrong parameters
 * S005 : Redundant
 * 
 * ----
 * 
 * P2002: Error on unique constrain in prisma (conflict)
 * P2025: Record to update not found
 */


const notModifiedStatus = 304;
const badRequestStatus = 400;
const unauthorizedStatus = 401;
const notFoundStatus = 404;
const conflictStatus = 409;
const internalServerStatus = 500;

export async function redundantError(message:string) {
  return new Response(
    JSON.stringify({
      errorMessage: message,
    }),
    {
      status: notModifiedStatus,
      headers: header,
    }
  );
  
}

export async function missingParametersError(message: string) {
  return new Response(
    JSON.stringify({
      errorMessage: message,
    }),
    {
      status: badRequestStatus,
      headers: header,
    }
  );
}

export async function wrongParametersError(message: string) {
  return new Response(
    JSON.stringify({
      errorMessage: message,
    }),
    {
      status: badRequestStatus,
      headers: header,
    }
  );
}

export async function contentWasNotFoundError(message: string) {
  return new Response(
    JSON.stringify({
      errorMessage: message
    }),
    {
      status: notFoundStatus,
      headers: header,
    }
  );
}
export async function userUnautorizedError(message: string) {
  return new Response(
    JSON.stringify({
      errorMessage: message
    }),
    {
      status: unauthorizedStatus,
      headers: header,
    }
  );
}

export async function internalServerError(message: string, error: any) {
  return new Response(
    JSON.stringify({
      errorMessage: message,
      errorInformation: error
    }),
    {
      status: internalServerStatus,
      headers: header,
    }
  );
}

/////Prisma error codes

export async function conflictPrismaError(message: string) {
  return new Response(
    JSON.stringify({
      errorMessage: message,
    }),
    {
      status: conflictStatus,
      headers: header,
    }
  );
}
export async function recordUpdatePrismaError(message:string , error: string ) {
  return new Response(
    JSON.stringify({
      errorMessage: message,
      error: error
    }),
    {
      status: notFoundStatus,
      headers: header,
    }
  );
}