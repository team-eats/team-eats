import {cookies} from "next/headers";


export async function POST(req: Request) {

    const body = await req.json()

    const responseFromServer = await fetch(`${process.env.PUBLIC_API_URL}/apis/sign-in`,
        {
          method: 'POST',
        headers: {
              "Content-Type": "application/json",
        },
            body: JSON.stringify(body)
        })

    const authorization = responseFromServer.headers.get('Authorization')

    if (authorization) {
        const cookieJar = cookies()
        cookieJar.set("jwt-token", authorization, {path: "/", sameSite:"strict", httpOnly: true, maxAge:10_800})
    }

    return responseFromServer
}


export async function GET(request: Request) {
    return Response.json({message: "Henlo worl"})
}
