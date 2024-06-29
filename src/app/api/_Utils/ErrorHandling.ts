//Define headers
const header = {
  "Content-Type": "application/json",
};

/**
 * throw codes accepted:
 * 
 * S001 : Content not found
 * S002 : The content was not found
 * S003 : Not authorized
 * S004 : Wrong parameters
 * S005 : Redundant
 * S006 : ExpiredToken
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
const expiredToken = 498;
const internalServerStatus = 500;

export async function expiredTokenError(message: string) {
  return new Response(
    JSON.stringify({
      errorMessage: message
    }),
    {
      status: expiredToken,
      headers: header,
    }
  );
}

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


export async function errorHandler(error: {code: string}) {
  console.log(error)
  if(error.code == "S001") return contentWasNotFoundError("Content was not found")
  if(error.code == "S002") return userUnautorizedError("User is not authorized")
  if(error.code == "S003") return missingParametersError("The token cannot be null")
  if(error.code == "S006") return expiredTokenError("The token has expired or is invalid")
  return internalServerError("Error verifying the user", error)
}