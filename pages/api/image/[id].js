import { client } from "../../../utils/client"

export default async function handler(req, res) {
    const data = await client.fetch(`
        *[_type == "cp-images" && _id == '${req.query.id}']
    `)

    console.log(req.query.id)

    res.status(200).json(data)
}