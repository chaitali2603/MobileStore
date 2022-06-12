const BaseUrl = "https://localhost:44377";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
};

export async function ReqLogin(obj) {
  var raw = JSON.stringify(obj);
  requestOptions.body = raw;
  const req = await fetch(`${BaseUrl}/api/Login/LogIn`, requestOptions);
  if (!req.ok) {
    throw new Error("error in getting value");
  }
  const data = await req.json();
  return data;
}
export async function ReqSignUP(obj) {
  var raw = JSON.stringify(obj);
  requestOptions.body = raw;
  const req = await fetch(`${BaseUrl}/api/SignUp/SignUp`, requestOptions);
  const data = await req.json();
  if (!req.ok) {
    throw new Error(data);
  }

  return data;
}

export async function SearchAllProducts(Filter) {
  var raw = JSON.stringify(Filter);
  requestOptions.body = raw;
  const req = await fetch(
    `${BaseUrl}/api/Product/SearchProduct`,
    requestOptions
  );
  if (!req.ok) {
    throw new Error("Product You search is not available");
  }
  const data = await req.json();
  return data;
}
export async function ReqPersonalInformation(obj) {
  var raw = JSON.stringify(obj);
  requestOptions.body = raw;
  const req = await fetch(`${BaseUrl}/api/SignUp/SignUp`, requestOptions);
  const data = await req.json();
  if (!req.ok) {
    throw new Error(data);
  }

  return data;
}

export async function GetUserDetailsByToken(Token) {
  const req = await fetch(`${BaseUrl}/api/login/GetUserByToken?Token=${Token}`);
  const data = await req.json();
  if (!req.ok) {
    throw new Error(data);
  }

  return data;
}
export async function GetAppUserById(Token) {
  const req = await fetch(`${BaseUrl}/api/AppUser/GetAppUserById?Token=${Token}`);
  const data = await req.json();
  if (!req.ok) {
    throw new Error(data);
  }

  return data;
}
export async function GetAddressByUserId(Token) {
  const req = await fetch(`${BaseUrl}/api/AppUser/GetAddressByUserId?Token=${Token}`);
  const data = await req.json();
  if (!req.ok) {
    throw new Error(data);
  }

  return data;
}
export async function ReqMyAddress(obj) {
  var raw = JSON.stringify(obj);
  requestOptions.body = raw;
  const req = await fetch(`${BaseUrl}/api/Address/Address`, requestOptions);
  const data = await req.json();
  if (!req.ok) {
    throw new Error(data);
  }

  return data;
}