import nc from 'next-connect'

const handler = nc()

handler.get(async (req, res) => {
    res.status(200).json({
        name: 'tommy vong'
    })
})

export default handler