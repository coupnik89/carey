import { client } from "../../../utils/client"

export default async function handler(req, res) {
  const data = await client.fetch(`
    *[_type == 'cp-images'] {
      _id,
      image {
        asset->{
          _id,
          url
        }
      }
    }
    `)


    // *[_type == 'post'] {
    //     _id,
    //     caption,
    //     video {
    //     asset->{
    //         _id,
    //         url
    //     }
    //   }
    // }
  res.status(200).json(data)
}