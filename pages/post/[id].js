import {useRouter} from "next/router";
import {route} from "next/dist/next-server/server/router";

export default function Post() {
    const router =  useRouter()
    console.log(router)
    return <>
        <h1>Post {router.query.id}</h1>
    </>
}